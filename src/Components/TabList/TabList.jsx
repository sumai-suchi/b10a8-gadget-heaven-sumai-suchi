import { Link } from "react-router-dom";



const TabList = ({Category}) => {

    console.log(Category)
    
    return (
        <div>
            <div  className="grid grid-cols-1 gap-3 tabs-bordered bg-white p-4 rounded-lg">
                {
                    Category?.map((category,index)=><Link to={`/Gadgets/${category.category}`}
                        key={index}
                    className="btn space-y-2 p-2 bg-red-300 rounded-full ">{category.category}</Link>)
                }
                  
            </div>
        </div>
    );
};

export default TabList;