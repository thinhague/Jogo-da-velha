import styled from "styled-components";

export const Body = styled.body`
     display: flex;
     flex-direction:column;
     align-items: center;
 
     height: 100vh;
     font-family: arial;
     background-color:#333;
`


export const TitleH1 = styled.h1`
    color: white;
    text-align: center;
    /* &::before{
        content: 'VAPO';
        
    } */
`

export const TabuleiroS = styled.div`
    
    display:grid;
    grid-template-columns: repeat(3, 240px);
    grid-template-rows: repeat(3, 200px);
    gap: 1rem;
`
export const Pecas = styled.div`
    display: grid;
    justify-content:center;
    align-items: center;
    background-color:white;
    border-radius: 5px;
    font-size:5rem;
    color: #00000066;
    cursor:pointer;
`

export const FooterStyle = styled.h2`
    color: white;
    text-align: center;
`

export const Recomecar = styled.button`
   padding: 12px;
   margin: 5px;
   text-align: center;
   background-color: orangered;
   color: white;
   font-weight: bold;
   border: 0;
   border-radius: 6px;
   cursor: pointer;

   &:hover{
       opacity: 0.7;
   }
`
export const PontosX = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: rgb(3, 184, 3);
    
    `
export const PontosO = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: rgb(4, 69, 248);
    
    `


