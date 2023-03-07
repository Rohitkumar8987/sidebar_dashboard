import React from 'react'
import { NavLink } from 'react-router-dom'
import {RxDashboard} from 'react-icons/rx'
import {FiDollarSign, FiUsers,FiBriefcase,FiShoppingBag, FiLayers} from 'react-icons/fi'
import{MdContentPaste,MdOutlineStickyNote2} from 'react-icons/md'
import{AiOutlineUnorderedList,AiOutlineStar,AiOutlineSetting} from 'react-icons/ai'
import{TbFileInvoice} from 'react-icons/tb'
import '../../App.css'

export default function Sidebars() {
  const menu = [
    {id: 1, name: '', link: [{id: 1, name:"Dashboard", url:'/', icon: <RxDashboard/>}]},
    {id: 1, name: 'Sales', link: [
      {id: 1, name:"Estimate", url:'/estimates', icon: <FiDollarSign/>},
      {id: 2, name:"Quotes", url:'/quotes',icon:<MdContentPaste/>},
      {id: 3, name:"Sales Order", url:'/salesorder',icon:<AiOutlineUnorderedList/>},
      {id: 4, name:"Invoices", url:'/invoices',icon:<TbFileInvoice/>},
      {id: 5, name:"Customers", url:'/customers',icon:<FiUsers/>},
    ]},
    {id: 1, name: 'PROCUREMENT', link: [
      {id: 1, name:"Vendors", url:'/venders',icon:<FiBriefcase/>},
      {id: 2, name:"Want Book", url:'/wantbook',icon:<AiOutlineStar/>},
      {id: 3, name:"Purchase Order", url:'/purchaseorder',icon:<FiShoppingBag/>},
    ]},
    {id: 1, name: 'RECEIVING', link: [
      {id: 1, name:"Received items", url:'/receiveditems', icon: <FiLayers/>},
      
    ]},
    {id: 1, name: 'ADMIN', link: [
      {id: 1, name:"Reports", url:'/reports',icon:<MdOutlineStickyNote2/>},
      {id: 2, name:"Settings Book", url:'/settings',icon:<AiOutlineSetting/>},
      
    ]},
  ]
  return (
    <div className='text-white d-flex flex-column overflow-auto' style={{width: '300px', height: '100vh', background: '#28589a'}}>
      <div className='d-flex flex-column align-items-center mt-4'>
        <span className='' style={{fontSize: '3rem'}}>ButterLight</span>
        <em>family owned since 1948</em>
      </div>
      {menu.map(item => (
        <>
        <span className='p-2' style={{color: '#94A3B8'}}>{item.name}</span>
        {item?.link.map(item2 => (
          <NavLink to={item2.url} className={({isActive}) => `${isActive ? 'text-white p-3 bg-dark' : 'text-white p-3'}`} style={({isActive}) =>({textDecoration: 'none'})}>
            <div className='d-flex align-items-center'>
            <span>{item2.icon}</span>
            <span className='ms-2' style={{fontSize: '1.2rem'}}>{item2.name}</span>
            </div>
          </NavLink>
        ))}
        </>
      ))}
    </div>
  )
}
