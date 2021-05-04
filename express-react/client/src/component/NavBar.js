import './NavBar.css'
import * as Icon from 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar(props)
{
    let homeIcon, notifIcon, AddIcon = "orange";
   
    
    
    return(
        <div>
         <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                <a className="  nav-link add"   href="/add"><Icon.PlusSquare width="32" height="32" color={AddIcon}/></a>
                </li>
                <li>
                <a className=" navbar-item home"   href="/"><Icon.House width="31" height="45" color={homeIcon}/></a>
                </li>
                 <li className="nav-item ">
                  <a className=" nav-link notification"  href="/notification" ><Icon.Bell width="30" height="29" color={notifIcon}/></a>
                 </li>
                
                  </ul>
               </div>
          </div>
         </nav>
        </div>
    )
}

export default NavBar;