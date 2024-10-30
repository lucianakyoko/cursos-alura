# Anotações do curso

---

### Pirâmide de testes

1. E2E - end to end
  - Ponta a ponta, alto nível
  - testes longos e completos
  - análise de todos os móduls e stacks. Ex. front-end/ banco de dados/ micro serviços
2. Integração
  - Testes de rotas e requisições
  - comunicação dos módulos
  - não analisa todo o fluxo da aplicação
3. Unitários
  - Testes curtos e isolados
  - análise de funções ou métodos
  - não garante uma integração de modulos

Mais integração, maior consumo de recursos e mais complexo e devagar. Quanto mais isolado, maior o volume detestes e mais simples e rápido

---

### Cultura de testes
Ter uma cultura de testes significa criar um ambiente onde a equipe de desenvolvimento tenha a capacidade de implementar e gerir os testes, entendendo como esses testes afetam a qualidade do código e permitindo que problemas que eventualmente passem desse ambiente de testes sejam resolvidos. No geral, podemos conceituar como utilizar boas práticas de testes dentro da nossa companhia, organização ou projeto.

Fatores fundamentais:
- Qualidade
- Confiança
- Tempo

---

### Fases do teste
1. Análise de requisitos
  vamos identificar quais funcionalidades estarão presentes no projeto e selecionar quais testes e quais tipos de teste vamos implementar para poder atingir esses objetivos
2. Plano de teste
  o time conhecido como QA, que é o Quality Assurance, ou os analistas de qualidade, elaboram o plano de teste, contendo as ferramentas que serão utilizadas, dividindo as responsabilidades de quem vai criar os testes e estimando no geral qual será o tempo, a complexidade e os gastos de recursos que terá naquele projeto
3. Caso de teste
  são detalhados os testes em si: quais são as condições, os dados de entrada, os comportamentos esperados, dados de saída, quantidade de testes. Todo esse mapeamento é feito nos casos de teste
4. Ambiente de teste
  são escolhidos onde e como esses testes serão executados. É feito o pipeline, o fluxo de como é produzido pela equipe de desenvolvimento e como aquilo vai sendo testado, ferramentas de versionamento e tudo que será utilizado, onde as alterações e implementações que são feitas pelo time de desenvolvimento vão sendo testadas e validadas para poder seguir no projeto.
5. Implementação
  onde é feita a documentação daqueles resultados que foram obtidos com os testes, problemas que aconteceram dentro dos processos, estabelecendo como podem ter melhorias para os próximos ciclos e toda essa parte que vai lidar diretamente com a implementação, tanto do código em si do projeto quanto da implementação dos testes e tudo que aconteceu em torno disso.

---
