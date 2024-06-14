# Curso - Docker: criando e gerenciando containers

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
| 1 | Conhecendo o Docker | ✔️ |
| 2 | Os primeiros comandos | ✔️ |
| 3 | Criando e compreendendo imagens | ✔️ |
| 4 | Persistindo dados | ✔️ |
| 5 | Comunicação através de redes | ⚫ |
| 6 | Coordenando containers  | ⚫ |

---

## Aprendizados

### Aula 01 - Conhecendo o Docker
<ul>
  <li>Máquinas virtuais possuem camadas adicionais de virtualização em relação a um container;</li>
  <li>Containers funcionam como processos no host;</li>
  <li>Containers atingem isolamento através de namespaces;</li>
  <li>Os recursos dos containers são gerenciados através de cgroups.</li>
</ul>

### Aula 02 - Os primeiros comandos
<ul>
  <li>O Docker Hub é um grande repositório de imagens que podemos utilizar;</li>
  <li>A base dos containers são as imagens;</li>
  <li>Como utilizar comandos acerca do ciclo de vida dos containers, como: docker start, para iniciar um container que esteja parado; docker stop, para parar um que esteja rodando; docker pause, para pausar um container e docker unpause para iniciar um container pausado; -Conseguimos mapear portas de um container com as flags -p e -P.</li>
</ul>

### Aula 03 - Criando e compreendendo imagens
<ul>
  <li>Imagens são imutáveis, ou seja, depois de baixadas, múltiplos containers conseguirão reutilizar a mesma imagem;</li>
  <li>Imagens são compostas por uma ou mais camadas. Dessa forma, diferentes imagens são capazes de reutilizar uma ou mais camadas em comum entre si;</li>
  <li>Podemos criar nossas imagens através de Dockerfiles e do comando docker build;</li>
  <li>Para subir uma imagem no Docker Hub, utilizamos o comando docker push.</li>
</ul>

### Aula 04 - Persistindo dados
<ul>
  <li>Quando containers são removidos, nossos dados são perdidos;</li>
  <li>Podemos persistir dados em definitivo através de volumes e bind mounts;</li>
  <li>Bind mounts dependem da estrutura de pastas do host;</li>
  <li>Volumes são gerenciados pelo Docker;</li>
  <li>Tmpfs armazenam dados em memória volátil.</li>
</ul>

### Aula 05 - Comunicação através de redes
<ul>
  <li>O docker dispõe por padrão de três redes: bridge, host e none;</li>
  <li>A rede bridge é usada para comunicar containers em um mesmo host;</li>
  <li>Redes bridges criadas manualmente permitem comunicação via hostname;</li>
  <li>A rede host remove o isolamento de rede entre o container e o host;</li>
  <li>A rede none remove a interface de rede do container;</li>
  <li>Podemos criar redes com o comando docker network create.</li>
</ul>

### Aula 06 - Coordenando containers 
<ul>
  <li></li>
</ul>

---

<!-- ## 🎯 Projeto desenvolvido
Este é o screenshot do projeto que foi desenvolvido durante o curso:

<p align="center">
  <img alt="Miniatura da imagem do projeto"src="../../.github/thumbs/preview.jpg">
</p> -->