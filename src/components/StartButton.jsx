
const StartButton = ({getDeckId}) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={()=>getDeckId()}>Start Game</button>
    </div>
  )
}

export default StartButton