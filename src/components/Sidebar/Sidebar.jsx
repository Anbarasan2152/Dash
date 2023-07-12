import React, { useState } from 'react';
import {
    
    FaBars,
    
}from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {BiSolidMessageDetail} from "react-icons/bi";
import {SiGoogleanalytics} from "react-icons/si";
import { IoTicketSharp, } from "react-icons/io5";
import {IoMdSettings} from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<AiFillHome/>
        },
        {
            path:"/about",
            name:"Inbox",
            icon:<BiSolidMessageDetail/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<SiGoogleanalytics/>
        },
        
        {
            path:"/product",
            name:"Tickets",
            icon:<IoTicketSharp/>
        },
        {
            path:"/productList",
            name:"Settings",
            icon:<IoMdSettings/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Menu</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;