import React, { useContext } from 'react';
import { RxCrossCircled } from "react-icons/rx";


const Items = (items) => {


    

 
  

    return (
        

            <div>
             
                <div className="hero w-[800px] h-[400] bg-base-200 p-4 border m-10  rounded-xl">
                <div className="flex flex-col lg:flex-row">
                    <img
                    src={items.i.product_image}
                        className="w-[30%] h-[30%] rounded-lg p-4 " />
                    <div>
                        <h1 className="text-xl flex justify-between font-bold">{items.i.product_title
                        } <RxCrossCircled /></h1>
                        <p className="py-6">
                            {
                                items.i.description
                            }
                        </p>
                        <p>Price:${items.i.price}</p>
                        <button className="btn bg-violet-600 rounded-full">Add to cart</button>
                    </div>
                </div>
            </div>
            </div>



        
    );
};

export default Items;