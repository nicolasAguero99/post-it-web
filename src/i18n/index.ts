import english from './en.json'
import spanish from './es.json'

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es'
}

export const getI18N = (currentLocale: string | undefined = 'es') => {
  if (currentLocale.split('/')[1] === LANGUAGES.ENGLISH) return english
  if (currentLocale.split('/')[1] === LANGUAGES.SPANISH) return spanish
  return spanish
}
