import Link from 'next/link'

export default function Aside() {
  return (
    <header className="tabBar">
      <div>
        <div className="headerBar">
          <p>Foto</p>
          <h1 className="name">Kaio Rodrigo</h1>
          <div className="headerIcon">
            <p>Icones</p>
          </div>
        </div>
        <div class="links">
          <p>Sobre</p>

          <p>Projetos</p>

          <p>Contato</p>
        </div>
      </div>
    </header>
  )
}
