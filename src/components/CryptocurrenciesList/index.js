// Write your JS code here
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {list} = props
  return (
    <div className="currency-list-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>

      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="currency"
      />

      <ul className="list-container">
        <div className="header-conatiner">
          <p>Coin Type</p>
          <div className="value-container">
            <p className="value">USD</p>
            <p className="value">EURO</p>
          </div>
        </div>
        {list.map(each => (
          <CryptocurrencyItem key={each.id} item={each} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
