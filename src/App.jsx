import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Row from "./components/Row"
import Carrito from "./components/Carrito"
import Home from "./components/Home"
// import { productos } from "./productos"
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Error404 from "./components/Error404"


function App() {
  const [listaProductos, setListaProductos] = useState([])
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (id) => {
    const producto = listaProductos.find((producto) => producto.id === id)
    setCarrito([...carrito, producto])

  }

  const eliminarDelCarrito = (id) => {
    const indiceProducto = carrito.findIndex(producto => producto.id === id)
    setCarrito((estadoPrevio) => {
      const nuevoCarrito = [...estadoPrevio]
      nuevoCarrito.splice(indiceProducto, 1)
      return nuevoCarrito
    })
  }

  const getPizzas = async () => {
    const respuesta = await fetch('http://localhost:5000/api/pizzas')
    const pizzas = await respuesta.json()
    setListaProductos(pizzas)
  }
  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <>
      <Navbar carrito={carrito} />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Home />} path="/" />
        <Route element={<Error404 />} path="*" />
        <Route element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito}  />} path="/carrito" />

      </Routes>

      <main className="container">


        <Row id="Productos-principales">

          {
            listaProductos.map((producto) =>
              <Card key={`principal-${producto.sku}`}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito} />)

          }
        </Row>


      </main>

      <Footer />

    </>

  )
}

export default App
