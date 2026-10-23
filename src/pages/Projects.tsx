//import RepoIterator from '../components/RepoIterator'
import RepoCard from '../components/RepoCard'
import Header from '../components/Header'

export default function Projects() {
  return (
    <>
    <Header title="Prosjekt" fontSize={70}/>
    <section
      className="flex flex-wrap
      sm:grid grid-cols-2 gap-20"
      >
      <RepoCard
        id="camping-frontend"
        title="Camping"
        description="Fiktiv hytte oversikt generert med React data fra hodeløs wordpress"
      />
      <RepoCard
        id="DaftPunkSoundboard"
        title="Soundboard"
        description=""
      />
      <RepoCard
        id="fm3Reactoppg1"
        title="Resturant Menu"
        description=""
      />
    </section>

    </>
  )
}
