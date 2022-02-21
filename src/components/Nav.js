import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="container-nav">
            <h1>Rick and Morty - Buscador</h1>
            <ul>
                <li><Link to="/">Personajes</Link></li>
                <li><Link to="/episodios">Episodios</Link></li>
                <li><Link to="/lugares">Lugares</Link></li>

            </ul>

            

            

        </nav>
    )
}

export default Nav;