// import BannerSection from "../BannerSection/BannerSection";
import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    
    return (
        <div>
            
                {/* // Location.pathname === '/' ?(
                //     <div className="pt-4">
                //         <div className="max-w-7xl mx-auto bg-purple-700  rounded-lg">
                //         <Navbar></Navbar>
                //         <BannerSection></BannerSection>
                        
                //     </div>
                //     <Outlet></Outlet>
                //     <Footer></Footer>
                //     </div>
                     
                // ): ( */}
                   
                     <Navbar></Navbar>
                     <Outlet></Outlet>
                     <Footer></Footer>
                    
                 
                
            
            
            
          
            
        </div>
    );
};

export default Root;