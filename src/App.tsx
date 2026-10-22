import './App.css'
import './index.css'
import ThemeSwitchBtn from './components/ThemeSwitchBtn.tsx'
import { Outlet } from 'react-router-dom'
import NavBar from  './components/NavBar.tsx'
//import RepoIterator from './components/RepoIterator'

function App() {

  return (
  <>
  <header className="
  bg-color-surface
  mx-5 flex justify-between">
  <ThemeSwitchBtn/>
  <NavBar/>
  </header>
  <main className="overflow-scroll
  bg-color-background
  lg:mx-20 
  ">
  <Outlet/>
  </main>
  <footer
    className="
      flex flex-wrap gap-2 mt-5 
      justify-center
      bg-color-surface
      lg: justify-start p-5
      ">
      <a href="https://www.linkedin.com/in/jan-olav-berg-a90734b3/" target="_blank">LinkedIn</a>
      <a href="https://github.com/boj012026-create" target="_blank"> GitHub</a>
      <a href="https://www.thingiverse.com/martialcart/designs" target="_blank">3D_design</a>
  </footer>
  </>
  )
}

export default App
