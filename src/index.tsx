import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './components/App'
import { GlobalProvider } from './context/globalContext'
import { RecoilRoot } from 'recoil'

render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
