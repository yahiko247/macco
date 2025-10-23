import React from 'react'

import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck,
    BsMenuButtonWideFill, BsFillGearFill
 } from 'react-icons/bs'

function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
                <h3>DASHBOARD</h3>
        </div>
        <div className='main-card'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CONTENT</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h3>300</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>categories</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h3>12</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>customer</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h3>33</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>alerts</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h3>42</h3>
            </div>
            
        </div>

      
    </main>
  )
}

export default Home
