import { useLoaderData, useLocation, useParams } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";

const Product = () => {

    const {product}=useParams()
  
    console.log({product})

    


    const gadget=useLoaderData()
    console.log(gadget)
    
    
    
 

    const FilterProducts=gadget.filter(g => product === g.category)
    console.log(FilterProducts)

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3">
            
          {
            FilterProducts.length !== 0 ?(
                
            FilterProducts.map(p=><SingleProduct key={p.product_id} p={p}></SingleProduct>)
                  
            ):
            (
                gadget.map(p=><SingleProduct key={p.product_id} p={p}></SingleProduct> )
        )
          }
           
        </div>
    );








};

export default Product;