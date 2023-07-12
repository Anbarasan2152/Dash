import react from "react";
import {useRef, useEffect} from 'react';
import './Navbar.css';
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import {BsFillSearchHeartFill} from "react-icons/bs";


function Navbar(){
    const navbarBurgerRef = useRef(null);
        const navbarMenuRef = useRef(null);
      
        useEffect(() => {
          const navbarBurger = navbarBurgerRef.current;
          const navbarMenu = navbarMenuRef.current;
      
          const handleNavbarBurgerClick = () => {
            navbarBurger.classList.toggle('is-active');
            navbarMenu.classList.toggle('is-active');
          };
      
          navbarBurger.addEventListener('click', handleNavbarBurgerClick);
      
          return () => {
            navbarBurger.removeEventListener('click', handleNavbarBurgerClick);
          };
        }, []);
    return(
        
        <nav>
        <div>
        <h1 className="head" >Welcome!!</h1>
        </div>
        <div className="navbar">
            <ul id="navbar">
            <li ><a className="active" href="index.html"><BsFillSearchHeartFill className="icon"/></a></li>
            <li ><a className="active" href="index.html"><FaBell className="icon"/></a></li>
            <li ><a className="active" href="index.html"><MdCall className="icon"/></a></li>
            <li ><a className="active" href="index.html"><FaUserCircle className="icon"/></a></li>
            </ul>

          <button  ref={navbarBurgerRef} className="navbar-burger" aria-label="menu" aria-expanded="false"  style={{color: "#ededed"}}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

        </div>
        
      </nav>
       
    );
}
export default Navbar