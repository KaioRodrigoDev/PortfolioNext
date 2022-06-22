const API_URL = 'https://graphql.datocms.com/'
const API_TOKEN = 'ee61f7fe026233033dc9ed43092667'

async function AXIOSCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch CMS API')
  }

  return json.data
}

export async function getAllProjects() {
  const data = await AXIOSCmsAPI(`
  {
  allProjetos {
    id
    lang {
      name
    }
    title
    description
    photo {
      url
    }
  }
}
  `)

  return data.allProjetos
}

export async function getProject(id) {
  const data = await AXIOSCmsAPI(`
  
  {
    projeto(filter: {id: {in: "${id}"}}) {
      id
      link
      title
      description
      lang {
        name
      }
      photo {
        url
      }
      video {
        url
      }
      funcionalidade {
        name
      }
    }
  }
  `)

  return data.projeto
}
