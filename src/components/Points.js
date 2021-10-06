import React from "react";
import { PontosX, PontosO} from "./style";

export default function Points({pontosX,pontosO}) {
   
    const divStyle ={
        display:'flex',
        justifyContent:'space-between',
        marginBottom:'10px',
        width:'600px'
    }
    return(
        <div style={divStyle}>
            <PontosX>Pontos X : {pontosX}</PontosX>
            <PontosO>Pontos O : {pontosO}</PontosO>
        </div>
        
    )
}