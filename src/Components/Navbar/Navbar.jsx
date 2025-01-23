import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const Location = useLocation();
    console.log(Location.pathname)

    return (

        <div className={`navbar ${Location.pathname === '/' ? 'bg-purple-700' : 'bg-white text-black'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className={`btn btn-ghost text-xl 
                        ${Location.pathname === '/' ? 'text-white' : ' text-black'}`}>Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 text-black
                        ${Location.pathname === '/' ? 'text-white' : ''}`}>
                    <li ><Link to='/'>Home</Link></li>
                    <li>
                        <Link to='Static'>Statistic</Link>

                    </li>
                    <li><Link to='DashBoard'>DashBoard</Link></li>
                    <li><Link to='Contact'> Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn rounded-full bg-gray-300"><FaShoppingCart /></a>
                <button className="btn rounded-full bg-gray-300">

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

    );
};

export default Navbar;