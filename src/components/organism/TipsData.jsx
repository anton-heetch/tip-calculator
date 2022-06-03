import { useContext } from 'react'
import Input from '../molecules/Input'
import Button from '../molecules/Button'
import classes from './TipsData.module.scss'
import CalculationContext from '../../context/CalculationContext'

function TipsData() {
  const {
    setSelectedTip,
    customTip,
    setCustomTip,
    billAmount,
    setBillAmount,
    numberOfPeople,
    setNumberOfPeople,
    tipAmount,
  } = useContext(CalculationContext)

  const tipsAmount = [5, 10, 15, 25, 50]
  const radioButtons = document.querySelectorAll('.radio')

  const handlerClick = (e) => {
    radioButtons.forEach((el) => {
      el.classList.remove('selected')
    })

    e.target.classList.toggle('selected')
    setSelectedTip(Number(e.target.innerText.match(/\d+/)))
  }

  const handlerTipChange = (e) => {
    radioButtons.forEach((el) => {
      el.classList.remove('selected')
    })

    setSelectedTip(undefined)
    setCustomTip(Number(e.target.value))
  }

  const handleBillChange = (e) => {
    setBillAmount(Number(e.target.value))
  }

  const handlePeopleChange = (e) => {
    setNumberOfPeople(Number(e.target.value))
  }

  const handleCustomTipFocus = () => {}

  const handleWheel = (e) => {
    e.target.blur()
  }

  return (
    <div className={classes.TipsData}>
      <label htmlFor="billAmount">
        Bill
        <form id="billAmount">
          <Input
            type="number"
            placeholder="0"
            value={billAmount}
            onChange={handleBillChange}
            onWheel={handleWheel}
          />
        </form>
      </label>

      <label htmlFor="tipAmount">
        Select Tip %
        <form id="tipAmount" name="tipAmount">
          {tipsAmount.map((value) => (
            <Button
              key={value}
              buttonClass="radio"
              title={`${value}%`}
              onClick={handlerClick}
            />
          ))}
          <Input
            type="number"
            placeholder="Custom"
            value={customTip}
            onChange={handlerTipChange}
            onWheel={handleWheel}
          />
        </form>
      </label>

      <label htmlFor="peopleAmount">
        Number of People
        <form id="peopleAmount">
          <Input
            type="number"
            placeholder="0"
            value={numberOfPeople}
            onChange={handlePeopleChange}
            onWheel={handleWheel}
          />
        </form>
      </label>
    </div>
  )
}

export default TipsData
