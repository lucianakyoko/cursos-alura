import home from '../../assets/icones/home-ativo.png';
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png';
import maisVitidas from '../../assets/icones/mais-vistas-inativo.png';
import novas from '../../assets/icones/novas-inativo.png';
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png';

import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVitidas} alt="" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
