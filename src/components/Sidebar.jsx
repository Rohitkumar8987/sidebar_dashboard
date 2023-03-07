import React from 'react'
import { NavLink } from 'react-router-dom'
import{
  FaTh,
}from "react-icons/fa";
import '../App.css'


 const Sidebar=({children})=> {
  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      icon:<FaTh/>
    },
    {
      path:"/customers",
      name:"Customers",
      icon:<FaTh/>
    },
    {
      path:"/estimates",
      name:"Estimates",
      icon:<FaTh/>
    },
    {
      path:"/invoices",
      name:"Invoices",
      icon:<FaTh/>
    },
    {
      path:"/purchaseorder",
      name:"PurchaseOrder",
      icon:<FaTh/>
    },
    {
      path:"/quotes",
      name:"Quotes",
      icon:<FaTh/>
    },
    {
      path:"/receiveditems",
      name:"Receiveditems",
      icon:<FaTh/>
    },
    {
      path:"/reports",
      name:"Reports",
      icon:<FaTh/>
    },
    {
      path:"/settings",
      name:"Settings",
      icon:<FaTh/>
    },
    {
      path:"/venders",
      name:"Venders",
      icon:<FaTh/>
    },
    {
      path:"/wantBook",
      name:"WantBook",
      icon:<FaTh/>
    },
  ]
  return (
    <div className='container'>
      <div className="sidebar">
        <div className="top_section">
          <h1 className="butlerlighting">Butler Lighting</h1>
          <h6>Family owned since 1948</h6>
          <div className="bars">

          <FaTh/>
          </div>
        </div>
      {
        menuItem?.map((item,index)=>(
          <NavLink to={item.path} key={index} className="link" activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))
      }
      </div>
      <main>{children}</main>
    </div>
  )
}
export default Sidebar;