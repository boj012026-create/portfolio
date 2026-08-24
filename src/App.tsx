import soundBoardthumb from './assets/thumbnails/soundboard.jpg'
import RepoCard from './components/RepoCard'
import './App.css'



function App() {

  return (
    <>
    <h2 className="text-4xl">Repo</h2>
    <RepoCard img={soundBoardthumb} link="https://boj012026-create.github.io/DaftPunkSoundboard/"/>
    </>
  )
}

export default App
