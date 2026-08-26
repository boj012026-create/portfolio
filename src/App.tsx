import soundBoardthumb from './assets/thumbnails/soundboard.jpg'
import RepoCard from './components/RepoCard'
import './App.css'
import repoJson from './assets/json/repoStats.json'



function App() {
  const sBoardURL: string = "https://boj012026-create.github.io/DaftPunkSoundboard/";
  const sBoardImg: string = soundBoardthumb
  console.log("repoJson")
  console.log(repoJson)

  return (
    <>
    <h2 className="text-4xl">Repo</h2>
    <RepoCard img={sBoardImg} link={sBoardURL}/>
    { repoJson.map( repo => (
     <RepoCard id={repo.id} img={repo.owner.avatar_url} link={repo.homepage}/>
      ))
    }
    </>
  )
}

export default App
