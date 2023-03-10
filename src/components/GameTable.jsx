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
}) => {
  return (
    <div>
      <div>
        <DealerHand dealerHand={dealerHand} />
      </div>

      <div>
        <PlayerHand convertToNum={convertToNum} playerHand={playerHand} />
      </div>
      <div>
        <button
          onClick={() => dealDealerHand() && dealPlayerHand()}
          className='btn btn-accent'
        >
          Deal Hand
        </button>
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
