import { ReactComponent as Logo } from '../assets/svg/logo.svg'
import { CalculationContextProvider } from '../context/CalculationContext'
import TipsResult from '../components/organism/TipsResult'
import TipsData from '../components/organism/TipsData'

function Calculator() {
  return (
    <CalculationContextProvider>
      <div className="mainContainer">
        <Logo fill="#406365" width="88px" height="60px" />

        <div className="content">
          <TipsData />
          <TipsResult />
        </div>
      </div>
    </CalculationContextProvider>
  )
}

export default Calculator
