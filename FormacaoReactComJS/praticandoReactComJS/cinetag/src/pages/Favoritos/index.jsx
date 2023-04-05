import styles from './Favoritos.module.css';
import Banner from '@/components/Banner';
import Titulo from '@/components/Titulo';
import Card from '@/components/Card';
import { useFavoritoContext } from '@/contextos/favoritos';

function Favoritos() {
  const {favorito} = useFavoritoContext();
  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map(fav => (
          <Card id={fav.id} {...fav} />
        ) )}
      </section>
    </>
  );
}

export default Favoritos;