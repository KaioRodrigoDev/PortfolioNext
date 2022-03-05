import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineLinkedin
} from 'react-icons/ai'

import Link from 'next/link'

export default function Home() {
  return (
    <body>
      <div>
        <main className="main">
          <div className="NavHeader">
            <div>
              <h2 id="name1">
                Olá, meu nome é <span className="title"> Kaio Rodrigo</span>
              </h2>
              <h4>Programador Front-end Junior</h4>
              <p id="resume">
                Eu programo para desenvolver soluções, onde a experiencia do
                usuario é completamente planjada e arquitetada para a melhor
                usabilidade e aconchego
              </p>
              <p id="resume">Redes Sociais:</p>
              <div className="headerIcon">
                <a
                  href="https://www.linkedin.com/in/kaio-rodrigo-8392a421a/"
                  target="_blank"
                >
                  <span>
                    <AiOutlineInstagram className="iconSocial" />
                  </span>
                </a>
                <a href="https://github.com/KaioRodrigoDev" target="_blank">
                  <span>
                    <AiFillGithub className="iconSocial" />
                  </span>
                </a>
                <a href="https://instagram.com/kaio_dev" target="_blank">
                  <span>
                    <AiOutlineLinkedin className="iconSocial" />
                  </span>
                </a>
              </div>
              <br />
            </div>
            <img
              className="Perfil_photo"
              src="https://avatars.githubusercontent.com/u/79218424?v=4"
              width="20%"
              height="20%"
              alt="Perfil_photo"
            />
            <input id="cor" type="color" />
          </div>
          <br />
          <a
            className="btn btnPrimary"
            target="blank"
            href="https://drive.google.com/file/d/1w8z5AxvtZi-cGld526KhBsfMxeqdTRpf/view?usp=sharing"
          >
            Curriculum
          </a>
          <Link className="btn btnSecont" href="/projects">
            Projetos
          </Link>
          <hr className="linha" />
          <h2 className="ido title">Sobre mim</h2>
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
              <h3 className="title">PHP</h3>
              <br />
              <p>
                Utilizo o PHP no framework Laravel, utilizado para
                desenvolvimento Web.
              </p>
            </div>
            <div className="boxes">
              <h3 className="title">JavaScript</h3>
              <br />
              <p>
                JS é uma das três principais tecnologias da World Wide Web,
                junto com HTML e CSS
              </p>
            </div>
            <div className="boxes">
              <h3 className="title">React</h3>
              <br />
              <p>
                O React é utilizado para tanto desenvolvimento Web quanto
                Mobile. Dando assim uma grande liberdade para seu uso.
              </p>
            </div>
            <div className="boxes">
              <h3 className="title">HTML e CSS</h3>
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
