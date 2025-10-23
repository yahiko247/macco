import {useState} from 'react'
import Header from '../dashboard/header'
import Sidebar from '../dashboard/sidebar'
import Home from '../dashboard/home'
import './Page.css'
function Page() {
  return (
    <div className='grid-container'>
        <Header/>
        <Sidebar/>
        <Home/>
    </div>
  )
}

export default Page
