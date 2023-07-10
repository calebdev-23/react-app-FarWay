import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const Show = () =>{
    const {id} = useParams()
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/users/${id}`)
                .then((res)=>{
                        setIsLoading(false)
                        setUser(res.data)
                }
                )
                .catch((error)=>console.log(error))

    },[])

    return (
        <>
            <Link to={("/crud-operation")} className={"btn btn-primary btn-sm"} >Retour</Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                </tr>
                </thead>
                <tbody>
                {
                    isLoading ? <tr>
                            <td><Skeleton/></td>
                            <td><Skeleton/></td>
                            <td><Skeleton/></td>
                            <td><Skeleton/></td>
                        </tr> :
                    user ? <tr>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                    </tr>
                        : ""

                }

                </tbody>
            </table>
        </>
    )
}
export default Show