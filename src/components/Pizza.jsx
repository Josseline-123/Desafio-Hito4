import { useEffect, useState } from "react"

function Pizza() {


 const [pizza, setPizza] = useState({})

const getPizza = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas/p001')
    const pizza = await res.json()
    
    setPizza(pizza)
}
useEffect(() => { 
    getPizza()
}, [])
return(
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

    )




}
export default Pizza;
