import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({p}) => {

    const {product_id, availability, category, description, price, product_image,
            product_title, rating, release_date, specification}=p
   
            
           
    return (
        <div>
            <div className="card bg-base-100 w-80 h-96 p-2 ">
                            <figure className="px-10 pt-10 w-[300px] h-[400px]">
                                <img
                                    src={product_image}
                                    alt='Show'
                                    className="rounded-xl" />
                            </figure>
                            <div className="p-2  space-x-1">
                                <h2 className="text-xl font-semibold">{product_title}</h2>
                                <p className="text-xs text-gray-500">{ description}</p>
                                <div className="card-actions justify-center items-center">
                                    <Link to={`/CardDetails/${product_id}`}><button className="btn w-40 mt-2 border  border-orange-500
                                     rounded-xl" >Details</button></Link>
                                </div>
                            </div>
                        </div>
            
        </div>
    );
};

export default SingleProduct;