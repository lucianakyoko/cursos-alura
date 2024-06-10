# Anotações Curso - Docker: criando e gerenciando containers

---

### Máquinas virtuais
Existe uma solução já bem difundida, que não é recente e ajuda a resolver esses problemas: as máquinas virtuais, onde teríamos o hardware bem definido; o sistema operacional, seja ele Windows, Linux, Mac ou outro; e uma camada de hypervisor, que fará um meio de campo para virtualizar um novo sistema operacional.

Esse sistema pode ser um Windows, um Linux, um Mac, rodando dentro de outro sistema, mas graças a essa camada de hypervisor, teríamos uma camada de isolamento desse sistema operacional original. Assim, conseguiríamos instalar as nossas dependências e aplicações de maneira isolada, porque cada uma delas tem o seu respectivo sistema operacional.

Essa solução resolve esses problemas iniciais, mas a pergunta que fica nesse momento é a seguinte: é realmente necessário fazer isso?

Queremos executar as nossas aplicações, como vimos, de maneira isolada, ter um controle de recursos, e ter um controle de versionamento bem definido. Então, essa camada de hypervisor é realmente necessária? Nessas situações, precisamos sempre virtualizar um sistema operacional? Pode ser que sim, pode ser que não, mas no caso que vamos abordar durante este curso, é a utilização de **containers**.

No caso do uso de containers, não temos a camada de sistema operacional virtualizado, nem a de hypervisor, mas sim a camada diretamente do container rodando o sistema operacional, e mesmo assim, de forma isolada. Cada aplicação está isolada entre si e também isolada do sistema operacional original.

---

### Como os containers funcionam?:
O container funciona da seguinte maneira: dentro de um sistema operacional, temos vários containers, isto é, diversas aplicações sendo executadas. No entanto, eles funcionarão diretamente como processos dentro do nosso sistema.

Enquanto uma máquina virtual terá toda aquela etapa de virtualização dos sistemas operacionais dentro do sistema original, os containers funcionarão diretamente como processos dentro do sistema.

Portanto, no que diz respeito ao consumo, podemos visualizar que ele será um pouco menor. O consumo de recursos, a carga para que ele possa ser executado, é um pouco menor, porque eles serão processos, e não uma virtualização completa.

--- 

### O que são namespaces?
Teremos os principais namespaces:
 - PID -> garante o isolamento a nível de processo dentro de cada um dos containers. Portanto, um processo dentro de um container, que, consequentemente, é um processo dentro do sistema operacional, estará isolado de todos os outros do nosso host, isto é, da nossa máquina original.
 - NET -> o namespace de rede, que garantirá o isolamento entre uma interface de rede de cada um dos containers e também do nosso sistema operacional original.
 - IPC ->  intercomunicação entre cada um dos processos da nossa máquina. 
 - MNT -> é a parte de file system (sistema de arquivos), montagem, volumes e afins, também estará devidamente isolado
 - UTS ->  faz um compartilhamento e um isolamento ao mesmo tempo do host, isto é, do kernel, da máquina que executa o container.

 ---

 ### Cgroups:
 Por fim, na parte de gerenciamento de recursos, suponha que queiramos definir, conforme levantado em um problema anteriormente, o consumo máximo de memória, de CPU e afins para cada um dos containers.

Existe outro conceito chamado Cgroups, que garantirá que podemos definir, tanto de maneira automática, quanto de maneira manual, como os consumos serão feitos para cada um desses processos, isto é, para cada um desses containers dentro do sistema operacional.

De volta às perguntas originais, graças aos namespaces e aos Cgroups, conseguimos garantir o isolamento, garantir que o nosso container funciona sem instalar um sistema operacional dentro dele, e também conseguir ter um controle de gerenciamento de recursos como memória e CPU.

Quanto à questão de por que eles são mais leves, entendemos que eles funcionarão como processos diretamente do sistema operacional, mas ao longo deste curso, entenderemos ainda mais por que eles conseguem ser tão mais práticos em relação a uma máquina virtual em termos de consumo de recursos e de tamanho de armazenamento também no nosso sistema operacional.

---

### Instalando o Docker no Windows:
1.  acessar a página da documentação oficial [Install Docker Desktop on Windows](https://docs.docker.com/desktop/install/windows-install/)
2. clicar no botão "Docker Desktop for Windows".
3. Após baixar o arquivo, basta abrir o instalador e seguir o fluxo de instalação normalmente.
4. Depois de um tempo, o instalador abrirá uma tela com algumas opções. Neste momento, ele tem duas opções: 
  - instalar os componentes necessários para o Docker rodar com o Windows em WSL 2; 
  - e adicionar um atalho na área de trabalho. Vamos marcar essas duas opções e clicar em "OK" para instalar.

### Informações importantes:
Enquanto o Docker é instalado, há alguns pontos importantes a destacar. O primeiro é que, caso você seja uma pessoa usuária de Docker ou esteja começando agora, e esteja pensando em utilizar o Windows para isso, recomendamos fortemente que não utilize o Docker no Windows, e sim no Linux, que é um ambiente muito mais estável e preparado para gerenciar e utilizar essa plataforma de conteinerização.

Outro ponto é que o Docker está fazendo uma atualização nos termos de uso dele. O Docker Desktop, que utilizamos no caso do Windows, passará a ser pago a partir de 31 de janeiro de 2022, caso sua empresa tenha mais de 250 pessoas trabalhadoras ou uma receita anual de mais de 10 milhões de dólares.

Esse é um ponto que você deve ter atenção, a depender da empresa em que trabalha. O uso para estudo, até o momento da gravação deste curso, continua liberado.

Outro ponto de atenção deve ser o WSL 2 backend, que vimos no momento da instalação do Docker. O WSL 2 é o Windows Subsystem for Linux (Subsistema Windows para Linux), que significa que teremos um subsistema Linux rodando dentro do Windows. Ele virtualiza, de modo simplificado, o sistema operacional Linux, para que possamos utilizar o Docker nesse sistema operacional.

Caso você já tenha o Windows instalado, tanto o Windows 11 quanto o Windows 10, nas respectivas versões indicadas na documentação, basta habilitar o WSL 2 no seu sistema operacional Windows, em conjunto com a documentação da Microsoft. Em conjunto com o PowerShell, você consegue instalar o WSL seguindo toda a documentação. Caso queira visualizar a documentação em português, basta alterar o idioma.

---

### Executando o Docker:
Uma vez concluída a instalação, para verificar se o Docker está funcionando corretamente, precisamos executá-lo. Podemos fazer isso através do menu "Iniciar" ou clicando no ícone de atalho do Docker Desktop na área de trabalho. Ao clicar duas vezes, ele começará a carregar o Docker para que a máquina execute tudo o que é necessário para que ele funcione no ambiente Windows.

Para testar se o Docker realmente funciona, utilizaremos o PowerShell do próprio Windows. Para isso, podemos executar no terminal Windows PowerShell o comando docker run seguido de hello-world, um container clássico para verificar se o Docker está em funcionamento.

```
docker run hello-world
```

Na primeira execução, foi retornado um erro dizendo que não conseguiu encontrar uma imagem hello-world na versão latest localmente (locally). Porém, após alguns instantes, o comando executa e mostra a mensagem "Hello from Docker"" ("Olá do Docker""), indicando que a instalação funcionou.

---

### Compreendendo containers:
O Docker é uma plataforma que implementa virtualização de software e utiliza a tecnologia de contêineres para facilitar a implantação e execução de aplicações. Podemos entender contêiner como uma unidade leve e portátil que irá conter todo o necessário para executar um pedaço de software, incluindo o código, runtime, bibliotecas e dependências. Neste modelo de virtualização temos diversos benefícios,com destaque para: isolamento de contextos e o versionamento de aplicações.

-> **Isolamento de Contextos** - Como cada contêiner possui seu próprio sistema de arquivos, processo, espaço de rede e recursos, garantindo que a aplicação dentro do contêiner não interfira em outras aplicações ou no sistema hospedeiro, isso proporciorna um alto grau de independência e isolamento.

-> **Versionamento de Aplicações** - No docker as aplicações são encapsuladas em imagens, que são versões imutáveis e autossuficientes. Uma imagem docker é composta por camadas, permitindo versionamento eficiente e a reutilização de partes comuns entre diferentes aplicações. Utilizando um arquivo conhecido como Dockerfile, o versionamento é facilitado , um arquivo de configuração que descreve os passos para criar uma imagem. As alterações no Dockerfile resultam em novas versões da imagem, garantindo consistência na implantação.

O Docker proporciona uma abordagem eficiente para o desenvolvimento, empacotamento e execução de aplicações, trazendo benefícios como isolamento de contextos, consistência entre ambientes e versionamento controlado. Essas características tornam o Docker uma ferramenta poderosa para equipes de desenvolvimento e operações que buscam eficiência e confiabilidade em todo o ciclo de vida de uma aplicação.

---

