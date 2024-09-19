import React, {useEffect} from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './component/Index';
import {Ecommerce, Orders, Calender, Employees, Stacked, Pyramid, Customers, Kanban, Area, Pie
  ,Financial,ColorPicker,ColorMapping, Editor
} from './pages/Index';

import './App.css'


const App = () => {
  const activeMenu = true ;
  return (
<div>
  <BrowserRouter>
  <div className='flex relative dark:bg-main-dark-bg'>
    <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
      <TooltipComponent content="Settings" position='Top'>
<button type="button" className='text-3xl p-3 
hover:drop-shadow-xl text-white 
hover:bg-light-gray' 
style={{background:'red',borderRadius:'5px'}}>
  <FiSettings />
</button> 
      </TooltipComponent>
    </div>
    {
      activeMenu ? (
        <div className='w-72 
        fixed 
        sidebar 
        dark:bg-secondary-dark-bg'>
          Sidebar
        </div>
      ) : (
        <div className='w-0  dark:bg-secondary-dark-bg'>
          Sidebar w-0
        </div>
      )}
      <div className={
        `dark:bg-main-bg bg-main-bg-min-h-screen w-full ${activeMenu ? 'md:ml-72' :
          'flex-2'
        }`
      }>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
navbar
        </div>
      </div>
      <div>
        <Routes>
          {/* Dashboard */}
          <Route path='/' element="Dashboard" />
          <Route path='/ecommerce' element="E-Commerce" />
      

        {/* Pages */}
        <Route path='/orders' element="Orders" />
        <Route path='/employees' element="Employees" />
        <Route path='/customers' element="Customers" />


        {/* Apps */}
        <Route path='/kanban' element="Kanban" />
        <Route path='/editor' element="Editor" />
        <Route path='/calender' element="Calender" />
        <Route path='/color-picker' element="ColorPicker" />
       

{/* Charts */}
        <Route path='/line' element="Line" />
        <Route path='/area' element="Area" />
        <Route path='/bar' element="Bar" />
        <Route path='/lpie' element="Pie" />
        <Route path='/financial' element="Financial" />
        <Route path='/color-mapping' element="ColorMapping" />
        <Route path='/pyramid' element="Pyramid" />
        <Route path='/stacked' element="Stacked" />
        </Routes>
      </div>
  </div>
  </BrowserRouter>
</div>
  );
    
}

export default App
