import Style from './Cards.module.css'

import Card from "../Card/Card"

import {useSelector} from "react-redux"


const Cards = () => {

  const isSearch=useSelector(state=>state.filters)
  const products=useSelector((state)=>state.items.allProducts)
  console.log("estoy en cards", isSearch)
  return (
    <div className={Style.Container}>
        {products?.map(c => (
        <Card key={c.id} id={c.id} name={c.name} price={c.price} image={c.image} raiting={c.raiting}
        />))}
    </div> 
  )
}

export default Cards