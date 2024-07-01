"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Produto = ({ produto }) => {
  const [selectedColor, setSelectedColor] = useState(produto.cores[0]?.nome);
  const [selectedSize, setSelectedSize] = useState(produto?.tamanho ?? "");

  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Detalhes de {produto.nome}</h2>
      <div className={styles.divider}></div>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            width={350}
            height={422}
            src={produto.imageSrc}
            alt={produto.nome}
            className={styles.productImage}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{produto.nome}</h1>
          <p className={styles.description}>{produto.descricao}</p>
          <hr className={styles.divider} />
          <p className={styles.price}>{produto.preco}</p>
          <div className={styles.options}>
            <div className={styles.colors}>
              {produto.cores.map((cor) => (
                <button
                  key={cor.nome}
                  style={{ backgroundColor: cor.hexa }}
                  onClick={() => setSelectedColor(cor.nome)}
                  aria-label={cor.nome}
                  className={`${styles.colorOption} ${
                    selectedColor === cor.nome && styles.selectedColor
                  }`}
                />
              ))}
            </div>
            {produto?.tamanho?.length > 0 && (
              <div className={styles.sizes}>
                {produto?.tamanho.map((tamanho) => (
                  <button
                    key={tamanho}
                    onClick={() => setSelectedSize(tamanho)}
                    className={`${styles.sizeOption} ${
                      selectedSize === tamanho && styles.selectedSize
                    }`}
                  >
                    {tamanho}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className={styles.addToCart}>Adicionar à sacola</button>
        </div>
      </div>
    </section>
  );
};

export default Produto;
