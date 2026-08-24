export default function RepoCard({img, link}: any) {
  return(
   <>
    <a href={link} target="_blank"> 
      <img src={img} 
      className="rounded-2xl"/>
    </a>
   </>
  );
}
