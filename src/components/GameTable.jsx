import { useState } from 'react'
import DealerHand from './DealerHand'
import PlayerHand from './PlayerHand'
import PlayOptions from './PlayOptions'

const GameTable = ({
  dealDealerHand,
  dealPlayerHand,
  dealerHand,
  playerHand,
  hitDealer,
  hitPlayer,
  convertToNum,
  calcHandTotal
}) => 
{
  const [showDeal, setShowDeal] = useState(true)

  return (
    <div className='flex flex-col ml-1/2'>
      <div>
        <DealerHand dealerHand={dealerHand} />
      </div>
{console.log(playerHand)}
      <div>
        <PlayerHand calcHandTotal={calcHandTotal} convertToNum={convertToNum} playerHand={playerHand} />
      </div>
      <div>
        {showDeal ? 
        <button
          onClick={() => dealDealerHand() && dealPlayerHand() && setShowDeal(false)}
          className='btn btn-accent'
        >
          Deal Hand
        </button> : null}
        <div>
          <PlayOptions 
            hitDealer={hitDealer} 
            hitPlayer={hitPlayer}
          />
        </div>
      </div>
    </div>
  )
}

export default GameTable
