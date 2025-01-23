
import React, { useContext } from 'react';
import { RxCrossCircled } from "react-icons/rx";


const Item = (items) => {


    
console.log(items)
 
  

    return (
        

            <div>
             
                <div className="hero w-[800px] h-[400] bg-base-200 p-4 border m-10  rounded-xl">
                <div className="flex flex-col lg:flex-row">
                    <img
                    src={items.w.product_image}
                        className="w-[30%] h-[30%] rounded-lg p-4 " />
                    <div>
                        <h1 className="text-xl flex justify-between font-bold">{items.w.product_title
                        } <RxCrossCircled /></h1>
                        <p className="py-6">
                            {
                                items.w.description
                            }
                        </p>
                        <p>Price:${items.w.price}</p>
                        <button className="btn bg-violet-600 rounded-full">Add to cart</button>
                    </div>
                </div>
            </div>
            </div>



        
    );
};

export default Item;