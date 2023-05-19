// Write your code here
import Loader from 'react-loader-spinner'

// import {async} from 'rxjs'

import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    list: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCrptoList()
  }

  getCrptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    // console.log(data)
    this.setState({list: formattedData, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    // console.log(list)
    return (
      <div className="tracker-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList list={list} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
