import React, { useContext, useRef } from 'react'
import Input from '../molecules/Input'
import Button from '../molecules/Button'
import classes from './TipsData.module.scss'
import CalculationContext from '../../context/CalculationContext'

function TipsData() {
  const {
    setSelectedTip,
    billAmount,
    setBillAmount,
    numberOfPeople,
    setNumberOfPeople,
    dynamicKey,
    dynamicCorr,
    setDynamicCorr,
  } = useContext(CalculationContext)

  const tipsAmount = [5, 10, 15, 25, 50]
  const peopleRef = useRef(null)
  const buttonRef = useRef([])

  // Disable selected class on Tip Buttons
  const radioButtonsReset = () => {
    buttonRef.current.forEach((el) => {
      el.classList.remove('selected')
    })
  }

  const handleTipClick = (e) => {
    // Clear Custom Tip input value
    setDynamicCorr(Math.random())

    // Reset Tip Buttons state 'selected'
    radioButtonsReset()

    e.target.classList.toggle('selected')
    setSelectedTip(Number(e.target.innerText.match(/\d+/)))

    // Check's value presence
    if (!peopleRef.current.value)
      peopleRef.current.classList.add('err')
  }

  const handleTipChange = (e) => {
    // Reset Tip Buttons state 'selected'
    radioButtonsReset()
    setSelectedTip(Number(e.target.value))

    // Check's value presence
    if (!peopleRef.current.value)
      peopleRef.current.classList.add('err')
  }

  const handleBillChange = (e) => {
    setBillAmount(Number(e.target.value))

    // Check's value presence
    if (!peopleRef.current.value)
      peopleRef.current.classList.add('err')
  }

  const handlePeopleChange = (e) => {
    setNumberOfPeople(Number(e.target.value))
    e.target.classList.remove('err')
  }

  // Disable scroll number inside input[type=number]
  const handleWheel = (e) => {
    e.target.blur()
  }

  return (
    <div className={classes.TipsData}>
      <label htmlFor="billAmount">
        Bill
        <form id="billAmount">
          <Input
            key={dynamicKey}
            type="number"
            className="billAmount"
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
              onClick={handleTipClick}
              buttonRef={(el) => (buttonRef.current[value] = el)}
            />
          ))}
          <Input
            key={dynamicKey + dynamicCorr}
            type="number"
            placeholder="Custom"
            onChange={handleTipChange}
            onWheel={handleWheel}
          />
        </form>
      </label>

      <label htmlFor="peopleAmount">
        Number of People
        <form id="peopleAmount">
          <Input
            key={dynamicKey}
            type="number"
            className="peopleAmount"
            placeholder="0"
            value={numberOfPeople}
            onChange={handlePeopleChange}
            onWheel={handleWheel}
            inputRef={(el) => (peopleRef.current = el)}
          />
          <span className="errMes">Can&apos;t be zero</span>
        </form>
      </label>
    </div>
  )
}

export default TipsData
