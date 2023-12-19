import './App.css'
import Form from './components/Form'
import { Route,Routes } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Archive from './pages/Archive'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Form/>} />
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='archive' element={<Archive/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
