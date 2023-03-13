import i18n from '@/locales/i18n'
import AppRoute from '@/routes/AppRoute'
import { HelmetProvider } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <AppRoute />
      </HelmetProvider>
    </I18nextProvider>
  )
}

export default App
