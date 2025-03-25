import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SeatSelection(){
    return(
        <>
            <Notice>
                <h1>Selecione o(s) assentos</h1>
            </Notice>
            <Seats>
                <Seat>
                    <h2>1</h2>
                </Seat>
                <Seat>
                    <h2>2</h2>
                </Seat>
                <Seat>
                    <h2>3</h2>
                </Seat>
                <Seat>
                    <h2>4</h2>
                </Seat>
                <Seat>
                    <h2>5</h2>
                </Seat>
                <Seat>
                    <h2>6</h2>
                </Seat>
                <Seat>
                    <h2>7</h2>
                </Seat>
                <Seat>
                    <h2>8</h2>
                </Seat>
                <Seat>
                    <h2>9</h2>
                </Seat>
                <Seat>
                    <h2>10</h2>
                </Seat>
                <Seat>
                    <h2>1</h2>
                </Seat>
                <Seat>
                    <h2>2</h2>
                </Seat>
                <Seat>
                    <h2>3</h2>
                </Seat>
                <Seat>
                    <h2>4</h2>
                </Seat>
                <Seat>
                    <h2>5</h2>
                </Seat>
                <Seat>
                    <h2>6</h2>
                </Seat>
                <Seat>
                    <h2>7</h2>
                </Seat>
                <Seat>
                    <h2>8</h2>
                </Seat>
                <Seat>
                    <h2>9</h2>
                </Seat>
                <Seat>
                    <h2>10</h2>
                </Seat>
                <Line />
               </Seats>
               <Clients>
                <Input>
                    <h3>Nome do Comprador(a)</h3>
                    <input />
                </Input>
                <Input>
                    <h3>CPF do comprador(a)</h3>
                    <input />
                </Input>
                <Button to='/sucesso'> 
                    <h4>Reservar assento(s)</h4>
                 </Button>
               </Clients>
            
        </>      
            )
        }

export default SeatSelection


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
const Seats = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
    padding: 10px;
    margin-bottom: 20px;

`
const Seat = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    border: solid 1px #808f9d;
    background-color: #9db899;

    h2{
        font-size: 11px;
        font-weight: 400;
        line-height: 100%;
        color: #2b2d36;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Line = styled.div`
            width: 300px;
            border: solid 1px #4e5a65;
            margin-top: 25px;
        `

const Clients = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    input {
        width: 340px;
        height: 40px;
        border-radius: 8px;
        border: 1px;
    }

`
const Input = styled.div`
h3{
    color: white;
    font-family: "Sarala", sans-serif;
    font-size: 16px;
    margin-bottom: 0px;

}
    
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