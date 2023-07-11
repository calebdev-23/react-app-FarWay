import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";


const Show = ({user}) =>{

    return (
        <>
            <div className={`modal fade`}  id="showItem" tabIndex="-1" aria-labelledby="showItem" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bold" id="showItem">{user ? `Item ${user.id}` : ""}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p><span className={"fw-bold"}>FirstName</span> : { user ? user.firstname : <Skeleton/>}</p>
                            <p><span className={"fw-bold"}>LastName</span> : {user ? user.lastname : <Skeleton/>}</p>
                            <p><span className={"fw-bold"}>Email</span> : {user ? user.email : <Skeleton/>}</p>
                            <p><span className={"fw-bold"}>Contact</span> : {user? user.contact : <Skeleton/>}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Fermer</button>
                                <Link to={ user ? `edit/${user.id}` : ""} >
                                    <button className="btn btn-primary btn-sm" data-bs-dismiss="modal" aria-label="Close">
                                        Editer
                                    </button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Show