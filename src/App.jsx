import { useState } from 'react'
import{
  FaTh,
}from "react-icons/fa";
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './App.css'
import Customers  from './components/Pages/Customers'
import Dashboard from './components/Pages/Dashboard'
import Estimates from './components/Pages/Estimates'
import Invoices from './components/Pages/Invoices'
import PurchaseOrder from './components/Pages/Purchase Order'
import Quotes from './components/Pages/Quotes'
import Receiveditems from './components/Pages/Receiveditems'
import Reports from './components/Pages/Reports'
import Settings from './components/Pages/Settings'
import Venders from './components/Pages/Venders'
import WantBook from './components/Pages/Want Book'
import Sidebar from './components/Sidebar';
import Sidebars from './components/Style/Sidebars';

function App() {
  const [count, setCount] = useState(0)
  

  return (
  
     <BrowserRouter>
     <Sidebars>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/Estimates" element={<Estimates/>}/>
        <Route path="/Invoices" element={<Invoices/>}/>
        <Route path="/PurchaseOrder" element={<PurchaseOrder/>}/>
        <Route path="/Quotes" element={<Quotes/>}/>
        <Route path="/Receiveditems" element={<Receiveditems/>}/>
        <Route path="/Reports" element={<Reports/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/Venders" element={<Venders/>}/>
        <Route path="/WantBook" element={<WantBook/>}/>
      </Routes>
      </Sidebars>
     </BrowserRouter>
      
  )
}

export default App
