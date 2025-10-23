import React from 'react'

import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck,
    BsMenuButtonWideFill, BsFillGearFill
 } from 'react-icons/bs'


function Sidebar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'> 
              <div className='icon'/> MACCO 
        </div>
        <span className='icon close_icon' >X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="">
                <BsGrid1X2Fill className='icon'/> Dashboarad
            </a>
        </li>

        <li className='sidebar-list-item'>
            <a href="">
                <BsFillArchiveFill className='icon'/> Report
            </a>
        </li>

        <li className='sidebar-list-item'>
            <a href="">
                <BsFillGrid3X3GapFill className='icon'/> Service Record
            </a>
        </li>

        <li className='sidebar-list-item'>
            <a href="">
                <BsPeopleFill className='icon'/> Remittance
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsListCheck className='icon'/> Payroll Logs
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsMenuButtonWideFill className='icon'/> Regular Logs
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillGearFill className='icon'/> Settings
            </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
