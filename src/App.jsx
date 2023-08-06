import './App.css'
import SignUp from './assets/components/SignUp/SignUp'
import { Routes, Route } from 'react-router-dom'
import Success from './assets/components/Success/Success'

function App() {

  return (
    <>
    <Routes>
      <Route path='/success' element={<Success/>}/>
      <Route path='/' element ={<SignUp></SignUp>}/>
    </Routes>
    
    
    
     
    </>
  )
}

export default App
