// import AbsoluteSection from "../AbsoluteSection/AbsoluteSection";

// import BannerSection from "../BannerSection/BannerSection";

import { Outlet } from "react-router-dom";
import BannerSection from "../BannerSection/BannerSection";
import AbsoluteSection from "../AbsoluteSection/AbsoluteSection";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
    
   
    

    
    return (
        <div className="relative bg-neutral-100">
            
            <BannerSection></BannerSection>
            <AbsoluteSection></AbsoluteSection>
            {/* <Gadgets></Gadgets> */}
            <div className="max-h-full">
            <Outlet></Outlet>
            </div>
            
           

           
        </div>
    ); 
};

export default Home;