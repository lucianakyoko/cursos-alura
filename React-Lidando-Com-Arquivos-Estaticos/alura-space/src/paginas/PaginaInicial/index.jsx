import Cabecalho from "../../componentes/Cabecalho";
import Menu from '../../componentes/Menu';
import banner from '../../assets/banner.png';

import styles from './PaginaInicial.module.scss';

function PaginaInicial() {
  return (
    <>
      <Cabecalho/>

      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>Galeria mais completa do espaço</h1>
            <img src={banner} alt="Imagem do planeta Terra vista do espaço" />
          </div>

        </section>
      </main>
    </>
  );
}

export default PaginaInicial;