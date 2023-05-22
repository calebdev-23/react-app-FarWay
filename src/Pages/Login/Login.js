import "./login.scss"
import {Link} from "react-router-dom";
const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("success")
}
const Login = () =>{
    return(
        <div className={"loginForm"}>
            <form className={""}  onSubmit={handleSubmit}>
                <div className={"row justify-content-center"}>
                    <h3 className={"text-center my-5 fw-bold"}>Connexion</h3>
                    <div className="row justify-content-center">
                        <div className=" col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="Email"/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className=" col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className=" col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">Connexion</button>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className=" col-12 col-sm-8 col-md-6 col-lg-4">
                           <p><Link to={"/account/register"} className="nav-link">Créer un compte</Link></p>
                            <p>Mot de passe oublié?</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login