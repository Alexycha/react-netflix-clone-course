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
            <Row onShowDetails={handleShow} title="Tendances" 
            fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row onShowDetails={handleShow} title="Populaires" fetchUrl={requests.fetchPopular}/>
            <Row onShowDetails={handleShow} title="Top Box Office" fetchUrl={requests.fetchRevenue}/>
            <Row onShowDetails={handleShow} title="Dernières sorties" fetchUrl={requests.fetchFrance}/>

        {
            showDetails && ( <Details id ={id} show={showDetails} close={() => setShowDetails(false)} />)
        }
        </div>
    )
}

export default Home;