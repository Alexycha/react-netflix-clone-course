import React, { useState } from 'react';
import './style/home.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'; 
import Details from '../details/details';

function Home(){
    const [showDetails, setShowDetails] = useState(false)
    const [id, setId] = useState(0)
    const handleShow= (id: number) => {
        setShowDetails(true)
        setId(id)
    }
    return(
        <div className='App'>
            <Banner />
            <Row onShowDetails={handleShow} title="NETFLIX ORIGINALS" 
            fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row onShowDetails={handleShow}  title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row onShowDetails={handleShow} title="Nouveautés" fetchUrl={requests.fetchNews}/>
        {
            showDetails && ( <Details id ={id} show={showDetails} close={() => setShowDetails(false)} />)
        }
        </div>
    )
}

export default Home;