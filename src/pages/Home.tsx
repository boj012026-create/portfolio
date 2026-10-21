import BulletPoint from '../components/BulletPoint'

export default function Home() {
  return (
    <>
      <img src="https://readme-typing-svg.demolab.com?font=Bitcount+Single&size=26&pause=1000&color=000AF7&center=true&vCenter=true&width=435&lines=Junior+Full-Stack+Developer" alt="Typing SVG"/>
      
<section className="bg-[var(--surface-color)]
p-5 gap-6 flex flex-col items-start justify-center w-fit
lg:flex-row-reverse">
<figure>
    <img
      src="/profile-img.jpg"
      alt="profile image of jan"
      className="
        rounded-2xl
        aspect-3/4
        lg:max-w-80
      "
    />
</figure>
<article className="flex flex-col gap-3
lg:max-w-120">
  <BulletPoint icon="📚">
bachelor i datateknologi (UiB)
  </BulletPoint>
  <BulletPoint icon="🚀">
    fullstack-kurs (Jobloop&gt;Kodehodet)
  </BulletPoint>
  <BulletPoint icon="👔">
Min bakgrunn kombinerer teoretisk kunnskap med praktisk erfaring innen bransjerelevant teknologi. Min strategi er å finne den ideelle balansen mellom fremdrift og kvalitet. Jeg bruker beste praksis og konvensjoner som TDD, DRY, SOLID og Commitizen for å skrive ren og vedlikeholdbar kode.
  </BulletPoint>
  <BulletPoint icon="👥">
Med over 15 års erfaring fra detaljhandelen har kundeservice og teamledelse lært meg å holde hodet kaldt under press. Jeg kommuniserer tydelig og løser uforutsette utfordringer i sanntid.
  </BulletPoint>
  <BulletPoint icon="✨">
Jeg søker nå en praksisplass eller min første faste stilling i et engasjert utviklerteam i eller rundt Bergen. Jeg brenner spesielt for kunstig intelligens, design, brukeropplevelse (UX) og optimalisering.
  </BulletPoint>
  <BulletPoint icon="💬">
Ta gjerne kontakt for en uformell prat, enten digitalt eller i Bergen!
  </BulletPoint>
</article>
</section>
</>
  )
}
