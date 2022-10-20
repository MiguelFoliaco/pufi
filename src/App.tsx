import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.less'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Index } from './Home/Page/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index/>} path=''/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
