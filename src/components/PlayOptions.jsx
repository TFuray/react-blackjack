

const PlayOptions = ({hitPlayer, hitDealer}) => {
  return (
  <div>
    <button
      onClick={() => hitPlayer()}
      className='btn btn-accent'
    >
      Hit Player
    </button>
    <button
      onClick={() => hitDealer()}
      className='btn btn-accent'
    >
      Hit Dealer
    </button>
  </div>
  )
}

export default PlayOptions