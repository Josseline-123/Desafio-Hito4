import propTypes from "prop-types"

function Row(props){
    return (

      <section className="row">
       {props.children}

      </section>  
    )
}
Row.propTypes = {
    children: propTypes.node
}
export default Row;