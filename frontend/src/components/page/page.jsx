import {useState} from 'react'
import Header from '../dashboard/header'
import Sidebar from '../dashboard/sidebar'
import Home from '../dashboard/home'
import './Page.css'
function Page() {


    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)


    const OpenSidebar= () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle}/>
        <Home/>
    </div>
  )
}

export default Page
