export async function getStaticProps() {
  const data = await fetch('https://api.github.com/users/KaioRodrigoDev/repos')
  const projects = await data.json()

  return {
    props: { projects }
  }
}

export default function Project({ projects }) {
  return (
    <>
      <main className="main">
        <h1 className="title titleProjects">Projetos</h1>
        <div className="projectsList">
          {projects.map(project => (
            <div className="projects">
              <a
                className="projectTitle"
                href={project.html_url}
                target="_blank"
              >
                {project.name}
              </a>
              <p className="projectLang">{project.language}</p>
              <p className="projectDesc">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="btnBack">
          <a className="btnPrimary" href="/">
            Voltar
          </a>
        </div>
      </main>
    </>
  )
}
