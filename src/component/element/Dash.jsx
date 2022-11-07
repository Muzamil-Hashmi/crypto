import React from 'react'
import {GrCheckbox } from 'react-icons/gr'
import { ProSidebarProvider,Sidebar, Menu, MenuItem, SubMenu,useProSidebar  } from 'react-pro-sidebar';


export default function Dash() {

  return (
    <ProSidebarProvider className="sidebar">
    <Sidebar>
     <Menu>
       <SubMenu label="Listtype " className='border-bottom fw-bold '>
         <MenuItem><GrCheckbox className='bg-light border'/> Buy Now </MenuItem>
         <MenuItem><GrCheckbox className='bg-light border'/> Auction </MenuItem>
       </SubMenu>
       <SubMenu label="Curation" className='border-bottom fw-bold'>
         <MenuItem>
             Curated</MenuItem>
         <MenuItem> NonCurated </MenuItem>
       </SubMenu>
       <SubMenu label="Price" className='border-bottom fw-bold '>
         <div className='d-flex'>
         <MenuItem><button className=' btn   text-white'>Pie</button></MenuItem>
         <MenuItem><button className='btn  text-white'>Line</button> </MenuItem>
         </div>
       </SubMenu>
       <SubMenu label="collections" className='border-bottom fw-bold '>
         <MenuItem> Search </MenuItem>
         <MenuItem>Art Blocks </MenuItem>
         <MenuItem><GrCheckbox className='bg-light border'/>Renga </MenuItem>

       </SubMenu>
       <SubMenu label="Chains" className='border-bottom fw-bold'>
         <MenuItem> Pie charts </MenuItem>
         <MenuItem> Line charts </MenuItem>
       </SubMenu>
       <SubMenu label="Categories" className='border-bottom fw-bold '>
         <MenuItem> Pie charts </MenuItem>
         <MenuItem> Line charts </MenuItem>
         
       </SubMenu>
       
     </Menu>
   </Sidebar>
   
   </ProSidebarProvider>
    
    
 )
}
