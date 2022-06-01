import classes from './TipsResult.module.scss'
import Button from '../molecules/Button'

function TipsResult() {
  return (
    <div className={classes.TipResult}>
      <div className="wrapper">
        <div className={classes.tipAmount}>
          <div>
            <span>Tip Amount</span>
            <br /> <span>/ person</span>
          </div>
          <div>
            <span>$4.25</span>
          </div>
        </div>
        <div className={classes.total}>
          <div>
            <span>Total</span>
            <br /> <span>/ person</span>
          </div>
          <div>
            <span>$32.79</span>
          </div>
        </div>
      </div>
      <Button title="Reset" />
    </div>
  )
}

export default TipsResult
