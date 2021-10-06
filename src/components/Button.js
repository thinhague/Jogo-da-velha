import React from "react";
import { Pecas } from "./style";

export default function Button({item,buttonClick,backgroundX,backgroundO,key}) {


    return(
        
          <Pecas style={item == "X" ? backgroundX : item == "O" ? backgroundO : null} onClick={()=>buttonClick(key)}>{item}</Pecas> 
    )
}