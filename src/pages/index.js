import Link from 'next/link'
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineLinkedin
} from 'react-icons/ai'
import { useState } from 'react/cjs/react.production.min'

export async function getStaticProps() {
  const data = await fetch('https://api.github.com/users/KaioRodrigoDev')
  const projects = await data.json()

  return {
    props: { projects }
  }
}

export default function Home({ projects }) {
  function Cor(cor) {
    const h2 = document.querySelectorAll('.inputColor')
    console.log(h2)
    h2.forEach(titulo => {
      titulo.style.color = cor
      titulo.style.textShadow = `0 0 0.5rem ${cor}`
      if (titulo.id == 'perfilPhoto') {
        titulo.style.boxShadow = `0 0 1rem ${cor}`
      }
    })
  }

  function hover(id) {
    const hover = document.getElementById(id)
    const input = document.getElementById('inputColor2')

    const cor = input.value
    if (cor == '#f50000') {
      const input2 = document.getElementById('inputColor')
      const cor2 = input2.value
      hover.style.backgroundColor = cor2
      hover.style.boxShadow = `0 0 0.5rem ${cor2}`
    } else {
      hover.style.backgroundColor = cor
      hover.style.boxShadow = `0 0 0.5rem ${cor}`
    }
  }
  function unhover(id) {
    const unhover = document.getElementById(id)
    const input = document.getElementById('inputColor')
    const cor = input.value
    unhover.style.backgroundColor = '#212428'
    unhover.style.boxShadow = `0 0 0rem ${cor}`
  }
  function handleClick2() {
    window.location.href = '/projetos'
  }
  function handleClick1() {
    window.location.href =
      'https://drive.google.com/file/d/1B1OPIf-LQjdHHALJwa_6wkjGjOUfh6S6/view?usp=share_link'
  }
  return (
    <body>
      <div>
        <main className="main">
          <div className="NavHeader">
            <div className="card">
              <h2 id="name1">
                Olá, meu nome é
                <span className="title inputColor"> Kaio Rodrigo</span>
              </h2>
              <h4>Programador Front-end</h4>
              <p id="resume">
                Eu programo para desenvolver soluções, onde a experiencia do
                usuario é completamente planjada e arquitetada para a melhor
                usabilidade e aconchego.
              </p>
              <div className="card">
                <p className="text-color-show">Escolha sua cor favorita!</p>
                <input
                  type="color"
                  id="inputColor2"
                  className="inputColorShow"
                  onChange={() => Cor(event.target.value)}
                  alt="inputColor"
                  defaultValue="#F50000"
                />
              </div>
              <p id="resume">Redes Sociais:</p>
              <div className="headerIcon">
                <a href="https://instagram.com/kaio_dev">
                  <span
                    onMouseOver={() => hover('Insta')}
                    onMouseOut={() => unhover('Insta')}
                    className="inputColor "
                    id="Insta"
                  >
                    <AiOutlineInstagram className="iconSocial" />
                  </span>
                </a>
                <a href="https://github.com/KaioRodrigoDev">
                  <span
                    onMouseOver={() => hover('Git')}
                    onMouseOut={() => unhover('Git')}
                    className="inputColor"
                    id="Git"
                  >
                    <AiFillGithub className="iconSocial " />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/kaio-rodrigo-8392a421a/">
                  <span
                    onMouseOver={() => hover('Linkedin')}
                    onMouseOut={() => unhover('Linkedin')}
                    className="inputColor"
                    id="Linkedin"
                  >
                    <AiOutlineLinkedin className="iconSocial" />
                  </span>
                </a>
              </div>
              <br />
            </div>

            <div className="ImageColor">
              <img
                id="perfilPhoto"
                className="Perfil_photo inputColor"
                src={projects.avatar_url}
                alt="Perfil_photo"
              />
              <p id="colorname">Mude a cor:</p>
              <input
                type="color"
                id="inputColor"
                onChange={() => Cor(event.target.value)}
                className="inputColor inputColorNone"
                alt="inputColor"
                defaultValue="#F50000"
              />
            </div>
          </div>
          <br />
          <div className="btn-container">
            <button
              onClick={handleClick1}
              onMouseOver={() => hover('cur')}
              onMouseOut={() => unhover('cur')}
              className="button"
              target="_blank"
              id="cur"
            >
              Currículo
            </button>

            <button
              onClick={handleClick2}
              onMouseOver={() => hover('project')}
              onMouseOut={() => unhover('project')}
              className="button"
              target="_blank"
              id="project"
            >
              Projetos
            </button>
          </div>

          <hr className="linha" />
          <h2 className="ido title inputColor">Sobre mim</h2>
          <br />
          <p className="bio">
            Sou desenvolvedor de web e mobile focado no front-end. Tenho 18 anos
            e estudo programação a 3 anos. Novos desafios me permitem aprender
            cada vez mais, e trabalho em grupo nunca é demais. Possuo 1 ano e
            meio de experiencia desenvolvendo sites e apps para várias empresas
            e clientes. Abaixo há um pequeno resumo sobre minhas habilidades e
            tecnologias que utilizo. Se quiser ver mais sobre minhas
            experiencias pode olhar meu{' '}
            <span>
              <a
                className="title inputColor"
                href="https://github.com/KaioRodrigoDev"
              >
                Github
              </a>
            </span>
            .
          </p>
          <br />
          <section className="card">
            <div className="boxes">
              <h3 className="title inputColor">PHP</h3>
              <br />
              <p>
                Utilizo o PHP no framework Laravel, utilizado para
                desenvolvimento Web.
              </p>
            </div>
            <div className="boxes">
              <h3 className="title inputColor">JavaScript</h3>
              <br />
              <p>
                JS pode ser utilizada em vários frameworks, os que mais utilizo
                são Next, ReactJs, React Native.
              </p>
            </div>
            <div className="boxes">
              <h3 className="title inputColor">React</h3>
              <br />
              <p>
                O React é utilizado tanto para desenvolvimento Web quanto
                Mobile. Dando assim uma grande liberdade para seu uso.
              </p>
            </div>
            <div className="boxes">
              <h3 className="title inputColor">HTML e CSS</h3>
              <br />
              <p>
                HTML e CSS são a base para desenvolvimento web, no qual sendo
                necessário para aprender a base de outras linguagens.
              </p>
            </div>
          </section>
        </main>
      </div>
    </body>
  )
}
