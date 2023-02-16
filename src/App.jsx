import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import StartButton from './components/StartButton'

function App () {
  const [deckId, setDeckId] = useState('')
  const [error, setError] = useState(null)
  const [dealerHand, setDealerHand] = useState([])
  const [playerHand, setPlayerHand] = useState([])

  const getDeckId = async () => {
    try {
      const response = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6'
      )
      setDeckId(response.data.deck_id)
      console.log(deckId)
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <StartButton
          getDeckId={getDeckId}
          />
      </div>
    </div>
  )
}

export default App
