import { useState, createContext } from 'react'

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [showChat, setShowChat] = useState(false)

  return (
    <ChatContext.Provider
      value={{
        showChat,
        setShowChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export { ChatProvider, ChatContext }
