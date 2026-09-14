function getJson(url: string) {
  const options: any = {
    method: "GET",
    headers: {
      "Accept": "application/vnd.github+json",
      "User-agent": "Portofolio SSG",
    }
  }

  return fetch(url, options)
    .then(response => {
      if(!response.ok) {
	throw new Error(`ERROR:${response.status}`)
      }
      return response.json()
    })
}

const ghAPI: any = {
  url: "https://api.github.com",
  user: "/boj012026-create",
  repos: async function() {
    return await getJson(`${this.url}/users${this.user}/repos`)
  },
  repo: async function(repoName: string) {
    return await getJson(`${this.url}/users${this.user}/${repoName}`)
  }
};

export default ghAPI;
