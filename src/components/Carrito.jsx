import React from 'react'
import Row from "./Row"

function Carrito({ carrito, eliminarDelCarrito }) {
  return (
    <Row>

      {carrito.map((productoCarrito, index) => {
        return (<div className="d-flex" key={`carrito-${productoCarrito.sku}-${index}`} >
          <p>{productoCarrito.name} {productoCarrito.ingredients} {productoCarrito.price}</p>
          <button className="btn btn-danger" onClick={() => eliminarDelCarrito(productoCarrito.id)}>ELIMINAR</button>

        </div>)
      })}

    </Row>
  )

}
export default Carrito;