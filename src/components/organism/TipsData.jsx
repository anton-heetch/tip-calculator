import { useContext } from 'react'
import Input from '../molecules/Input'
import classes from './TipsData.module.scss'
import CalculationContext from '../../context/CalculationContext'

function TipsData() {
  const {
    setSelectedTip,
    billAmount,
    setBillAmount,
    numberOfPeople,
    setNumberOfPeople,
  } = useContext(CalculationContext)

  const radioButtons = document.querySelectorAll('.radio')

  const handlerClick = (e) => {
    radioButtons.forEach((el) => {
      el.classList.remove('selected')
    })

    e.target.classList.toggle('selected')
    setSelectedTip(Number(e.target.value))
  }

  const handlerTipChange = (e) => {
    setSelectedTip(Number(e.target.value))
  }

  const handleBillChange = (e) => {
    setBillAmount(Number(e.target.value))
  }

  const handlePeopleChange = (e) => {
    setNumberOfPeople(Number(e.target.value))
  }

  const handleCustomTipFocus = () => {
    radioButtons.forEach((el) => {
      el.classList.remove('selected')
    })
  }

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
            value={billAmount}
            onChange={handleBillChange}
            onWheel={handleWheel}
          />
        </form>
      </label>

      <label htmlFor="tipAmount">
        Select Tip %
        <form id="tipAmount" name="tipAmount">
          <Input
            type="button"
            className="radio"
            value={5}
            onClick={handlerClick}
          />
          <Input
            type="button"
            className="radio"
            value={10}
            onClick={handlerClick}
          />
          <Input
            type="button"
            className="radio"
            value={15}
            onClick={handlerClick}
          />
          <Input
            type="button"
            className="radio"
            value={25}
            onClick={handlerClick}
          />
          <Input
            type="button"
            className="radio"
            value={50}
            onClick={handlerClick}
          />
          <Input
            type="number"
            placeholder="Custom"
            onChange={handlerTipChange}
            onFocus={handleCustomTipFocus}
            onWheel={handleWheel}
          />
        </form>
      </label>

      <label htmlFor="peopleAmount">
        Number of People
        <form id="peopleAmount">
          <Input
            type="number"
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
