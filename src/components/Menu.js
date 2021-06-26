import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div className="">
            <div style={{display:'flex', flexDirection:'column', fontSize:'4vw', color:'white'}}>
                <span className="p-4 menu_hover"><span style={{marginLeft:'12vw'}}>00 About</span></span>
                <span className="p-4 menu_hover"><span  style={{marginLeft:'12vw'}}>01 Work</span></span>
                <span className="p-4 menu_hover"><span  style={{marginLeft:'12vw'}}>02 Blog</span></span>
                <span className="p-4 menu_hover"><span style={{ marginLeft: '12vw' }}>03 Contact</span></span>
            </div>
        </div>
    )
}

export default Menu
