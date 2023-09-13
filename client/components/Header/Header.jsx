import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import "./Header.scss";
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
    
    const navigate=useNavigate();
    const [scrolled,setScrolled]=useState(false);
    const [showCart,setShowCart]=useState(false);
    const [showSearch,setShowSearch]=useState(false);
    const {cartCount}=useContext(Context);
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
     const handleScroll = ()=>{
        const offset =window.scrollY;
        if(offset > 200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
     };
     useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
     },[]);
    return (
    <>
    <header className={`main-header ${scrolled? 'sticky-header': ''}`}>
        <div className="header-content">
        
            <ul className="left">
                <li onClick={()=> navigate("/")}>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
          
            <div className="centre" onClick={()=> navigate("/")}><b>TechTunesHub</b></div>
            <div className="right">
                <TbSearch onClick={()=> setShowSearch(true)}/>
                <AiOutlineHeart/>
                <span className="cart-icon" onClick={()=>setShowCart(true)}>
                    <CgShoppingCart/>
                    {cartCount>0&&<span>{cartCount}</span>}
                </span>
                
                {isAuthenticated ?
                    <div>
                    <button className="login-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out  
                   
                    </button>
                    </div>
                    :<button className="login-button"  onClick={() => loginWithRedirect()}>Log In</button>
                    
                }
                {/* <span className="extreme">{isAuthenticated&&  <h2>{user.name}</h2>}</span>  */}
                
           
               

            </div>
           
          
            
            {/* <li></li> */}
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch&& <Search setShowSearch={setShowSearch}/>}

    </>
    );
};

export default Header;
