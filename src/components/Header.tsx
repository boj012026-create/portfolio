interface HeaderProp {
  title: string,
  fontSize: number
}
export default function Header({title, fontSize}: HeaderProp) {
    
    const api = "https://readme-typing-svg.demolab.com"
    const font = "Bitcount+Single"
    const size = fontSize
    const pause = 3000
    const color = "000AF7"
    const center = "true"
    const vCenter = "true"
    const width = 435
    const line = title.replaceAll(' ', '+')
    const alt = `Header Typing out ${title}`

    const imgUri = `${api}?font=${font}&size=i${size}&pause=${pause}&color=${color}center=${center}&vCenter=${vCenter}&width=${width}&lines=${line}`

    return (
        <>
        <figure className="flex justify-center
        bg-[var(--background-color)]
        mb-6
        sm:mb-12
        ">
          <img  src={imgUri} alt={alt}/>
        </figure>
        </>
    )
}
