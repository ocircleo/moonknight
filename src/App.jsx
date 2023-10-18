import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/navbar/Navbar'
import Footer from './shared/footer/Footer'

function App() {

  return (
    <div className='flex justify-between flex-col min-h-screen'>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <Footer className=''></Footer>
    </div>
  )
}

export default App
