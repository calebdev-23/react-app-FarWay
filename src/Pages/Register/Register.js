
import React, {useState} from "react"
import "./retgister.scss"

const Register = () =>{
    const initialState = {
        nom: "",
        email: "",
        password: "",
        confirmation:""
    }
    const [register, setRegister] = useState(initialState)
    const [confirmMdp, setConfirmMdp] = useState(false)
    const handleSubmit = (e) => {
        const {password, confirmation} = register
        e.preventDefault()
        if(password !== confirmation){
            setConfirmMdp(true)
        }else{
            setConfirmMdp(false)
        }
        setRegister(initialState)
    }
    const handleChange = (e) =>{
        setRegister((prev)=>({...prev, [e.target.id] : e.target.value}))
    }
    const {nom, email, password, confirmation} = register
    return(
            <div className={"registerForm"}>
                <form className={""} onSubmit={handleSubmit}>
                    <div className="row">
                        <h1 className={"text-center my-4"}>Inscription</h1>
                        {
                            confirmMdp ?
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="alert alert-danger alert-sm">Le mot de passe et la confirmation sont différent</div>
                                    </div>
                                </div> : ""
                        }
                       <div className="row justify-content-center">

                           <div className="col-12 col-md-6 col-lg-4">
                               <div className="mb-3">
                                   <label htmlFor="nom" className="form-label">Nom</label>
                                   <input type="text" className="form-control form-control-sm" id="nom" onChange={handleChange} value={nom} autoComplete={"off"} required={true}/>
                               </div>
                           </div>
                       </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control form-control-sm" id="email" onChange={handleChange} value={email} autoComplete={"off"} required={true}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Mot de passe</label>
                                        <input type="password" className="form-control form-control-sm" id="password" onChange={handleChange} value={password} required={true}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="confirmation" className="form-label">Confirmation du mot de passe</label>
                                        <input type="password" className="form-control form-control-sm" id="confirmation" onChange={handleChange} value={confirmation} required={true}/>
                                    </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <button className={"btn btn-success btn-sm"}>S'inscrire</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
    )
}
export default Register