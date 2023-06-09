import React from 'react'
import style from "./Spinner.module.css"

function Spinner() {
    return (
        <div className= {style.container}>
            <p style={{fontSize:"20px"}}>Loading...</p>
            <div className={style.spinner}></div>
        </div>
            
    )
}

export default Spinner