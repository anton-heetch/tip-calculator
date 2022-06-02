import { useContext } from 'react'
import classes from './TipsResult.module.scss'
import Button from '../molecules/Button'
import CalculationContext from '../../context/CalculationContext'

function TipsResult() {
  const { tipAmount, totalAmount } = useContext(CalculationContext)

  return (
    <div className={classes.TipResult}>
      <div className="wrapper">
        <div className={classes.tipAmount}>
          <div>
            <span>Tip Amount</span>
            <br /> <span>/ person</span>
          </div>
          <div>
            <span>${tipAmount}</span>
          </div>
        </div>
        <div className={classes.total}>
          <div>
            <span>Total</span>
            <br /> <span>/ person</span>
          </div>
          <div>
            <span>${totalAmount}</span>
          </div>
        </div>
      </div>
      <Button title="Reset" />
    </div>
  )
}

export default TipsResult
