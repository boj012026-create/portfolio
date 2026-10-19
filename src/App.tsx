import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from  './components/NavBar.tsx'
//import RepoIterator from './components/RepoIterator'

function App() {

  return (
  <>
  <header className="h-1/5 flex justify-end">
  <NavBar/>
  </header>
  <main className="h-4/5">
  <Outlet/>
  </main>
  <footer
    className="
      flex
      flex-wrap
      gap-2
      bg-blue-400/20
      ">
      <a href="https://www.linkedin.com/in/jan-olav-berg-a90734b3/" target="_blank">LinkedIn</a>
      <a href="https://github.com/boj012026-create" target="_blank"> GitHub</a>
      <a href="https://www.thingiverse.com/martialcart/designs" target="_blank">3D design</a>
  </footer>
  </>
  )
}

export default App
