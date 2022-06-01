import PropTypes from 'prop-types'
import { createContext, useMemo, useState } from 'react'

const CalculationContext = createContext()

export function CalculationContextProvider({ children }) {
  const [selectedTip, setSelectedTip] = useState('')
  const [billAmount, setBillAmount] = useState('0')
  const [numberOfPeople, setNumberOfPeople] = useState('0')

  const data = useMemo(
    () => ({
      selectedTip,
      setSelectedTip,
      billAmount,
      setBillAmount,
      numberOfPeople,
      setNumberOfPeople,
    }),
    [selectedTip, billAmount, numberOfPeople],
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
