import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product";
import './product.scss'

const Products = () =>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getAllProducts = async()=>{
            const response = await axios.get('http://localhost:8000/api/products')
            const data = response.data["hydra:member"]
            setProducts(data)
        }
        getAllProducts()
    },[])
  //  console.log(products)
    return(
        <section className={"allProducts"}>
            <div className={"row"}>
                {
                    products.map((product)=>(<Product key={product.id} name={product.name} price={product.price} description={product.description}/>))
                }
            </div>
        </section>
    )
}
export default Products