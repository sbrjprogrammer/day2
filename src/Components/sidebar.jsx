import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import VscSettingsGear from "react-icons";
import { NavLink } from "react-router-dom";
import { FiServer, FiSettings } from "react-icons/fi";
import Navbar from "./Navbar/Navbar";
import "./sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Setup",
      icon: <FiSettings />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    //     {
    //         path:"/comment",
    //         name:"Comment",
    //         icon:<FaCommentAlt/>
    //     },
    //     {
    //         path:"/product",
    //         name:"Product",
    //         icon:<FaShoppingBag/>
    //     },
    //     {
    //         path:"/productList",
    //         name:"Product List",
    //         icon:<FaThList/>
    //     }
  ];

  return (
    <div className="container1">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            SDMS
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {/* {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               } */}
        {/* navlinks */}
        <div>
          <NavLink to={"/"} className="link" activeclassName="active">

            <div className="icon">
              <FiSettings />
            </div>

            <li>
            <a
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text link">
              Setup
            </a>
            <ul className="submenu"  style={{ display: isOpen ? "block" : "none" }}>
             <li><a className="link" href="#">Area</a></li>
             <li><a className="link" href="#">Attendance policy</a></li>
             <li><a className="link" href="#">Option 3</a></li>
           
            </ul>
            
            </li>
                   
                    
          
          </NavLink>


{/* navlink  */}

<NavLink to={"/transaction"} className="link" activeclassName="active">

<div className="icon">
<FaUserAlt />
</div>

<li>
<a
  style={{ display: isOpen ? "block" : "none" }}
  className="link_text link">
  Transaction
</a>


</li>
       
        

</NavLink>




{/*  3rd link*/}
<NavLink to={"/form"} className="link" activeclassName="active">

<div className="icon">
<FaUserAlt />
</div>

<li>
<a
  style={{ display: isOpen ? "block" : "none" }}
  className="link_text link">
  Company Form
</a>


</li>
       
        

</NavLink>
          
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
