import thumbImg from '../services/thumbImg.ts'
import repoJson from '../assets/json/repoStats.json'
import RepoCard from './RepoCard'

export default function RepoContainer() {

  return(
    <>
    <h1 className="text-6xl">Repos</h1>
    { repoJson.map( repo => (
      <>
      <RepoCard id={repo.id} img={thumbImg[`${repo.name}.jpg`]} link={repo.homepage}/>
     </>
    ))}
    </>
  );
}
