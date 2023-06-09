import React from 'react'
import style from "./Footer.module.css"
import facebook from "../../assets/social/facebook-white.svg"
import twitter from "../../assets/social/twitter-white.svg"
import instagram from "../../assets/social/instagram-white.svg"
import appStore from "../../assets/store/app-store.svg"
import googlePlay from "../../assets/store/play-store.svg"
import windows from "../../assets/store/windows-store.svg"

function Footer():JSX.Element {
    return (
        <footer className={style.footer}>
            <div className={style.content}>
                <ul className= {style.items}>
                    <li>Home</li> 
                    <span>|</span>
                    <li>Terms and Conditions</li>
                    <span>|</span>
                    <li>Privacy Policy</li>
                    <span>|</span>
                    <li>Collection Statement</li>
                    <span>|</span>
                    <li>Help</li>
                    <span>|</span>
                    <li>Manage Account</li>
                </ul>
                <div>
                    <p className={style.copyrigth}>Copyright © 2016 DEMO Streaming. All rights reserved</p>
                </div>
                <div className={style.social_and_store}>
                    <div className={style.social}>
                        <img src={facebook} alt="facebook"  height="35px" width="25px"/>
                        <img src={twitter} alt="twitter" height="35px" width="40px" />
                        <img src={instagram} alt="instagram" height="35px" width="35px"/>
                    </div>
                    <div className= {style.store}>
                        <img src={appStore} alt="appStore" height="50px"/>
                        <img src={googlePlay} alt="googlePlay" height="50px"/>
                        <img src={windows} alt="windows" height="50px" width="140px"/>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
