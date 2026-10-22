//import RepoIterator from '../components/RepoIterator'
import RepoCard from '../components/RepoCard'
import Header from '../components/Header'

export default function Projects() {
  return (
    <>
    <Header title="Prosjekt" fontSize={70}/>
    <section
      className="flex flex-wrap
      lg:grid grid-cols-2 gap-20"
      >
      <RepoCard
        id="camping-frontend"
        title="Camping"
        description=""
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
