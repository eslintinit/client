import { useState, createContext } from 'react'
import { BookingWidget } from 'components/organisms'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [showBookingWidget, setShowBookingWidget] = useState(false)
  const [selectedAdvisor, setSelectedAdvisor] = useState(null)
  console.log(selectedAdvisor)

  return (
    <AppContext.Provider
      value={{
        showBookingWidget,
        setShowBookingWidget,
        selectedAdvisor,
        setSelectedAdvisor,
      }}
    >
      {showBookingWidget && (
        <BookingWidget hide={() => setShowBookingWidget(false)} />
      )}
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
