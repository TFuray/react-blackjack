import backCard2 from '../assets/backCard2.png'

const DealerHand = ({ dealerHand }) => {
  return (
    <div className='mt-7 ml-7'>
      <h3 className='text-2xl font-bold'>Dealer Hand</h3>
      <ul className='flex'>
        {dealerHand.length ? (
          <li className='flex' key={dealerHand[0].code}>
            <div>
              <img src={dealerHand[0].image} alt='' />
              {dealerHand[0].value} of {dealerHand[0].suit}
            </div>
            <div>
              <img height='314px' width='226px' src={backCard2} alt='' />
            </div>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  )
}

export default DealerHand
