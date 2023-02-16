import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import StartButton from './components/StartButton'
import GameTable from './components/GameTable'

function App () {
  const [deckId, setDeckId] = useState('')
  const [error, setError] = useState(null)
  const [dealerHand, setDealerHand] = useState([])
  const [playerHand, setPlayerHand] = useState([])

  const getDeckId = async () => {
    try {
      const response = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
      )
      setDeckId(response.data.deck_id)
      console.log(deckId)
    } catch (err) {
      setError(err)
    }
  }

  const dealDealerHand = async () => {
    try {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
      )
      setDealerHand(response.data.cards)
      console.log(dealerHand)
    } catch (err) {
      setError(err)
    }
  }
  const dealPlayerHand = async () => {
    try {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
      )
      setPlayerHand(response.data.cards)
      console.log(playerHand)
    } catch (err) {
      setError(err)
    }
  }

  const hitPlayer = async () => {
    try {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      )
      setPlayerHand([...playerHand, response.data.cards[0]])
      console.log(hand)
    } catch (err) {
      setError(err)
    }
  }
  const hitDealer = async () => {
    try {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      )
      setDealerHand([...dealerHand, response.data.cards[0]])
      console.log(hand)
    } catch (err) {
      setError(err)
    }
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <StartButton getDeckId={getDeckId} />
      </div>

      <div>
        <GameTable
          dealDealerHand={dealDealerHand}
          dealPlayerHand={dealPlayerHand}
          dealerHand={dealerHand}
          playerHand={playerHand}
          hitDealer={hitDealer}
          hitPlayer={hitPlayer}
        />
      </div>
    </div>
  )
}

export default App
