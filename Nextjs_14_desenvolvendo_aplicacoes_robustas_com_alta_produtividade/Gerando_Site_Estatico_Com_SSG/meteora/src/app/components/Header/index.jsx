import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import logo from "./logo.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src={logo}
            alt="Meteora logo"
            width={100}
            height={22}
            priority
          />
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Nossas Lojas</li>
          <li>Novidades</li>
          <li>Promoções</li>
        </ul>
      </nav>
      <div className={styles.search}>
        <form action="">
          <input type="text" placeholder="Digite o produto" />
          <button>Buscar</button>
        </form>
      </div>
    </header>
  );
};
