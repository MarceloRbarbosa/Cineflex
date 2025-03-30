import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Content(){
const [movies, setMovies]= useState(null);

useEffect(()=> {
    axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        .then(response=> setMovies(response.data))
        .catch(err=>console.log(err.response.data));
},[]);

if (movies === null){
    return <div> Carregando ...</div>
}
       
    return(
<>
    <Notice>
        <h1>Em Cartaz</h1>
    </Notice>
    <Movies>
        {movies.map(movie =>(
        <Movie to={`/sessoes/${movie.id}`} key={movie.id}>
              <img src={movie.posterURL} />
              </Movie>
            ))}       
    </Movies>
</>      
    )
}

export default Content

const Notice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin-top: 75px;

    h1 {
        color: white;
        font-family: "Sarala", sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 4%;
    }
`

const Movies = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 10px;
`
const Movie = styled(Link)`
    margin: 10px;
    img{
        width: 145px;
        height: 210px;
        border-radius: 8px;
    }
`
