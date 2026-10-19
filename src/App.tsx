import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from  './components/NavBar.tsx'
//import RepoIterator from './components/RepoIterator'

function App() {

  return (
  <>
  <header className="flex justify-end">
  <NavBar/>
  </header>
  <main>
  <Outlet/>
  </main>
  <footer
    className="bg-blue-400/50">
    <p>LinkedIn:
      <a href="https://www.linkedin.com/in/jan-olav-berg-a90734b3/"
      target="_blank"
    >
    jan-olav-berg-a90734b3</a> </p>
    <p>Github:
      <a href="https://github.com/boj012026-create"
        target="_blank">Boj012026-create</a></p>
    <p>3D design thingyverse: <a href="https://www.thingiverse.com/martialcart/designs" target="_blank">Martialcart</a></p>
  </footer>
  </>
  )
}

export default App
