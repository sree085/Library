import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
// import Signup2 from './components/Signup2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/>       */}
      {/* <Signup/> */}
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App
