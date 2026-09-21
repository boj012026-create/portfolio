import thumbImg from '../scripts/thumbImg.ts'
import repoJson from '../assets/json/repoStats.json'
import RepoCard from './RepoCard'

export default function RepoIterator() {

  return(
    <>
    { repoJson.map( repo => (
        <RepoCard 
          id={repo.id}
          title={repo.name}
          description={repo.description}
          img={thumbImg[`${repo.name}.jpg`]}
          homepage={repo.homepage}
          github={repo.html_url}
        />
    ))}
  </>
  )
}
