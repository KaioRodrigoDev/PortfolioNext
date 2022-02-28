import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <body>
      <div>
        <Head>
          <h1>Create Next App</h1>
        </Head>

        <main className="main">
          <h1>Kaio Rodrigo</h1>
          <h3>Programador Web e Mobile</h3>
          <br />
          <p id="resume">
            Sou desenvolvedor de web e mobile focado no front-end. Tenho 18 anos
            e estudo programação a 3 anos. Novos desafios me permitem aprender
            cada vez mais, e trabalho em grupo nunca é demais.
          </p>
          <br />
          <a
            class="btn btnPrimary"
            target="blank"
            href="https://drive.google.com/file/d/1w8z5AxvtZi-cGld526KhBsfMxeqdTRpf/view?usp=sharing"
          >
            Curriculum
          </a>
          <Link class="btn btnSecont" href="/projects" target="blank">
            Projetos
          </Link>

          <hr class="linha" />
          <h2 class="ido">Sobre mim</h2>
          <br />
          <p>
            Possuo 1 ano de experiencia desenvolvendo sites e apps para várias
            empresas e clientes. Abaixo há um pequeno resumo sobre minhas
            habilidades e tecnologias que eu utilizo. Se quiser ver mais sobre
            minhas experiencias olha meu Github.
          </p>
          <br />
          <section>
            <div class="boxes">
              <span class="fab fa-php tec"></span>
              <h3>PHP</h3>
              <br />
              <p>
                Utilizo o PHP no framework Laravel, utilizado para
                desenvolvimento Web.
              </p>
            </div>
            <div class="boxes">
              <span class="fab fa-js tec"></span>
              <h3>JavaScript</h3>
              <br />
              <p>
                JS é uma das três principais tecnologias da World Wide Web,
                junto com HTML e CSS
              </p>
            </div>
            <div class="boxes">
              <span class="fab fa-react tec"></span>
              <h3>React</h3>
              <br />
              <p>
                O React é utilizado para tanto desenvolvimento Web quanto
                Mobile. Dando assim uma grande liberdade para seu uso.
              </p>
            </div>
            <div class="boxes">
              <span class="fab fa-html5 tec"></span>
              <span class="fab fa-css3 tec"></span>
              <h3>HTML e CSS</h3>
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
