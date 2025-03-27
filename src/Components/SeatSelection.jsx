import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SeatSelection(){
    const [seats, setSeats] = useState(null);
    const [selectedSeats , setSelectedSeats] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCpf]= useState('');
    const { idShowTime }  = useParams();

    useEffect (()=>{
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idShowTime}/seats`)
            .then(res => setSeats(res.data))
            .catch(err => console.log(err.response.data))
    },[idShowTime])


function toggleSeat(seat){
    if(!seat.isAvailable){
        alert('Esse assento não está disponível')
        return;
    }
    if(selectedSeats.includes(seat.id)){
        setSelectedSeats(selectedSeats.filter(seatId => seatId !== seat.id))
    }else {
        setSelectedSeats([...selectedSeats, seat.id]);
    }
}


function submitForm(event){
    event.preventDefault()

   if (selectedSeats.length === 0){
    alert("Nenhum assento escolhido");
    return;
   }
   const body = { ids: selectedSeats, name, cpf}
   
   axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)
   .then(res => console.log(res.data))
   .catch(err => console.log(err.response.data))
   }


    if(seats === null){
        return <div> Carregando ... </div>
    }

    return(
        <>
            <Notice>
                <h1>Selecione o(s) assentos</h1>
            </Notice>
            <Seats>
                {seats.seats.map(seat =>(
                    <Seat 
                    key={seat.id} 
                    $isAvailable={seat.isAvailable}
                    $isSelected ={selectedSeats.includes(seat.id)}
                    onClick={()=> seat.isAvailable && toggleSeat(seat)}>
                        <h2>{seat.name}</h2>
                    </Seat>            
                ))}
                <Line />
               </Seats>
               <Clients>
                <Form onSubmit={submitForm}> 
                        <Input htmlFor="name">Nome do Comprador(a)</Input>
                        <input 
                            required
                            id="name" 
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Digite seu nome ..."
                        />
                        <Input  htmlFor='cpf'> CPF do comprador(a)</Input>
                        <input 
                            required
                            id="cpf" 
                            name="cpf"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            placeholder="Digite seu CPF ..."
                        />
                        <Button type="submit"> Reservar assento(s)</Button>
                 </Form>
                 
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
    background-color: ${({ $isAvailable, $isSelected }) =>
         $isSelected ? '#EE897F' : 
         $isAvailable ? '#9db899' : '#2b2d36'};
        

    h2{
        font-size: 11px;
        font-weight: 400;
        line-height: 100%;
        color: #2B2D36;
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
    &::placeholder {
        font-family: "Roboto", sans-serif;
        color: #afafaf;
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        line-height: 100%;
        padding: 5px;
    } 
    }

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
  
`
const Input = styled.label`
    color: white;
    font-family: "Sarala", sans-serif;
    font-size: 16px;
    margin-bottom: 0px;   
`
const Button = styled.button`
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