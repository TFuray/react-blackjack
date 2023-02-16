
const DealerHand = ({dealerHand}) => {
  return (
    <div>
      <h3>Dealer Hand</h3>
      <ul>
        {dealerHand.map(card => (
          <li key={card.code}>{card.value} of {card.suit}</li>
        ))}
      </ul>
    </div>
  )
}

export default DealerHand