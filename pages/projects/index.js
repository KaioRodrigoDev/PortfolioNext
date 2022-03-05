export async function getStaticProps() {
  const data = await fetch('https://api.github.com/users/KaioRodrigoDev/repos')
  const projects = await data.json()

  return {
    props: { projects }
  }
}
import Link from 'next/link'
export default function Project({ projects }) {
  return (
    <>
      <main className="main">
        <h1 className="title titleProjects">Projetos</h1>
        <div className="projectsList">
          {projects.map(project => (
            <div className="projects" key={project.id}>
              <Link
                className="projectTitle"
                href={project.html_url}
                target="_blank"
              >
                <p className="projectTitle">{project.name}</p>
              </Link>
              <p className="projectLang">{project.language}</p>
              <p className="projectDesc">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="btnBack">
          <Link href="/">
            <a className="btnPrimary">Voltar</a>
          </Link>
        </div>
      </main>
    </>
  )
}
