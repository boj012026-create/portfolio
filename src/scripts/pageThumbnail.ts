import puppeteer from 'puppeteer';
import sharp from 'sharp'

export default async function pageThumbnail(repos: Array<any>) {
  console.log('Starting Browser');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport( {width: 1080, height: 1024})

  for (const repo of repos) {
    try {
      if(repo.homepage == null) { continue }; 
      console.log(repo.homepage);
      await page.goto(repo.homepage, {
	waitUntil: 'networkidle0'
      });
     const imageBuffer = await page.screenshot({
	//path: `./src/assets/img/thumb/${repo?.name}.png`,
	type: 'png',
	//quality: 80,
	omitBackground: true
      });
      await sharp(imageBuffer)
	.trim()
	.flatten({ background: '#ffffff'})
	.jpeg({quality: 85})
	.toFile(`./src/assets/img/thumb/${repo?.name}.jpg`)
    } catch (error: unknown){
      if (error instanceof Error) {
	 console.error('Screenshot failure', error); 
      }
    }
  }
  await browser.close();
}
