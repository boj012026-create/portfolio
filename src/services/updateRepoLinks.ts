import fs from 'node:fs/promises'
import ghAPI from './ghAPI.ts';

const fileName: string = "repoStats"
const path: string = "./src/assets/json"
const filePath: string = `${path}/${fileName}.json`

async function updateRepoLinks() {
  try {
    const data = await ghAPI.repos()
    const content = JSON.stringify(data, null, 2)
    await fs.writeFile(filePath, content, { flag: 'w+' })
  }
  catch (error) {
    console.error(`Error updating ${filePath}`, error)  
  }
}

updateRepoLinks()
