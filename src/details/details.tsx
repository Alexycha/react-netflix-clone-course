import axios from 'axios';
import { useEffect, useState } from 'react';
import { MovieInterface } from '../interface/movieinterface';
import './details.css'

function Details(props: any) {

    const API_KEY = process.env.REACT_APP_API_KEY 
    const base_url = "https://image.tmdb.org/t/p/original";

  
    const [movie, setMovie] = useState <MovieInterface>();

    useEffect(()=> {
        async function fetchData(id: number){
            const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
            let item: MovieInterface = {
                id: request.data.id,
                name: request.data.title,
                title: request.data.title,
                overview: request.data.overview,
                original_name: request.data.original_name,
                release_date: request.data.release_date,
                poster_path: request.data.poster,
                backdrop_path: base_url + request.data.backdrop_path,
            } 
            setMovie(
            item
            );
        }
        fetchData(props.id);
    },[]);
    if(!props.show){
        return null;
    }

    return (
                    <div className="details">
                        <div className="container">
                            <div className="content">
                                <div className="banner">
                                    <img src={movie?.backdrop_path} />
                                    <button className="btn-close" onClick={props.close}
                                    >X</button>

                                    <h1 className="name"> {movie?.name}</h1>
                                    <div className='actions'>
                                        <button className='btn-play btn'>
                                            <span>
                                                <i className="fa fa-play"></i>
                                            </span>
                                            <span>Play</span>
                                        </button>
                                        <span>
                                                <i className="fas fa-plus"></i>
                                            </span>
                                            <span>
                                                <i className="fas fa-heart"></i>
                                            </span>
                                    </div>

                                </div>
                                <div className='details_fadeBottom'></div>
                                <div className="description">
                                    <div className="overview"><b>Description : </b>
                                        {movie?.overview}
                                    </div>
                                    <div className="info">
                                        <ul>
                                            <li><span>Release date: </span> {movie?.release_date}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}
export default Details