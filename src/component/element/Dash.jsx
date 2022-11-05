import React from 'react'
import {GrCheckbox } from 'react-icons/gr'
import { ProSidebarProvider,Sidebar, Menu, MenuItem, SubMenu,useProSidebar  } from 'react-pro-sidebar';


export default function Dash() {

  return (
    <ProSidebarProvider className="sidebar">
    <Sidebar>
     <Menu>
       <SubMenu label="Listtype " className='border-bottom'>
         <MenuItem><GrCheckbox className='bg-light border'/> Buy Now </MenuItem>
         <MenuItem><GrCheckbox className='bg-light border'/> Auction </MenuItem>
       </SubMenu>
       <SubMenu label="Curation" className='border-bottom'>
         <MenuItem> <button className='btn text-white '>
             mozela</button></MenuItem>
         <MenuItem> Line charts </MenuItem>
       </SubMenu>
       <SubMenu label="Price" className='border-bottom'>
         <MenuItem><GrCheckbox className='bg-light border'/> Pie charts </MenuItem>
         <MenuItem><GrCheckbox className='bg-light border'/> Line charts </MenuItem>
       </SubMenu>
       <SubMenu label="collections" className='border-bottom'>
         <MenuItem><GrCheckbox className='bg-light border'/> Pie charts </MenuItem>
         <MenuItem><GrCheckbox className='bg-light border'/> Line charts </MenuItem>
       </SubMenu>
       <SubMenu label="Chains" className='border-bottom'>
         <MenuItem> Pie charts </MenuItem>
         <MenuItem> Line charts </MenuItem>
       </SubMenu>
       <SubMenu label="Categories" className='border-bottom'>
         <MenuItem> Pie charts </MenuItem>
         <MenuItem> Line charts </MenuItem>
         
       </SubMenu>
       
     </Menu>
   </Sidebar>
   
   </ProSidebarProvider>
    
    
 )
}
