import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MovieSessions(){
    const [movie, setMovie] = useState(null);
    const { idMovie } = useParams();
    
        
    useEffect(()=>{
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err.response.data))
    },[idMovie])

    if( movie === null){
        <div>Carregando ...</div>
    }
    return (
        <>
            <Notice>
                <h1>Selecione o horário</h1>
            </Notice>
            {movie.days.map((day, index) =>(
                <Sessions key={index}>
                    <Days>
                        <h3>{day.weekday}, {day.date}</h3>
                    <Line />
                    </Days>
                    <Time to='/assentos'>
                        <h2>10:00</h2>
                        <h2>15:00</h2>
                        <h2>19:00</h2>
                    </Time> 
                </Sessions>  
            ))};                                                                         
        </>      
            )
        }

 export default MovieSessions

        
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
        const Days = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
            color: white;

            h3{
                font-family: "Sarala", sans-serif;
                font-weight:400 ;
                font-size: 20px;
            }
        `
        const Line = styled.div`
            width: 300px;
            border: solid 1px #4e5a65;
        `
        
        const Sessions = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #2b2d36;
        border-radius: 8px;
        width: 340px;
        height: 150px;
        margin : 10px 0px 20px 10px;

        `
        const Time = styled(Link)`
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
            h2{
                
                display: flex;
                align-items: center;
                padding: 15px;
                margin: 20px 10px 20px 10px;
               font-family: "Sarala", sans-serif;
               font-weight: 400;
               font-size: 16px;
               line-height: 100%;
               letter-spacing: 4%;
               padding: 15px;
               color: #EE897f;
               border: solid 2px #EE897f;
               border-radius: 4px;
              
            }
        `


