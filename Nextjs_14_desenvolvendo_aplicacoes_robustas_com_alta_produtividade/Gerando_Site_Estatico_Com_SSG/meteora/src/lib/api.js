import { produtos } from "../mocks/produtos";
import { categorias } from "../mocks/categorias";

export function getTodosProdutos() {
  return produtos;
}

export function getProdutoPorSlug(slug) {
  // Encontra o produto pelo slug (neste caso, o ID).
  const produto = produtos.find((p) => p.id.toString() === slug);
  return produto;
}

export function getCategorias() {
  return categorias;
}
