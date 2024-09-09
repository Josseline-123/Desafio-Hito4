import Login from "./Login";
import Register from "./Register";
import { Container, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom";

const MainNav = () => {
    return(
        <Navbar bg="dark" data-bs-them="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>


                </li>
                </ul>
                   
            
            </Container> 
            </Navbar>
    )


}
export default MainNav;