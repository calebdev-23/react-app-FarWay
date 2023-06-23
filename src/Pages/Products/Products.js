import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product";
import './product.scss'
import imgLoading from "./../../assets/loading (2).gif"

const Products = () =>{
    const [products, setProducts] = useState([])
    const [laoding, setLoading] = useState(false)
    useEffect(()=>{
        const getAllProducts = async()=>{
            setLoading(true)
            const response = await axios.get('http://localhost:8000/api/products')
            const data = response.data["hydra:member"]
            setLoading(false)
            setProducts(data)
        }
        getAllProducts()
    },[])
    console.log(products)
    return(
        <section className={"allProducts"}>
            <div className={"row justify-content-center align-items-center"}>
                {
                    laoding ? <img src={imgLoading} className={"loading"}/> :  products.map((product)=>(<Product key={product.id} illustration={product.illustration} name={product.name} price={product.price} description={product.description}/>))
                }
            </div>
        </section>
    )
}
export default Products