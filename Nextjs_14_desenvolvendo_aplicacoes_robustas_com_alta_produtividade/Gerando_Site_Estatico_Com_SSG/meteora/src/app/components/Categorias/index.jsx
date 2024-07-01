import styles from "./categorias.module.css";
import Image from "next/image";

export const Categorias = ({ categorias }) => {
  return (
    <section className={styles.categorias}>
      <h2>Busque por categoria:</h2>
      <div className={styles.container}>
        {categorias.map((categoria) => (
          <div key={categoria.nome} className={styles.card}>
            <div className={styles.imagemContainer}>
              <Image
                width={130}
                height={157}
                src={categoria.imageSrc}
                alt={categoria.name}
                style={{
                  objectFit: "contain",
                }}
                quality={100}
              />
            </div>
            <p className={styles.title}>{categoria.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
