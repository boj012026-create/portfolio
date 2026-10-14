import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from  './components/NavBar.tsx'
//import RepoIterator from './components/RepoIterator'

function App() {

  return (
  <>
  <header>
  <NavBar/>
  </header>
  <main>
  <Outlet/>
  </main>
  <footer>
  <h2>footer</h2>
  </footer>
  </>
  )
}

export default App
