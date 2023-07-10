import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const TrTable = ({data, handleDelete}) =>{
    return (<>
            {
                data.map((item, index)=>(  <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>

                        <FontAwesomeIcon icon={faTrash} color={"#e31818"} onClick={()=>handleDelete(item.id)} className={"delete"}/>
                        <Link to={`edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare}  className={"edit mx-2"}/></Link>
                        <Link to={`show/${item.id}`} type={"button"} className={"border-0 show"} >
                            <FontAwesomeIcon icon={faEye} color={"rgba(10,10,10,0.82)"} className={"show"}/>
                        </Link>
                    </td>
                </tr>))
            }

            {
                /*
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                 */
            }
    </>


    )
}
export default TrTable