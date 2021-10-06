import React, { useState, useEffect } from 'react'
import { Body } from './components/style'
import Title from './components/Title'
import Points from './components/Points'
import Footer from './components/Footer'
import Tabuleiro from './components/Tabuleiro'





export default function App() {


  const tabuleiroVazio = Array(9).fill("")
  const [tabuleiro, setTabuleiro] = useState(tabuleiroVazio);
  const [jogadorAtual, setJogadorAtual] = useState("X")
  const [vencedor, setVencedor] = useState(null)
  const [pontosX, setPontosX] = useState(0)
  const [pontosO, setPontosO] = useState(0)


  const buttonClick = (indice) => {

    if (vencedor) {
      return null
    }

    if (tabuleiro[indice] !== "") {
      return null
    }

    setTabuleiro(tabuleiro.map((item, itemIndice) => itemIndice === indice ? jogadorAtual : item))
    setJogadorAtual(jogadorAtual === "X" ? "O" : "X")
  }

  const vitoria = () => {

    empate()

    const possDeVitorias = [
      //linhas
      [tabuleiro[0], tabuleiro[1], tabuleiro[2]],
      [tabuleiro[3], tabuleiro[4], tabuleiro[5]],
      [tabuleiro[6], tabuleiro[7], tabuleiro[8]],
      //colunas
      [tabuleiro[0], tabuleiro[3], tabuleiro[6]],
      [tabuleiro[1], tabuleiro[4], tabuleiro[7]],
      [tabuleiro[2], tabuleiro[5], tabuleiro[8]],
      //diagonais
      [tabuleiro[0], tabuleiro[4], tabuleiro[8]],
      [tabuleiro[2], tabuleiro[4], tabuleiro[6]],
    ]

    possDeVitorias.forEach(items => {
      if (items.every(items => items === "X")) {
        setVencedor("X")
      }

      if (items.every(items => items === "O")) {
        setVencedor("O")
      }
    })




  }
  const pontos = () => {
    if (vencedor == "X") {
      setPontosX(pontosX + 1)
    } else if (vencedor == "O") {
      setPontosO(pontosO + 1)
    }
  }

  useEffect(vitoria, [tabuleiro])
  useEffect(pontos, [vencedor])


  const recomecarJogo = () => {
    setJogadorAtual(vencedor == "EMPATE" ? jogadorAtual : vencedor)
    setTabuleiro(tabuleiroVazio)
    setVencedor(null)
  }

  const empate = () => {

    if (tabuleiro.every(item => item !== "")) {
      setVencedor("EMPATE")
    }
  }


  return (
    <Body>

      <Title />
      <Points pontosX={pontosX} pontosO={pontosO} />
      <Tabuleiro tabuleiro={tabuleiro} buttonClick={buttonClick} />
      {vencedor && <Footer vencedor={vencedor} recomecarJogo={recomecarJogo} />}

    </Body>
  )
}