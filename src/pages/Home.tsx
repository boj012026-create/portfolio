import BulletPoint from '../components/BulletPoint'

export default function Home() {
  return (
    <>
      <img src="https://readme-typing-svg.demolab.com?font=Bitcount+Single&size=26&pause=1000&color=000AF7&center=true&vCenter=true&width=435&lines=Junior+Full-Stack+Developer" alt="Typing SVG"/>
<section className="bg-[var(--surface-color)] gap-6 flex flex-col justify-center sm:flex-row-reverse">
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
    fullstack-course (Jobloop&gt;Kodehodet)
  </BulletPoint>
  <BulletPoint icon="👔">
     My background combines theoretical knowledge with hands-on experience in industry-relevant technology. My strategy is to find the ideal balance between progress and quality, using best-practice conventions like TDD, DRY, SOLID, and Commitizen to write clean code.
  </BulletPoint>
  <BulletPoint icon="👥">
     With over 15 years of retail experience, customer service and team leadership have trained me to stay calm under pressure, communicate clearly, and resolve unpredictable challenges in real time.
  </BulletPoint>
  <BulletPoint icon="✨">
     I am looking for an internship or my first permanent role within an engaged development team in and around Bergen. I am particularly passionate about AI, design, user experience, and optimization.
  </BulletPoint>
  <BulletPoint icon="💬">
    Feel free to reach out for an informal chat, either virtually or in person!
  </BulletPoint>
</article>
</section>
</>
  )
}
