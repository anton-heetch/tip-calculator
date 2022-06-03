import PropTypes from 'prop-types'
import { createContext, useEffect, useMemo, useState } from 'react'

const CalculationContext = createContext()

export function CalculationContextProvider({ children }) {
  const [selectedTip, setSelectedTip] = useState(undefined)
  const [customTip, setCustomTip] = useState(undefined)
  const [billAmount, setBillAmount] = useState(undefined)
  const [numberOfPeople, setNumberOfPeople] = useState(undefined)
  const [tipAmount, setTipAmount] = useState(undefined)
  const [totalAmount, setTotalAmount] = useState(undefined)

  useEffect(() => {
    if (billAmount && (selectedTip || customTip))
      setTipAmount(
        Number(
          (billAmount * ((selectedTip + customTip) / 100)).toFixed(2),
        ),
      )

    if (tipAmount && numberOfPeople)
      setTotalAmount(Number((tipAmount / numberOfPeople).toFixed(2)))
  })

  const resetForm = () => {
    setSelectedTip(undefined)
    setCustomTip(undefined)
    setBillAmount(undefined)
    setNumberOfPeople(undefined)
    setTipAmount(undefined)
    setTotalAmount(undefined)
  }

  const data = useMemo(
    () => ({
      selectedTip,
      setSelectedTip,
      customTip,
      setCustomTip,
      billAmount,
      setBillAmount,
      numberOfPeople,
      setNumberOfPeople,
      tipAmount,
      totalAmount,
      resetForm,
    }),
    [
      selectedTip,
      customTip,
      billAmount,
      numberOfPeople,
      tipAmount,
      totalAmount,
    ],
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
