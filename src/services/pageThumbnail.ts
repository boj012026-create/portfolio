import puppeteer from 'puppeteer';

export default async function pageThumbnail(repos: Array<any>) {
  console.log('Starting Browser');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const repo of repos) {
    try {
      if(repo.homepage == null) { continue }; 
      console.log(repo.homepage);
      await page.goto(repo.homepage);
      await page.screenshot({
	path: `./src/assets/img/thumb/${repo?.name}.jpg`,
	type: 'jpeg',
	quality: 80
      });
    } catch (error: unknown){
      if (error instanceof Error) {
	 console.error('Screenshot failure', error); 
      }
    }
  }
  await browser.close();
}
