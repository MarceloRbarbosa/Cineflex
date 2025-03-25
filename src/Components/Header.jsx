import React from "react";
import logo from '../assets/logo.png';
import styled from "styled-components";

function Header(){
    return(
        <Top>
            <img src= {logo} />
            <span>Cineflex</span>
        </Top>
    )
}

export default Header


const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 70px;
background-color: #EE897F;
position: fixed;
top: 0%;
left: 0%;

span {
    color: #FADBC5;
    font-size: 34px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0%;
    padding: 5px;
    font-family: "Raleway", sans-serif;
}

img {
    width: 40px;
    height: 40px;
    padding: 5px;
}
`