import * as React from 'react'
import { LANGUAGES } from '../constants'

const LanguageContext = React.createContext()
const isBrowser = typeof window !== 'undefined'

const defaultLanguage =
  (isBrowser && localStorage.getItem('language')) || LANGUAGES.en

const LanguageContextProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] =
    React.useState(defaultLanguage)

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
