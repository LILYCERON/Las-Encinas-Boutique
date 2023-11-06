import axios from "axios"
import  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from './FormEditProduct.module.css'


import { useUpdateProductMutation , useGetProductByIdQuery } from '../../../../libs/redux/services/productsApi';

const FormEditProduct = () => {

  const { id } = useParams()

  const types=useSelector((state)=>state.types.allTypes)

  const categories=useSelector((state)=>state.categories.allCategories)

  const {data} = useGetProductByIdQuery(id);
  const [mutate] = useUpdateProductMutation()

  const [imageToCloud, setImageToCloud] = useState("");
  const [state, setState] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    raiting: 0,
    category: [],
    type: "",
  });

  useEffect(() => {
    if (data) {
      const { name, image, price, description, raiting, category, type } = data;
      setState({
        name,
        image,
        price,
        description,
        raiting,
        category: category.split(","), // Si category es una cadena separada por comas
        type: type.split(","), // Si type es una cadena separada por comas
      });
    }
  }, [data]);

  const resetState = () => {
    setState({
      name: "",
      image: "",
      price: 0,
      description: "",
      raiting: 0,
      category: [],
      type: "",
    });
  };

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const previewFiles = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImageToCloud(reader.result);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "Las Encinas Boutique");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dkgeccpz4/image/upload",
          formData
        );
        const imageUrl = response.data.secure_url;

        setState({
          ...state,
          image: imageUrl,
        });
      } catch (error) {
        console.error("Error al cargar la imagen", error);
      }
      previewFiles(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) { // Asegúrate de que el id no sea undefined
        const categoryString = state.category.join(",");
        const typeString = state.type.join(",");
        const dataToSend = { ...state, category: categoryString, type: typeString };
        console.log(id);
        await mutate({
            id: id,
            updatedProduct: dataToSend,
          });          
        resetState();
      } else {
        console.error("ID no definido");
      }
    } catch (error) {
      console.log({ error: error.message, details: error.details });
      alert("Error al crear producto: " + error);
    }
  };

return (
    <div className={styles.Container}>
        <form className={styles.Form} onSubmit={handleSubmit}>

            <h1 className={styles.tittle}>Editar producto</h1>

            <div className={styles.Section}>
                <div className={styles.Element1}>
                <label>Nombre:</label>
                <input type="text" name="name" value={state.name} onChange={(e) => handleChange("name", e.target.value)}/>
                </div>

                <div className={styles.Element1}>
                <label>Precio:</label>
                <input type="number" min="1" name="price" value={state.price} onChange={(e) => handleChange("price", e.target.value)}/>
                </div>

                <div className={styles.Element1}>
                <label>Descripción:</label>
                <textarea rows="4" name="description" value={state.description} onChange={(e) => handleChange("description", e.target.value)}/>
                </div>

                <div className={styles.Element1}>
                <label>Rate:</label>
                <input type="number" name="raiting" value={state.raiting} onChange={(e) => handleChange("raiting", e.target.value)} />
                </div>
            </div>

            <div className={styles.Section}>

                <div className={styles.Element}>
                <label>Imagen:</label>
                <input type="text" name="image" value={state.image} onChange={(e) => handleChange("image", e.target.value)} />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                </div>

            </div>

            {imageToCloud && (
                <div style={{ display: "flex", justifyContent: "center", margin: "1%"}}>
                    <img src={imageToCloud} alt="" style={{ maxWidth: "10%", maxHeight: "auto" }}/>
                </div>
            )}

            <div className={styles.Section2}>
                
                <div className={styles.Element2}>
                <label>Categorías:</label>
                <select name="category" multiple value={state.category} onChange={(e) => handleChange("category", [...e.target.options].filter((option) => option.selected).map((option) => option.value))}>
                {categories?.map((c, i) => (<option value={c.name} key={i}>{c.name}</option>))}
                </select>
                </div>

                <div className={styles.Element2}>
                <label>Tipo:</label>
                <select name="type" multiple value={state.type} onChange={(e) => handleChange("type", [...e.target.options].filter((option) => option.selected).map((option) => option.value))}>
                {types?.map((t, i) => (<option value={t.name} key={i}>{t.name}</option>))}
                </select>
                </div>

            </div>
            
            <div className={styles.Section}>
            <button type="submit">Actualizar producto</button>
            <Link to="/productsAdmin"><button>Volver</button></Link>
            </div>
            
        </form>
    </div>
    )
};

export default FormEditProduct;