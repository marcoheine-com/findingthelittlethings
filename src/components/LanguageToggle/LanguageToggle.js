import * as React from 'react'
import { useLanguage } from '../../context/languageContext'
import { LANGUAGES } from '../../constants'

export const LanguageToggle = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  const isBrowser = typeof window !== 'undefined'

  const handleChange = (event) => {
    setCurrentLanguage(event.target.value)

    if (isBrowser) {
      localStorage.setItem('language', event.target.value)
    }
  }

  return (
    <fieldset>
      <legend>Language</legend>
      <input
        type="radio"
        id={LANGUAGES.en}
        name={LANGUAGES.en}
        value={LANGUAGES.en}
        checked={currentLanguage === LANGUAGES.en}
        onChange={handleChange}
      />
      <label htmlFor="en-US">EN</label>
      <input
        type="radio"
        id={LANGUAGES.de}
        name={LANGUAGES.de}
        value={LANGUAGES.de}
        checked={currentLanguage === LANGUAGES.de}
        onChange={handleChange}
      />
      <label htmlFor="de-DE">DE</label>
    </fieldset>
  )
}
