import thumbImg from '../services/thumbImg.ts'
import repoJson from '../assets/json/repoStats.json'
import RepoCard from './RepoCard'

export default function RepoContainer() {

  return(
    <section className="flex flex-col gap-4">
    <h1 className="text-6xl">Repos</h1>
    { repoJson.map( repo => (
      <>
        <RepoCard 
          id={repo.id}
          title={repo.name}
          description={repo.description}
          img={thumbImg[`${repo.name}.jpg`]}
          homepage={repo.homepage}
          github={repo.html_url}
        />
      </>
    ))}
    </section>
  )
}
