import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from '@/App'
import { store } from '@/redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
