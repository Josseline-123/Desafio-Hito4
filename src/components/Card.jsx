import propTypes from "prop-types"

function Card ({producto:{img, name, ingredients, price, id }, agregarAlCarrito}) {
    return (
        <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
        <div className="card mx-2">
          <img src={img} className="card-img-top" alt="Pizzas" />
          <div className="card-body">
            <h5 className="card-title fw-light mb-3">
              {name}
            </h5>
            <p className="card-text h6 fw-light">{ingredients}</p>
            <p className="fw-light">
              <i className="fas fa-map-marker-alt fa-xs"></i>
             
            </p>
            <hr />
            <ul className="list-group list-group-flush text-right">
              <li className="
                    list-group-item
                    ms-auto
                    fw-light
                    gris
                    py-0
                    pe-1
                    2
                    1
                    5
                    py-0
                    pe-1
                    2
                    1
                    5
                  ">
             
                <span className="h5 fw-bold green ms-3">{price}</span>
              </li>
            </ul>
            <button className="btn btn-primary" onClick={() => agregarAlCarrito(id)}> Agregar al Carrito</button>
          </div>
        </div>
      </article>
     
    
    )
    
    }
    Card.propTypes = {
      producto: {
        img: propTypes.string,
        name: propTypes.string,
        ingredients: propTypes.string,
        price: propTypes.string,
        id: propTypes.string,
       
      },
      
      agregarAlCarrito: propTypes.func
        
      }
    
    
    export default Card;