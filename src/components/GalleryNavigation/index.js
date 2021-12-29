import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';
function GalleryNavigation({galleries}) {
    console.log(galleries)
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink exact to="/"> Home </NavLink>
            <br></br>
            { galleries.map((gallery) => (
                <span>
                    <NavLink exact to={`/galleries/${gallery.id}`}> {gallery.name} </NavLink>
                    <br></br>
                </span>
        ))}
        </nav>

        );
}

export default GalleryNavigation
