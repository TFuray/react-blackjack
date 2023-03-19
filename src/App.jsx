import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import StartButton from './components/StartButton'
import GameTable from './components/GameTable'

function App() {
  const [deckId, setDeckId] = useState(
    ''
    // JSON.parse(localStorage.getItem('deckId')) || ''
  )
  const [error, setError] = useState(null)
  const [dealerHand, setDealerHand] = useState([])
  const [playerHand, setPlayerHand] = useState([])

  // useEffect(() => {
  //   checkBustPlayer(calcHandTotal(playerHand))
  //   {
  //     resetPlay()
  //   }
  // }, [playerHand])

  const convertToNum = val => {
    if (val === 'ACE') {
      return 10
    } else if (val === 'KING') {
      return 10
    } else if (val === 'QUEEN') {
      return 10
    } else if (val === 'JACK') {
      return 10
    } else {
      return Number(val)
    }
  }

  const calcHandTotal = (hand) => {
    let total = 0
    hand.forEach(card => {
      if (card.value === 'ACE' || 'KING' || 'QUEEN' || 'JACK') {
        total += convertToNum(card.value)
      } else {
        total += card.value
      }
    })
    return total
  }

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

    // deckId == ''? (
    // try {
    //   const response = await axios.get(
    //     'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    //   )
    //   setDeckId(response.data.deck_id)
    //   localStorage.setItem('deckId', JSON.stringify(response.data.deck_id))
    // } catch (err) {
    //   setError(err)
    // }) :
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
      setPlayerHand([...playerHand, response.data.cards[0]], checkBustPlayer(calcHandTotal(playerHand)))
    } catch (err) {
      setError(err)
    }

  }

  const checkBustPlayer = handTotal => {
    if (handTotal > 21) {
      alert('You busted!')
      resetPlay()
    }

  }



  const resetPlay = () => {
    setDealerHand([])
    setPlayerHand([])
    dealPlayerHand()
    dealDealerHand()
  }

  const hitDealer = async () => {
    try {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      )
      setDealerHand([...dealerHand, response.data.cards[0]])
      console.log(dealerHand)
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
          convertToNum={convertToNum}
          calcHandTotal={calcHandTotal}
        />
      </div>
    </div>
  )
}

export default App
