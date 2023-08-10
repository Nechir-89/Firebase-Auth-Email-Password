import './App.css'
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='nav-wrapper'>
        <div><Link to='/signup'>Sign Up</Link></div>
        <div><Link to='/signin'>Sign In</Link></div>
        <div><Link to='/signout'>Sign Out</Link></div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
