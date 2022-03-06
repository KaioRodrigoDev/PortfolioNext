import Link from 'next/link'
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineLinkedin
} from 'react-icons/ai'

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
    const input = document.getElementById('inputColor')
    const cor = input.value
    hover.style.backgroundColor = cor
    hover.style.boxShadow = `0 0 0.5rem ${cor}`
  }
  function unhover(id) {
    const unhover = document.getElementById(id)
    const input = document.getElementById('inputColor')
    const cor = input.value
    unhover.style.backgroundColor = '#212428'
    unhover.style.boxShadow = `0 0 0rem ${cor}`
  }
  return (
    <body>
      <div>
        <main className="main">
          <div className="NavHeader">
            <div>
              <h2 id="name1">
                Olá, meu nome é{' '}
                <span className="title inputColor"> Kaio Rodrigo</span>
              </h2>
              <h4>Programador Front-end Junior</h4>
              <p id="resume">
                Eu programo para desenvolver soluções, onde a experiencia do
                usuario é completamente planjada e arquitetada para a melhor
                usabilidade e aconchego
              </p>
              <p id="resume">Redes Sociais:</p>
              <div className="headerIcon">
                <a href="https://www.linkedin.com/in/kaio-rodrigo-8392a421a/">
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
                <a href="https://instagram.com/kaio_dev">
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
                width="20%"
                height="20%"
                alt="Perfil_photo"
              />

              <input
                type="color"
                id="inputColor"
                onChange={() => Cor(event.target.value)}
                className="inputColor"
                alt="inputColor"
              />
            </div>
          </div>
          <br />
          <a
            className="btn btnPrimary"
            onMouseOver={() => hover('cur')}
            onMouseOut={() => unhover('cur')}
            target="blank"
            href="https://drive.google.com/file/d/1w8z5AxvtZi-cGld526KhBsfMxeqdTRpf/view?usp=sharing"
            id="cur"
          >
            Curriculum
          </a>
          <Link href="/projects">
            <a
              onMouseOver={() => hover('project')}
              onMouseOut={() => unhover('project')}
              className="btn btnSecont"
              id="project"
            >
              Projetos
            </a>
          </Link>
          <hr className="linha" />
          <h2 className="ido title inputColor">Sobre mim</h2>
          <br />
          <p>
            Sou desenvolvedor de web e mobile focado no front-end. Tenho 18 anos
            e estudo programação a 3 anos. Novos desafios me permitem aprender
            cada vez mais, e trabalho em grupo nunca é demais.
          </p>
          <p>
            Possuo 1 ano de experiencia desenvolvendo sites e apps para várias
            empresas e clientes. Abaixo há um pequeno resumo sobre minhas
            habilidades e tecnologias que eu utilizo. Se quiser ver mais sobre
            minhas experiencias olha meu Github.
          </p>
          <br />
          <section>
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
                JS é uma das três principais tecnologias da World Wide Web,
                junto com HTML e CSS
              </p>
            </div>
            <div className="boxes">
              <h3 className="title inputColor">React</h3>
              <br />
              <p>
                O React é utilizado para tanto desenvolvimento Web quanto
                Mobile. Dando assim uma grande liberdade para seu uso.
              </p>
            </div>
            <div className="boxes">
              <h3 className="title inputColor">HTML e CSS</h3>
              <br />
              <p>
                HTML e CSS são a base para desenvolvimento web, no qual sendo
                necessario para aprender a base para outras linguagens.
              </p>
            </div>
          </section>
        </main>
      </div>
    </body>
  )
}
