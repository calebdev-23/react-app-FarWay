import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Edit = () =>{
    const {id} = useParams()
    const getOneItem = async () =>{
        try {
            const data =    await axios.get(`http://localhost:8000/api/users/4}`)
            console.log(data)

        }catch (error){
            console.log(error)
        }
    }

    const intialState = {
        firstname : "",
        lastname : "",
        email: "",
        contact: ""
    }
    const [item, setItem] = useState(intialState)
    const handleSubmit = (e) => {

    }
    const handleChange = (e) =>{
        setItem((prev)=>({...prev, [e.target.id] : e.target.value}))
    }
        const{firstname, lastname, contact, email} =item
    console.log(item)
        return ( <div className={"EditForm"}>
            <form className={""} onSubmit={handleSubmit}>
                <div className="row">
                    <h1 className={"text-center my-4"}>Mise à jour de l'item {id}</h1>

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
                            <button className={"btn btn-success btn-sm"}>Mettre à jour</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>)
}
export default Edit