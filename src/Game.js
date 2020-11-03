import React, {useEffect, useState} from 'react';
import Card from './Card'
import './App.css';
import App from './App'
import { render } from '@testing-library/react';


// do it with colours

export default function Game(props) {
    const [cards, setCards] = useState(props.deck)
    const [clicked, addClicked] = useState([])
    const [score, setScore] = useState(0)
    const [gameWon, resetGame] = useState('no')

    function shuffleCards() {
        let shuffledCards = cards
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[rand]] = [shuffledCards[rand], shuffledCards[i]]
        }
    }


    useEffect(() => {
        if (gameWon === 'yes') {
            console.log('activated')
            document.getElementById('title2').innerHTML = "You Win! Click to play again!"
            document.getElementById('title2').style.color = "blue"
            setScore(0)
            let newClicked = clicked
            newClicked.length = 0
            addClicked(newClicked)
            resetGame('no')
        }
    }, [gameWon])

    shuffleCards()

    function handleClick(e) {
        console.log(props.difficulty)
        document.getElementById('title2').innerHTML = "Don't click the same color twice!"
        document.getElementById('title2').style.color = 'indianred'
        let newClicked = clicked
        if (!newClicked.includes(e.target.id)) {
            newClicked.push(e.target.id)
            setScore(score + 1)
            if (score === cards.length - 1) {
                resetGame(gameWon => 'yes')
            }
        } 
        else {
            newClicked.length = 0
            setScore(0)
        }
        addClicked(newClicked)
    } 
 
    return (
        <div id="gameCont">

            <div id="cards">
                {cards.map((card) => {
                    return (
                        <Card 
                        onClick={handleClick}
                        //src={card.src}
                        id={card}
                        color={card}
                        key={card} />
                    )
                })}
            </div>
            <label id="score">Current Score: {score}</label>
        </div>
    )
            }