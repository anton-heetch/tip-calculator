import PropTypes from 'prop-types'
import { createContext, useEffect, useMemo, useState } from 'react'

const CalculationContext = createContext()

export function CalculationContextProvider({ children }) {
  const [selectedTip, setSelectedTip] = useState(0)
  const [billAmount, setBillAmount] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const [tipAmount, setTipAmount] = useState(0.0)
  const [totalAmount, setTotalAmount] = useState(0.0)

  useEffect(() => {
    setTipAmount(billAmount * (selectedTip / 100))
    setTotalAmount(tipAmount / numberOfPeople)
  }, [selectedTip, billAmount, numberOfPeople])

  const data = useMemo(
    () => ({
      selectedTip,
      setSelectedTip,
      billAmount,
      setBillAmount,
      numberOfPeople,
      setNumberOfPeople,
      tipAmount,
      totalAmount,
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
