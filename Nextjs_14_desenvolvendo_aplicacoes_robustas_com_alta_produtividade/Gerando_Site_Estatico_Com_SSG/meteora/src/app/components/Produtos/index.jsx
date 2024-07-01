"use client";

import styles from "./produtos.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Produtos = ({ produtos }) => {
  const router = useRouter();

  if (!produtos) {
    return <div>Carregando produtos...</div>;
  }

  return (
    <section className={styles.produtos}>
      <h2>Produtos que estão bombando!</h2>
      <div className={styles.container}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <figure>
              <Image
                width={350}
                height={422}
                src={produto.imageSrc}
                alt={produto.name}
                style={{
                  objectFit: "cover",
                }}
                className={styles.imagem}
              />
            </figure>
            <section className={styles.info}>
              <p className={styles.titulo}>{produto.name}</p>
              <div className={styles.descricao}>{produto.descricao}</div>
              <div className={styles.preco}>{produto.preco}</div>
              <button
                className={styles.botao}
                onClick={() => router.push(`/produto/${produto.id}`)}
              >
                Ver mais
              </button>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
};
