import image from "./../../assets/informatique.jpg"
const Product = ({name, price, description, illustration}) =>{
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card shadow" style={{width : ""}} >
                <img src={`http://localhost:8000/upload/products/${illustration}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <span className={"price_product"}>{price}$</span>
                    </div>
            </div>
        </div>
    )
}     
export default Product