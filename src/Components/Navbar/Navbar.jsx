import { Link } from 'react-router-dom'
import "./LinkUnderline.css";
import "./BottomBoxShadow.css"

function Navbar({ scrolled }) {
    return (
        <>
            <div className="w-screen fixed z-50">
                <nav className={`flex justify-between px-32 py-3 text-xl font-semibold
                    ${scrolled ? "bg-gray-900 text-sky-500 bottomBoxShadow" : "bg-transparent text-blue-500"}
                `} style={{ transition: "background-color 0.25s ease-in-out" }}>

                    <div>
                        <Link to={"/"} className="m-2 p-2 
                    link-underline">
                            LOGO | COMPANY NAME
                        </Link>
                    </div>

                    <div>
                        <Link to={"/"} className="m-2 p-2 
                    link-underline">
                            LINK1
                        </Link>

                        <Link to={"/Store"} className="m-2 p-2
                    link-underline" >
                            LINK2
                        </Link>

                        <Link to={"/Blogs"} className="m-2 p-2
                    link-underline" >
                            LINK3
                        </Link>

                        <Link to={"/Portfolio"} className="m-2 p-2
                    link-underline" >
                            LINK4
                        </Link>

                        <Link to={"/Contact"} className="m-2 p-2
                    link-underline" >
                            LINK5
                        </Link>
                    </div>
                    
                </nav>
            </div>
        </>

    );
}

export default Navbar;
