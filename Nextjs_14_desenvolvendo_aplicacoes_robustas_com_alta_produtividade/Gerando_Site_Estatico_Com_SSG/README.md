# Curso de Next.js: gerando site estático com SSG

## Aulas
<p>
  ✔️ concluded &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  ⚫ not started &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔵 in progress &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔶 paused &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔴 abandoned 
</p>

| Aula | Titulo | Status |
| --- | --- | --- |
| 1 | Criando Api Router e fazendo fetch | ✔️ |
| 2 | API Router para detalhes do produto | ✔️ |
| 3 | A caminho do SSG | ✔️ |
| 4 | Testando arquivos estáticos | ✔️ |
| 5 | Fazendo o deploy | ✔️ |

---

## Aprendizados

### Aula 01 - Criando Api Router e fazendo fetch
<ul>
  <li>Estruturar um projeto em NextJS 14;</li>
  <li>Executar, renderizar e iniciar uma aplicação com Node 18.17.1+, usando yarn;</li>
  <li>Usar o SSG para produtos e SSR para produto/slug demonstrado;</li>
  <li>Criar um API Router no Next.js para dinamizar o e-commerce.</li>
</ul>

### Aula 02 - API Router para detalhes do produto
<ul>
  <li>Criar API SSR para detalhes do produto: demonstramos a criação e transformação de uma API de detalhes de produto em SSR no Next.js, mostrando práticas de SSR em APIs após yarn build;</li>
  <li>Migrar para serviço externo: migramos o endpoint de produtos para o n:point, incluindo transferência de JSON, remoção do API Router e atualização do endpoint;</li>
  <li>Atualização da página de produto: atualizamos a página de produto para usar um endpoint externo, assegurando dados atualizados de uma fonte externa. O objetivo principalmente é trabalhar na estratégia de utilizar uma fonte de dados externa para alimentar nossa aplicação e facilitar a geração estática do site.</li>
</ul>

### Aula 03 - A caminho do SSG
<ul>
  <li>Aplicar o generateStaticParams para que seja possível gerar páginas estáticas para cada rota da dinâmica de detalhe do produto;</li>
  <li>O build gera o site estático em .Next/static, onde esses arquivos não são facilmente mapeados para os componentes e páginas individuais, pois são otimizados, divididos em chunks (fragmentos) e minificados;</li>
  <li>O "output export" no next.config.js, muda a forma de geração de como o Next.js deve tratar a geração e a disposição dos arquivos estáticos, especialmente para rotas dinâmicas, onde exporta os arquivos estáticos de uma forma mais clássica, onde podemos servir os sites em qualquer servidor web de forma simples.</li>
</ul>

### Aula 04 - Testando arquivos estáticos
<ul>
  <li>Configurar o assetPrefix para fins didáticos e trailingSlash no Next.js, onde entendemos seu impacto na navegação e estrutura de URLs;</li>
  <li>A importância do loader customizado de imagens para garantir a renderização correta das imagens em sites estáticos, mantendo a consistência das URLs com a resposta do serviço.</li>
</ul>

### Aula 05 - Fazendo o deploy
<ul>
  <li>Usar o http-server para corrigir problemas de carregamento de assets estáticos, substituindo o Live Server, garantindo que todos os recursos sejam carregados corretamente;</li>
  <li>Reforçar um web server serve arquivos estáticos e a importância do protocolo HTTP nesse processo, enfatizando a correta configuração do servidor para otimizar a entrega;</li>
  <li>Fazer deploy na Vercel, conectando o GitHub à plataforma para hospedar e disponibilizar sites estáticos na internet, com foco em simplicidade e eficiência.</li>
</ul>

---
