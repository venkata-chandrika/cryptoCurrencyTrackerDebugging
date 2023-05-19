// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props

  const {currencyName, usdValue, euroValue, currencyLogo} = item
  return (
    <li className="item-container">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="heading">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
