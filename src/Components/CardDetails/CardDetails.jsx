
import { useLoaderData, useParams } from 'react-router-dom';
import Banner3 from './Banner3/Banner3';
import MyComponent from '../MyComponent/MyComponent';
import { FaShoppingCart } from "react-icons/fa";
import { AddToLocalCart } from '../../Java/Utility';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const CardDetails = () => {
   
  const {setWish,wish}=useContext(AuthContext)
  const id = useParams()
  const [isDisable,SetIsDisable]=useState(false)

  console.log(id.id)

  
  

  const handleCartItems=(item)=>
  {
     AddToLocalCart(item)

  }

  const handleWishList=(item)=>
  {
       if( wish.length === 0 )
       {
         wish.push(item)
       }
       else
       {
        
        const newWish=[...wish,item]
        setWish(newWish)
       }
  }

  console.log(wish)

  const data = useLoaderData()
  console.log(data)


  const single = data.filter(p => p.product_id === parseInt(id.id))
  console.log(single)

  const [s] = single
  console.log(s);

  return (
    <div className='relative'>
      <Banner3></Banner3>

      <div className=" absolute top-48 
                   rounded-xl left-40 w-[75%] h-[100%] card card-side  bg-base-100 shadow-xl">


        <img
          src={s.product_image}
          className='w-[400px] h-[400px]'
          alt="Movie" />



        <div className="card-body">
          <h2 className="card-title">{s.product_title}</h2>
          <h3>price:${s.price}</h3>
          <button className='
                        border border-green-600 
                        bg-green-50
                        text-green-600
                         text-xs w-20 h-6 rounded-full
                         
                         '>{s.availability ? 'In stock' : 'Not Available'}</button>

          <p className='text-gray-500'>{s.description}</p>
          <p className='text-gray-500'>
            <span className='font-bold'>Specification:</span>
            {
              s.specification.map((t,i) => <li key={i}>{t}</li>)
            }

          </p>

          <MyComponent  rating={s.rating}></MyComponent>

          
          <div className="card-actions " >
            <button className="btn w-36 h-6 bg-violet-600 rounded-full text-white
        " onClick={() => handleCartItems(s.product_id)}>Add to cart<FaShoppingCart /></button>

            <button className='btn rounded-full' disabled={isDisable} onClick={()=> {
              handleWishList(s.product_id)
              SetIsDisable(!isDisable)
            }}>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>





          </div>
       
        </div>
      </div>
    </div>

  );
};

export default CardDetails;