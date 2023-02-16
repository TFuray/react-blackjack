
export const PlayerHand = ({playerHand}) => {
  return (
    <div>
      <h3>Player Hand</h3>
      <ul>
        {playerHand.map(card => (
          <li key={card.code}>{card.value} of {card.suit}</li>
        ))}
      </ul>
    </div>
  )
}

export default PlayerHand