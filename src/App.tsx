import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from  './components/NavBar.tsx'
//import RepoIterator from './components/RepoIterator'

function App() {

  return (
  <>
  <NavBar/>
  <Outlet/>
  </>
  )
}

export default App
