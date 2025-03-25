import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Finished(){
    return(
        <Content>
            <Notice>
                <h1>Pedido Finalizado</h1>
            </Notice>
            <Movie>
                <p>Filme e Sessão</p>
                <Line />            
                <h2>Homem-Aranha</h2>
                <h2>22/03/2024 às 21:00</h2>    
                <p>Ingressos</p>
                <Line />
                <h2>Assento 15</h2>
                <h2> Assento 16</h2>
                <p>Comprador(a)</p>
                <Line />  
                <h2> Nome: João</h2>
                <h2>CPF:111.111.111-11</h2>
            </Movie>
            <Button to='/'>
                <h4>Voltar</h4>
            </Button>
        </Content>      
            )
}

export default Finished


const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const Notice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin-top: 75px;

    h1 {
        color: #9db899;
        font-family: "Sarala", sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 4%;
    }
`

const Movie = styled.div`
        display: flex;
        flex-direction: column;
        padding: 15px;
        background-color: #2b2d36;
        border-radius: 8px;
        margin-bottom: 15px;

        p{
            font-family: "Sarala", sans-serif;
            font-weight: 700;
            font-size: 22px;
            color: #ee897f;
            margin-bottom: 5px;
        }
        h2{
            font-family: "Sarala", sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
            color: white;
            margin-bottom: 5px;
        }
    
`

const Line = styled.div`
            width: 300px;
            border: solid 1px #4e5a65;
        `

const Button = styled(Link)`
width: 340px;
height: 42px;
border-radius: 8px;
background-color: #ee897f;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color: #2b2d36;
font-family: "Sarala", sans-serif;
font-size: 18px;
font-weight: 700;
letter-spacing: 4%;
margin-top: 25px;
`