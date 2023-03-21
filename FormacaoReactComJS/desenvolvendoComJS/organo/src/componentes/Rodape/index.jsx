import './Rodape.css';

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="icone Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="Ícone Twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="icone instagram" />
            </a>
          </li>
        </ul>
      </section>
      <div>
        <section>
          <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
          <p>
            Desenvolvido por Alura.
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Rodape;