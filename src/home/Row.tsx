import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style/Row.css";
import { MovieInterface } from '../interface/movieinterface';
import Details from '../details/details'

const base_url = "https://image.tmdb.org/t/p/original";


function Row(props: {title:string, fetchUrl:string, onShowDetails(id: number):void}) {
  const {title, fetchUrl } = props;
    const [movies, setMovies] =  useState <Array<MovieInterface>>([]);

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    }, [fetchUrl]);
    return (
    <div className='row'>
        <h2 className='row_title'>{title}</h2>

        <div className="row_posters">
          {movies.map(movie =>(
            <>
            <img key={movie.id}
            className={`row_poster`} src={`${base_url}${movie.poster_path}`} alt={movie.name} 
            onClick={() => props.onShowDetails(movie.id) }
            />
            
            </>

          ))}
        </div>

    </div>
  )
}

export default Row