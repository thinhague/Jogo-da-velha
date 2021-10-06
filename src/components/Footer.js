import React from "react";
import RecomecarGame from './RecomecarGame'
import { FooterStyle, FooterT } from "./style";

export default function Footer({vencedor,recomecarJogo}){

    const winnerX = {
        color: 'rgb(3, 184, 3)',
      }
      const winnerO = {
        color: 'rgb(4, 69, 248)',
      }

    return(
       <FooterStyle>
            {vencedor == "EMPATE" ?
            <h2>Empate!</h2>
            :
            <h2 style={vencedor == "X" ? winnerX : vencedor == "O" ? winnerO : null}>{vencedor} <label style={{ color: 'white' }}>venceu !</label></h2>


          }
          <RecomecarGame recomecarJogo={recomecarJogo} />
       </FooterStyle>
    )
}