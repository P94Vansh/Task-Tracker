import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      {/* Shared shell for every route. */}
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
