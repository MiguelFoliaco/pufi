import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { InstagramStore } from './Context/InstagramIMG'
import './index.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={InstagramStore}>
    <App />
  </Provider>
)
