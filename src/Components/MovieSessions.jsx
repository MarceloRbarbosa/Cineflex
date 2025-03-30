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
        return <div>Carregando ...</div>
    }
    return (
        <Content>
            <Notice>
                <h1>Selecione o horário</h1>
            </Notice>
            {movie.days.map((day, index) =>(
                <Sessions key={index}>
                    <Days>
                        <h3>{day.weekday}, {day.date}</h3>                 
                    </Days>  
                    <Line />
                    <Container>      
                    {day.showtimes.map(showtime => (
                    <Time to={`/assentos/${showtime.id}`} key={showtime.id}>
                        <span>{showtime.name}</span>                           
                    </Time>
                    ))}  
                    </Container>                            
                </Sessions>  
            ))};                                                                         
        </Content>      
            )
        }

 export default MovieSessions

        const Content = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `
        const Notice = styled.div`
            display: flex;
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
        const Sessions = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #2b2d36;
        border-radius: 8px;
        width: 340px;
        margin : 10px 0px 20px 10px;

        `
        const Container = styled.div`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            width: 100%;
            margin: 15px 0px 10px 0px;
        `
        const Days = styled.div`       
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
        const Time = styled(Link)`
            display: flex;          
            text-decoration: none;
            margin: 5px;
        span{             
            font-family: "Sarala", sans-serif;
            line-height: 100%;
            letter-spacing: 4%;
            padding: 15px;
            color: #EE897f;
            border: solid 2px #EE897f;
            border-radius: 4px;         
        }
        `
         


