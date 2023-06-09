import React, { useEffect } from 'react'
import style from "./Movies.module.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import Spinner from '../Spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import {getSampleJson} from "../../actions/action"


function Movies({titleProp=" Popular Movies", programTypeProp="movie"}):JSX.Element{

    interface storeI {
        initialTitles: {
            entries: Array<ObjectInterface>;
            total: string
        }
    }
    interface loadingStore{
        loading: boolean
    }

    interface ObjectInterface{
        title: string;
        description: string;
        programType: string;
        images: {
            "Poster Art": {
                url: string;
                width: number;
                height: number;
            };
        };
        releaseYear: number;
    }
    
    const dispatch = useDispatch();
    const initialTitles= useSelector((state:storeI) => state.initialTitles)
    const loading = useSelector((state: loadingStore) => state.loading)

    useEffect(() => {
        dispatch(getSampleJson())
    }, [dispatch])

    const moviesFiltered= initialTitles?.entries?.filter(movie => movie.releaseYear >= 2010 && movie.programType === programTypeProp)
  
    moviesFiltered?.sort((a:ObjectInterface,b:ObjectInterface) => {
        if(a.title < b.title){
        return -1
        }
        if(a.title > b.title){
        return 1
        }
        return 0
    })

    const firstsTwentyResults: Array<ObjectInterface>= moviesFiltered?.slice(0,20)
 
    if(Object.keys(initialTitles).length === 0 && !loading){
        return (
            <>
                <Navbar title={titleProp}/>   
                <div className={style.alternative}>
                    <h1>Oops, something went wrong</h1> 
                </div>
                <Footer/>
            </>
        )
    }
    return (
        <div>
            <Navbar title={titleProp}/>      
            <div className={loading? style.alternative: style.containerCards}>
                { loading && <Spinner/> }
                   {!loading && firstsTwentyResults?.map((movie, index) =>  
                    <div className={style.cards} key={index}>
                        <input type="checkbox" id={`${index}`} className={style.checkbox_modal}/>
                        <label htmlFor={`${index}`}>
                            <img src={movie.images['Poster Art'].url} alt="" className={style.img}/>
                            <p className={style.movieTitle}>{movie.title}</p>
                        </label>
                        <div className={style.modal}> 
                            <div className={style.boxModal}>
                                <header>{movie.title}</header>
                                <label htmlFor={`${index}`} className={style.lbl_close_modal}>X</label>
                                <div className={style.content}> 
                                    <p>{movie.description}</p>
                                    <img src={movie.images['Poster Art'].url} alt="" className={style.img}/>
                                    <p>{movie.releaseYear}</p>
                                </div>
                            </div>
                        </div>     
                    </div>   
                )}  
            </div>
            <Footer/>
        </div>
    )
}

export default Movies;