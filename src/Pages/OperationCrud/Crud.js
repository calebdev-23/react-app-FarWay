import axios from "axios";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './crud.scss'
import {Link, Outlet} from "react-router-dom";

const Crud  = () =>{
    const [user, setUsers] = useState([])
    const [laoding, setLoading] = useState(false)
    const getFullUsers = async () =>{
        setLoading(true)
        await axios.get("http://localhost:8000/api/users").then((res)=> setUsers(res.data['hydra:member']) /*console.log(res.data['hydra:member']) */).catch((error)=>console.log(error))
        setLoading(false)
    }
    const handleDelete = async (id) =>{
        try {
          await  axios.delete(`http://localhost:8000/api/users/${id}`).then(r => getFullUsers() )
        }catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        setLoading(true)
        getFullUsers()
    }, [])

    return (<>
        <Outlet/>
        <h2>Operations Crud</h2>
        <div>Totale Items : {user.length}</div>
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                laoding ?

                    <tr className={""}>
                        <td colSpan={"6"}>
                            <div className=" chargement d-flex justify-content-center align-items-center">
                                <div className="spinner-border" role="status">
                                </div>
                            </div>
                        </td>
                    </tr>
                    :
                user.map((item, index)=>(
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <FontAwesomeIcon icon={faTrash} color={"#e31818"} onClick={()=>handleDelete(item.id)} className={"delete"}/>
                            <Link to={`edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare}  className={"edit mx-2"}/></Link>

                        </td>
                    </tr>
                ))
            }

            </tbody>
        </table>
    </>)
}
export default Crud