import React from 'react'
import style from "./Error.module.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import errorPNG from "../../assets/error.png"

function Error() {
    return (
        <>
        <Navbar title="Ups!"/>
        <div className={style.error}>
            <img src={errorPNG} alt="" width="200px" height="200px"/>
            <h1>Page not found...</h1>
        </div>
        <Footer/>
        </>
    )
}

export default Error
