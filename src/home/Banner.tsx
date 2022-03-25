import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './style/Banner.css';
import { MovieInterface } from '../interface/movieinterface';


function Banner() {
    const [movie, setMovie] = useState <MovieInterface>();

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
            );
        }
        fetchData();
    },[]);

  return (
    <header className="banner"
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
    >
                    <div className='navbar'>
                    <ul>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1280px-Netflix_logo.svg.png"></img></li>
                        <li>Accueil</li>
                        <li>Séries</li>
                        <li>Films</li>
                    </ul>
            </div>
        <div className='banner_content'>
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <h1 className='banner_description'>{movie?.overview}</h1>
            <div className='banner_buttons'>
            <div className='button_play'>Lecture</div>
            <div className='button_info'>Plus d'infos</div>
            </div>
        </div>
        <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner