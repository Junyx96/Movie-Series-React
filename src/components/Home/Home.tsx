import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import style from "./Home.module.css"
import { Link } from 'react-router-dom';

function Home():JSX.Element {
    
    return (
        <div>
            <Navbar/>   
            <main style={{marginLeft:"9vw"}}>
                <section className={style.categories}> 
                    <div>
                        <Link to="/series">
                            <div className={style.card}>SERIES</div>
                            <p>Popular Series</p>
                        </Link>
                    </div>
                    <div>
                         <Link to="/movies">
                            <div className={style.card}>MOVIES</div>
                            <p>Popular Movies</p>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Home
