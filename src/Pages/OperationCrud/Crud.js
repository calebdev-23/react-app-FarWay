import axios from "axios";
import {useEffect, useState} from "react";
import './crud.scss'
import {Link, Outlet} from "react-router-dom";
import Show from "./Show";
import TrTable from "./TrTable";

const Crud  = () =>{
    const [users, setUsers] = useState([])
    const [laoding, setLoading] = useState(false)
    const [query, setQuery] = useState("")
    const getFullUsers = async () =>{
        await axios.get("http://localhost:8000/api/users").then((res)=> setUsers(res.data['hydra:member']) /*console.log(res.data['hydra:member']) */).catch((error)=>console.log(error))
    }
    const handleDelete = async (id) =>{
        try {
          await  axios.delete(`http://localhost:8000/api/users/${id}`).then(r => getFullUsers() )
        }catch (error) {
            console.log(error)
        }

    }
    const [user, setUser] = useState()
    const handleClik = (id) =>{
     axios.get(`http://localhost:8000/api/users/${id}`)
            .then((res)=>{
                    setUser(res.data)
                }
            )
            .catch((error)=>console.log(error))

    }
    useEffect(()=>{
        setLoading(true)
        getFullUsers().then((res)=>setLoading(false))
    }, [])
    const SearchData = (data) =>{
        const Keys = ["firstname", "lastname", "email", "contact"]
        return data.filter((item)=>
            Keys.some((key)=>item[key].toLowerCase().includes(query)))
    }
    const LoadingComponents = () =>{
        return (
            <tr>
                <td colSpan={"6"}>
                    <div className=" chargement d-flex justify-content-center align-items-center">
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

    return (<>
        <Outlet/>
        <h2>Operations Crud</h2>
        <div className="d-flex justify-content-between align-items-center">
            <div>Totale Items : {users.length}</div>
            <div>
                <Link to="create" className={"btn btn-success btn-sm"}>Create</Link>
                {
                    /* <input type="text"
                          className={"form-control"}
                          placeholder={"votre recherche"}
                          onChange={(e)=>setQuery(e.target.value)}
                   /> */
                }
            </div>
        </div>
        <input type="text"
        className={"form-control formSearch my-2"}
        placeholder={"votre recherche"}
        onChange={(e)=>setQuery(e.target.value)}
        />
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                laoding ? <LoadingComponents/> : <TrTable data={SearchData(users)} handleDelete={handleDelete} handleClick={handleClik}/>
            }
            </tbody>
        </table>
    <Show user={user}/>
    </>)
}
export default Crud