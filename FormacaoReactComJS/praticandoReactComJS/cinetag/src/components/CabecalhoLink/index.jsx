import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({children, url}) {
  return (
    <Link className={styles.link} to={url}>
      {children}
    </Link>
  );
}

export default CabecalhoLink;