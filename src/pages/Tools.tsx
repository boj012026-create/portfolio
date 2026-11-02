import Header from '../components/Header'
import RepoCard from '../components/RepoCard'

export default function Tools() {
  return (
    <>
    <Header title="Verktøy" fontSize={70}/>
    <section
      className="flex flex-wrap
      sm:grid grid-cols-2 gap-20"
      >
      <RepoCard
        id="OptimalPause"
        account="Martialcart"
        title="Optimale Pauser"
        description="Arbeidsklokke som jobbe etter deg. Estimerer mentale ytelse og hvor lang pause du trenger"
      />
      <RepoCard
        id="HylleKoder"
        account="Martialcart"
        pageUrl="https://hylle-koder.vercel.app/"
        title="Hyllekoder PostNord"
        description="Generer hyllenavn og strekkode til postnord hyller"
      />
    </section>
    </>
  )
}
