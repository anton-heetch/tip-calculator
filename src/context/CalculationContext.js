import PropTypes from 'prop-types'
import { createContext, useEffect, useMemo, useState } from 'react'

const CalculationContext = createContext()

export function CalculationContextProvider({ children }) {
  const [selectedTip, setSelectedTip] = useState(undefined)
  const [billAmount, setBillAmount] = useState(undefined)
  const [numberOfPeople, setNumberOfPeople] = useState(undefined)
  const [tipAmount, setTipAmount] = useState(undefined)
  const [totalAmount, setTotalAmount] = useState(undefined)
  const [dynamicKey, setDynamicKey] = useState(Math.random())
  const [dynamicCorr, setDynamicCorr] = useState(1)

  // Dynamically change results
  useEffect(() => {
    if (billAmount && selectedTip && numberOfPeople)
      setTotalAmount(
        Number(
          (billAmount * (selectedTip / 100) + billAmount) /
            numberOfPeople,
        ).toFixed(2),
      )
    else setTotalAmount('0.00')

    if (numberOfPeople && billAmount && selectedTip)
      setTipAmount(
        Number(
          (billAmount * (selectedTip / 100)) / numberOfPeople,
        ).toFixed(2),
      )
    else setTipAmount('0.00')
  })

  // Reset calculation
  const resetForm = () => {
    setSelectedTip(undefined)
    setBillAmount(undefined)
    setNumberOfPeople(undefined)
    setTipAmount(undefined)
    setTotalAmount(undefined)
    setDynamicKey(Math.random())
  }

  const data = useMemo(
    () => ({
      setSelectedTip,
      billAmount,
      setBillAmount,
      numberOfPeople,
      setNumberOfPeople,
      tipAmount,
      totalAmount,
      dynamicKey,
      dynamicCorr,
      setDynamicCorr,
      resetForm,
    }),
    [selectedTip, billAmount, numberOfPeople, tipAmount, totalAmount],
  )

  return (
    <CalculationContext.Provider value={data}>
      {children}
    </CalculationContext.Provider>
  )
}

CalculationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CalculationContext
