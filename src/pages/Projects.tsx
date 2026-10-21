//import RepoIterator from '../components/RepoIterator'
import RepoCard from '../components/RepoCard'

export default function Projects() {
  return (
    <>
      <h1
        className="text-5xl my-5"
      >Prosjekt</h1>
    <section
      className="flex flex-wrap m-5"
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
