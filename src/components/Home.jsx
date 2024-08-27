import React,{ useEffect, useState} from "react";

function Home(){
const [pizzas, setPizzas] = useState([])
const getPizzas = async ()  => {
const respuesta = await fetch('http://localhost:5000/api/pizzas') 
const pizzas = await respuesta.json()
 setPizzas(pizzas)
}
useEffect(() => {
 getPizzas()
}, [] )

return(
<div>
{pizzas.map((pizza)=> (
   <div id={pizza.id}>
   <img src={pizza.img} alt=""/>
   <h1>{pizza.name} </h1>
   <p>{pizza.price}</p>
   <ul>
   
     {pizza.ingredients?.map((ingredient) => {

       return <li key={ingredient}>{ingredient}</li>
     })}
   </ul>
  <p>{pizza.desc}</p>
   </div>
))}
</div>

)
}
export default Home;