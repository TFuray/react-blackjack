const PlayOptions = ({ hitPlayer, hitDealer }) => {
  return (
    <div className="mt-3">
      <ul className="flex">
        <li className="mr-3">
          <button onClick={() => hitPlayer()} className='btn btn-accent'>
            Hit
          </button>
        </li>
        <li>
          <button className="btn btn-secondary">Stand</button>
        </li>
      </ul>
    </div>
  )
}

export default PlayOptions
