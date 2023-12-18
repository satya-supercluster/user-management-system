
import './App.css'
import Form from './components/Form'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Form/>} />
      </Routes>
    </>
  )
}

export default App
