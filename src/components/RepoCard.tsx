export default function RepoCard({id, title, description, img, homepage, github}: any) {
  return(
   <article id={id}
      className="flex flex-col">
    <h3 className="text-4xl">{title}</h3>
    <p>{description}</p>
    <a href={homepage} target="_blank"
      className="hover:underline">
      <img src={img}
        alt={`screenshot image of ${title}'s webpage link`}
      className="rounded-2xl"/>
      {homepage}
    </a>
    <a href={github} target="_blank"
      className="hover:underline"
    >Github page</a>
   </article>
  );
}
