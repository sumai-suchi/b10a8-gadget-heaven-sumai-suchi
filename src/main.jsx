import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/Errorpage/Errorpage';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';

import Gadgets from './Components/Gadgets/Gadgets';
import Static from './Components/Static/Static';
import DashBoard from './Components/DashBoard/DashBoard';

import Product from './Components/Product/Product';
import CardDetails from './Components/CardDetails/CardDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        
        children:[
          
          {
            path:"/",
            element:<Gadgets></Gadgets>,
          
          
            children:[
              {
                path:"/Gadgets/:product",
                element:<Product></Product>,
                loader:()=>fetch('../Gadget.json')
              },
              {
                path:"/",
                element:<Product></Product>,
                loader:()=>fetch('../Gadget.json')
              },
             
              
             
              
            ]
            
          },
         
         
          ]

      },
      {
        path:'CardDetails/:id',
        element:<CardDetails></CardDetails>,
        loader:()=>fetch('/Gadget.json')

      },
      
     
     {
        path:'Static',
        element:<Static></Static>
      },
      {
        path:'DashBoard',
        element:<DashBoard></DashBoard>,
        loader:()=>fetch('/Gadget.json')
      }
    ]
  },
]);



  createRoot(document.getElementById('root')).render(
 
  

    <StrictMode>
   
   <RouterProvider router={router} />
    </StrictMode>,
    )

