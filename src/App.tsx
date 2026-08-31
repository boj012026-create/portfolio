import RepoCard from './components/RepoCard'
import './App.css'
import repoJson from './assets/json/repoStats.json'
import thumbImg from './services/thumbImg.ts'

function App() {
  console.log("thumb in app", thumbImg)

  const ob: Record<string, string> = {
    test: "hello! test"
  }

  console.log("ob Record made in app", ob)

  return (
    <>
    <h2 className="text-4xl">Repo</h2>
    { repoJson.map( repo => (
      <>
     <RepoCard id={repo.id} img={thumbImg[`${repo.name}.jpg`]} link={repo.homepage}/>
     
     </>
      ))
    }
    </>
  )
}

export default App
