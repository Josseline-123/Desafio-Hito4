import Navbar from "./components/Navbar"
//import Card from "./components/Card"
import Footer from "./components/Footer"
import Row from "./components/Row"
import Pizza from "./components/Pizza"
import Home from "./components/Home"
import { productos } from "./productos"
import { useState } from "react"
//import Register from "./components/Register"
//import Login from "./components/Login"


function App() {
  //const [listaProductos, setListaProductos] = useState(productos) 
  //const [carrito, setCarrito] = useState([]) 

  //const agregarAlCarrito = (id) => {
    //const producto = listaProductos.find((producto) => producto.id === id)
    //setCarrito([...carrito, producto])
   
 // }

 // const eliminarDelCarrito = (id) => {
   // const indiceProducto = carrito.findIndex(producto => producto.id === id)
    
    //setCarrito((estadoPrevio) => {
    // const nuevoCarrito = [...estadoPrevio]
     //nuevoCarrito.splice(indiceProducto, 1)
    // return nuevoCarrito
    //})
 // }
 
  return (
    <>

    <Navbar />

   {/* <Row>

{carrito.map((productoCarrito, index)=>{
    return (<div key={`carrito-${productoCarrito.sku}-${index}`} >
    <p onClick={() => eliminarDelCarrito(productoCarrito.id)}>{productoCarrito.name} {productoCarrito.ingredients} {productoCarrito.price}</p>
    
    </div>)
  })}

  </Row> 

 {/* <RegisterPage /> */}
{/* <LoginPage /> */}
  <main >
    
   
    
      <h1> ¡Pizzeria Mamma Mia!</h1>
      <img src="./img/Header.jpg" className="img"/>
      </main> 
     
   <main className="container">

    <Home/> 
    <Pizza/>


{/* <Row id="Productos-principales">
 
  {
      listaProductos.map((producto) => 
      <Card key={`principal-${producto.sku}`} 
       producto={producto}
       agregarAlCarrito={agregarAlCarrito} />)
       
  } 
   </Row>*/}
      
  </main>
      
 <Footer/>

</>

)
}

export default App;

