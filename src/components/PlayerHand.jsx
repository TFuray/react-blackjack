export const PlayerHand = ({ playerHand, convertToNum }) => {
  const calcHandTotal = () => {
    let total = 0
    playerHand.forEach(card => {
      if (card.value === 'ACE' || 'KING' || 'QUEEN' || 'JACK') {
        total += convertToNum(card.value)
      } else {
        total += card.value
      }
    })
    return total
  }
  return (
    <div className='mt-7 ml-7 mb-7'>
      <h3 className='text-2xl font-bold'>Player Hand</h3>
      <p>Total: {calcHandTotal()}</p>
      <ul className='flex'>
        {playerHand.map(card => (
          <li key={card.code}>
            <img src={card.image} alt='' />
            {card.value} of {card.suit}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlayerHand
