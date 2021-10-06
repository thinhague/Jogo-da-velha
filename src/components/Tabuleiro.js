import React from "react";
import { TabuleiroS } from "./style";
import Button from "./Button";


export default function Tabuleiro({tabuleiro,buttonClick}){
    const backgroundX = {
        backgroundColor: 'rgb(3, 184, 3)',
      }
      const backgroundO = {
        backgroundColor: 'rgb(4, 69, 248)',
      }
      

    return(
        <TabuleiroS>
            {tabuleiro.map((item, indice) => 
          <Button backgroundX={backgroundX} backgroundO={backgroundO} buttonClick={() => buttonClick(indice)} key={indice} item={item} />

        )}
        </TabuleiroS>
    )
}