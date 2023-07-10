import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const TrTable = ({data, handleClick, handleDelete}) =>{
    return (<>
            {
                data.map((item, index)=>(  <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>
                        <FontAwesomeIcon icon={faTrash} color={"#e31818"} onClick={()=>handleDelete(item.id)} className={"delete"}/>
                        <Link to={`edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare}  className={"edit mx-2"}/></Link>
                        <button className={"border-0 show"} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"  onChange={()=>handleClick(item.id)}>
                            <FontAwesomeIcon icon={faEye}  className={"show"}/>
                        </button>
                    </td>
                </tr>))
            }
    </>


    )
}
export default TrTable