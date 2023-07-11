import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Create = () =>{
    const {id} = useParams()
    const navigate = useNavigate()
    const inititalState = {
        firstname : "",
        lastname: "",
        email:"",
        contact:"",
        password:""
    }

    const [item, setItem] = useState(inititalState)
    const handleChange = (e) =>{
        setItem((prev)=>({...prev, [e.target.id] : e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users", item )
            .then(()=>   navigate("/crud-operation"))
            .catch((error) => console.log(error))
    }

    const{firstname, lastname, contact, email, password} = item

    console.log(item)
    return (

        <div className={"EditForm"}>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <h1 className={"text-center my-4"}>Nouveau item</h1>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label">Firstname</label>
                                <input type="text" className="form-control form-control-sm" id="firstname" onChange={handleChange} value={firstname} autoComplete={"off"} required={true}/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Lastname</label>
                                    <input type="text" className="form-control form-control-sm" id="lastname" onChange={handleChange} value={lastname} autoComplete={"off"} required={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control form-control-sm" id="email" onChange={handleChange} value={email} required={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label">Contact</label>
                                <input type="text" className="form-control form-control-sm" id="contact" onChange={handleChange} value={contact} required={true}/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Mot de passe</label>
                                <input type="password" className="form-control form-control-sm" id="password" onChange={handleChange} value={password} required={true}/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <button  className={"btn btn-success btn-sm me-2"}>Ajouter</button>
                            <Link to={("/crud-operation")} className={"btn btn-primary btn-sm"} >Retour</Link>
                        </div>
                    </div>

                </div>
            </form>
        </div>)
}
export default Create