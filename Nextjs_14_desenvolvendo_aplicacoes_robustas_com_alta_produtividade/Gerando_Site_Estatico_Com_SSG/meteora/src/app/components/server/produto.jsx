import { getProdutoPorSlug } from "@/lib/api";

export const DetalheDoProduto = async ({ slug }) => {
  const produto = await getProdutoPorSlug(slug);

  return (
    <section>
      <h1>{produto.name}</h1>
      <p>{produto.descricao}</p>
      <p>{produto.preco}</p>
    </section>
  );
};
