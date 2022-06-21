import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAllProjects } from '../../lib/dato'
export default function Project() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProject = getAllProjects().then(projects => {
      setProjects(projects)
      console.log(projects)
    })
  }, [])
  return (
    <>
      <main className="main">
        <h1 className="title titleProjects">Projetos</h1>
        <p className="titleProjects">Clique nos projetos para ver detalhes</p>

        <div className="projectsList ">
          {projects?.map(project => (
            <div className="projects card-project" key={project?.id}>
              <Link
                className="projectTitle"
                href={`${project?.link}`}
                target="_blank"
              >
                <a className="projectTitle">{project?.title}</a>
              </Link>
              <p className="projectLang card-lang">{project?.language}</p>
              <p className="projectDesc">{project?.description}</p>
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
