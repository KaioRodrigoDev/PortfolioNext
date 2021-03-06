import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getProject } from '../../lib/dato'

export default function Project() {
  const { query } = useRouter()
  const [project, setProject] = useState([])

  useEffect(() => {
    const prjc = getProject(query.id).then(res => {
      setProject(res)
      console.log(res)
    })
  }, [])

  return (
    <>
      <main className="main project">
        <div className="imageProject">
          <img src={project?.photo?.[0]?.url} className="Single-image" />
        </div>
        <div className="Single-div">
          <h1 className="Single-title">{project?.title}</h1>
          <div>
            {project?.lang?.map(item => (
              <span
                className="projectLang card-lang Single-lang "
                key={item.name}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="Single-Description">
            <p>{project?.description}</p>
          </div>
          <div>
            {project?.funcionalidade?.map(item => (
              <p className="Single-Func" key={item.name}>
                • {item.name}
              </p>
            ))}
          </div>
          <a href={project?.link} target="_blank" rel="noreferrer">
            <button className="Single-button">Acessar Projeto</button>
          </a>
        </div>
      </main>
    </>
  )
}
