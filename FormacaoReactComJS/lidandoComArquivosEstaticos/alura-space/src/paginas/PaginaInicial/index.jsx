import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";

import styles from './PaginaInicial.module.scss';
import Banner from '../../componentes/Banner';

export default function PaginaInicial() {
  return(
    <>
      <Cabecalho />
      <main className={styles.main}>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
      </main>
    </>
  );
}