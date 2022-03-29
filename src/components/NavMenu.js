import "./css/NavMenu.css"
import {Link} from "react-router-dom"

function NavMenu() {    
    return(
        <div>           
             <nav>
             <img src="/assets/logo.png" class="logo" alt="Youtube"></img>            
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/playlist">My Playlist</Link>
                    </li>            
                </ul>
            </nav>
        </div>      
    )
}
export default NavMenu;
