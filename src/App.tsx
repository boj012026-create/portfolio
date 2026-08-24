import soundBoardthumb from './assets/thumbnails/soundboard.jpg'
import RepoCard from './components/RepoCard'
import './App.css'



function App() {

  const sBoardURL: string = "https://boj012026-create.github.io/DaftPunkSoundboard/";
  const sBoardImg: string = soundBoardthumb

  return (
    <>
    <h2 className="text-4xl">Repo</h2>
    <RepoCard img={sBoardImg} link={sBoardURL}/>
    </>
  )
}

export default App
