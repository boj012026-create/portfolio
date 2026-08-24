export default function RepoCard({img: string, link: string}) {
  return(
   <>
    <a href={link} target="_blank"> 
      <img src={img} 
      className="rounded-2xl"/>
    </a>
   </>
  );
}
