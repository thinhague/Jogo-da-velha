import React from "react";
import { Recomecar } from "./style";

export default function RecomecarGame({recomecarJogo}) {
    return(
        <Recomecar onClick={()=> recomecarJogo()}>Recomeçar Jogo !</Recomecar>
         
    )
}