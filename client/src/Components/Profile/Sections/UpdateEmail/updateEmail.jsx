// import axios from "axios"
// //import { auth, updateEmail, sendEmailVerification } from '../../firebase/firebase';
// import { useEffect } from "react";
// import { useState } from 'react';
// import { useSelector } from 'react-redux'
// import { useGetUserByIdQuery ,useUpdateUserMutation } from "../../libs/redux/services/usersApi";
// import { Form, Input, Button, Upload, Spin, Tabs } from 'antd';
// import ImgCrop from 'antd-img-crop';
// import styles from './profile.module.css'

const FormUpdateEmail = () => {
//     const user = useSelector(state => state.user.userLog)
//     const id = user?.uid;

//     const { data: getUserById, isLoading, refetch } = useGetUserByIdQuery(id);
//     const [ updateUser ] = useUpdateUserMutation();

//     const [ updateProfile, setUpdateProfile ] = useState({ image: '', name: '', lastName: '', address: '', email: '', phone: ''});

//     // Cargo al estado con el usuario
//     useEffect(() => {
//         if (getUserById) {
//             setUpdateProfile({
//                 image: getUserById?.image ||'https://res.cloudinary.com/dkgeccpz4/image/upload/v1699475288/profileDefault_haxmxb.jpg', 
//                 name: getUserById.name, lastName: getUserById.lastName, address: user.address, 
//                 email: getUserById.email, phone: getUserById.phone,
//             });
//         } 
//         refetch();
//         console.log(getUserById);
//     }, [getUserById]);

//     //Carga de imagen
//     const defaultFileList = [{ uid: '-1', name: 'image.png', status: 'done',
//           url: updateProfile.image,},];
    
//     const [fileList, setFileList] = useState(defaultFileList);


//     const onChange = async ({  fileList: newFileList }) => {   
//         if (newFileList.length === 0) setFileList(defaultFileList);
//         else setFileList([newFileList[newFileList.length - 1]]);
//     };
    
//     const onPreview = async (file) => {
//         let src = file.url;
//         if (!src) {
//             src = await new Promise((resolve) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file.originFileObj);
//             reader.onload = () => resolve(reader.result);
//           });
//         }
//         const image = new Image();
//         image.src = src;
//         const imgWindow = window.open(src);
//         imgWindow?.document.write(image.outerHTML);
//     };

//     useEffect(() => {
//         console.log(updateProfile);
//     },[updateProfile])

//     // Subida de imagen y actualización de la propiedad del estado
//     const uploadImage = async ({ file, onSuccess, onError }) => {
//         try {
//             const formData = new FormData();
//             formData.append('file', file);
//             formData.append('upload_preset', 'Las Encinas Boutique');
      
//             const response = await axios.post('https://api.cloudinary.com/v1_1/dkgeccpz4/image/upload', formData);
//             const imageUrl = response.data.secure_url;

//             setUpdateProfile({ ...updateProfile, image: imageUrl });
//             setFileList([{ uid: '-1', name: 'image.png', status: 'done', url: imageUrl }]);
      
//             onSuccess(null, file);
//         } catch (error) {
//             console.error('Error al cargar la imagen', error);
//             onError(error);
//         }
//     };

//     // Actualizacion estado
//     const handleOnChange = (e) => {
//         setUpdateProfile({
//           ...updateProfile,
//           [e.target.name]: e.target.value,
//         });
//     };

//     useEffect(() => {
//     const updateUserData = async () => {
//     await updateUser({ id, updateProfile });
//   };

//     updateUserData();
//     }, [updateProfile]);

//     //Envío formulario
//     const onFinish = async (values) => {
//         try {
//             const newEmail = values.email;
//             //await getIdToken(auth.currentUser);
//             await sendEmailVerification(newEmail);
//             await updateEmail(auth.currentUser, newEmail);
//             console.log('Correo electrónico actualizado exitosamente');
//         } catch (error) {
            
//             console.error('Error al actualizar el correo electrónico', error);
//         }

//         const newProfile={ ...updateProfile, ...values };
//         setUpdateProfile(newProfile);

        
//         await updateUser({id, updateProfile});
//         refetch();
//     }
    
//     const validateName = (rule, value) => {
//         if (value && !/^[A-Z][a-z]*( [A-Z][a-z]*)?$/.test(value)) {
//             return Promise.reject('Nombre inválido.');
//         }
//         return Promise.resolve();
//     }

//     const validatePhone = (rule, value) => {
//         if (!/^\d{10}$/.test(value)) {
//             return Promise.reject('El teléfono debe tener 10 dígitos.');
//         }
//         return Promise.resolve();
//     }
    
//     const validateAddress = (rule, value) => {
//         if (!/^[A-Z][a-z]*[^.!]*$/.test(value)) {
//             return Promise.reject('La dirección no admite puntos ni signos de exclamación, el nombre de la calle comienza con mayúscula y termina con minúsculas.');
//         }
//         return Promise.resolve();
//     }
    
//     const validateEmail = (rule, value) => {
//         if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
//             return Promise.reject('El correo electrónico no es válido.');
//         }
//         return Promise.resolve();
//     }
    
return(
    <div></div>
);
    
}

export default FormUpdateEmail;