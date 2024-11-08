

const Footer = () => {
    return (
        <div>
             <div className=" footer-center bg-white text-base-content rounded p-10">
                    <p className="text-4xl font-bold py-3">Gadget Haven</p>
                    
                    
                    <p>Leading the way in cutting-edge technology and innovation.</p>
                   
                </div>
                <div className="border border-gray-200 max-w-7xl mx-auto"></div>
            <footer className="footer  bg-white text-gray-600 p-10">

               
                <nav >
                    <h6 className="text-2xl font-bold">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>



                <nav>
                    <h6 className="text-2xl font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;