import React from 'react'
import {NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"



function Navbar({title="Popular Titles"}):JSX.Element {
    
    return (
        <div >
            <header>
                <nav className= {style.menu}>
                    <NavLink to="/">
                        <span className={style.title}>
                            DEMO Streaming
                        </span>
                    </NavLink>
                    <div className={style.login}>
                        <span style={{cursor:"pointer"}}>
                            Log in
                        </span>
                        <button className={style.buttonFrial}>
                            Start your free trial
                        </button>
                    </div>
                </nav>
            </header>
           <div className={style.sub_menu}>
               <span className={style.sub_title}>
                   {title}
                </span>
             
               
           </div>
        </div>
    )
}

export default Navbar
