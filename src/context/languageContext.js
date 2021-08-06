import * as React from 'react'
import { LANGUAGES } from '../constants'

const LanguageContext = React.createContext()

const LanguageContextProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = React.useState(
    LANGUAGES.en,
  )

  const value = { currentLanguage, setCurrentLanguage }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => {
  const context = React.useContext(LanguageContext)

  if (context === undefined) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider',
    )
  }

  return context
}

export { LanguageContextProvider, useLanguage }
