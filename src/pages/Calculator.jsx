import { ReactComponent as Logo } from '../assets/svg/logo.svg'
import TipsData from '../components/organism/TipsData'
import { CalculationContextProvider } from '../context/CalculationContext'

function Calculator() {
  return (
    <CalculationContextProvider>
      <div className="mainContainer">
        <Logo fill="#406365" width="88px" height="60px" />

        <div className="content">
          <TipsData />
        </div>
      </div>
    </CalculationContextProvider>
  )
}

export default Calculator
