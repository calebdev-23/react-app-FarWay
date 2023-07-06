import './navbar.scss'
import {useEffect, useState} from "react";
import auto from "../../assets/auto.png"
import light from "../../assets/soleil.png"
import dark from "../../assets/moon.png"
import personne from "../../assets/la-personne.png"
import {Link, NavLink} from "react-router-dom";
const Navbar = () =>{
    const [theme, setTheme] = useState(localStorage.getItem("theme")||"light")
    useEffect(() => {
     document.documentElement.setAttribute("data-bs-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme]);
    return(
        <nav className="navbar navbar-expand-lg shadow">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <span className={"mot-1 mx-1"}>Caleb</span>
                    <span className={"mot-2"}>Info</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link " href="#">Acceuil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/products"} className="nav-link" href="#">Produits</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/contact"} className="nav-link" href="#">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/crud-operation"} className="nav-link" href="#">OperationCrud</NavLink>
                        </li>

                    </ul>
                    <form className="d-flex justify-content-center align-items-center" role="search">
                        <ul className={"mb-0 list-unstyled mx-2"}>
                            <li className="nav-item mb-0">
                                <Link to={"/account/login"} className="nav-link">
                                    <img src={personne} alt=""/>
                                    <span className={"mx-1"}>
                                   Login
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                { theme === "light" ?
                                    <img src={dark} alt="" className={"mx-1"} />
                                    :
                                    <img src={light} alt="" className={"mx-1"}/>
                                }
                            </button>
                            <ul className="dropdown-menu">
                                <li onClick={()=>setTheme("light")}><img src={light} alt="" className={"mx-1"} />Light</li>
                                <li onClick={()=>setTheme("dark")}><img src={dark} alt="" className={"mx-1"}/>Dark</li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar