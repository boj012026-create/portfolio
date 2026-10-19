import thumbImg from '../scripts/thumbImg.ts'

export default function RepoCard({id, title, description}: any) {
  const imgUrl = thumbImg[`${id}.jpg`]
  const demoUrl = `https://boj012026-create.github.io/${id}/`
  const gitHubUrl = `https://github.com/boj012026-create/${id}`
  return(
   <article id={id}
      className="flex flex-col">
      <div className="flex items-end">
        <h3 className="text-4xl">{title}</h3>
        <a href={gitHubUrl} target="_blank"
          className="hover:underline"
        >Github page</a>
      </div>
    <p>{description}</p>
    <a href={demoUrl} target="_blank"
      className="hover:underline">
      <img src={imgUrl}
        alt={`screenshot image of ${title}'s webpage link`}
      className=""/>
    </a>
   </article>
  );
}
