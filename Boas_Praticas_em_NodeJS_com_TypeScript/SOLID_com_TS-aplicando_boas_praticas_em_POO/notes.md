# Anotações das aulas

## Tipos de acoplamento
No desenvolvimento de software, a busca por um baixo acoplamento é essencial para criar sistemas flexíveis e de fácil manutenção, uma medida de qualidade do software.

O acoplamento, que representa a dependência entre os diversos módulos ou componentes de um sistema, pode tornar o código complexo e difícil de modificar quando não é adequadamente gerenciado.

Por isso, entender os diferentes tipos de acoplamento e suas implicações é fundamental para pessoas desenvolvedoras que desejam criar sistemas robustos e escaláveis.

## O que é acoplamento?
Acoplamento, no contexto da engenharia de software, refere-se ao grau de dependência entre diferentes partes de um sistema. Quanto maior o acoplamento entre componentes, mais forte é a interdependência entre eles.

Alto acoplamento significa que os módulos estão intimamente conectados, assim, alterações em um dos módulos podem afetar os demais. Baixo acoplamento significa que os módulos são independentes, então as alterações em um módulo têm pouco impacto nos outros.

Existem diversos tipos de acoplamento que influenciam a estrutura e a manutenção de um sistema de software.

## Principais tipos de acoplamento:
### 1. Data Coupling (Acoplamento de dados):
Ocorre quando um módulo depende apenas das estruturas de dados específicas de outro. Isso significa que os módulos são independentes uns dos outros e só há uma dependência nos tipos de dados sendo passados entre os módulos.

O acoplamento de dados é usado comumente em programação orientada a objetos e programação procedural.
```
class Usuario {
  constructor(private nome: string) {}

  getNome(): string {
    return this.nome;
  }
}

class GerenciadorUsuario {
  constructor(private usuario: Usuario) {}

  mostrarNomeUsuario(): void {
    console.log(this.usuario.getNome());
  }
}

// Utilização dos Módulos A e B
const usuario = new Usuario("Ana");
const gerenciadorUsuario = new GerenciadorUsuario(usuario);
gerenciadorUsuario.mostrarNomeUsuario();
```

Neste exemplo, o GerenciadorUsuario depende diretamente do Usuario para funcionar corretamente, logo, qualquer alteração na estrutura ou comportamento da classe Usuario pode afetar diretamente o GerenciadorUsuario.

### 2. Stamp Coupling (Acoplamento por Carimbo)
Refere-se a uma forma de acoplamento de dados na qual os módulos compartilham muitos campos em uma estrutura de dados complexa, mas cada módulo usa apenas um subconjunto desses campos.


``` 
// Módulo A
class Pedido {
  constructor(private id: number, private descricao: string, private valor: number) {}

  getId(): number {
    return this.id;
  }
}

// Módulo B
class GerenciadorPedido {
  constructor(private pedido: Pedido) {}

  mostrarIdPedido(): void {
    console.log(this.pedido.getId());
  }
}

// Utilização dos Módulos A e B
const pedido = new Pedido(1, "Produto A", 100);
const gerenciadorPedido = new GerenciadorPedido(pedido);
gerenciadorPedido.mostrarIdPedido();
```

Neste exemplo, o GerenciadorPedido depende de um objeto Pedido que possui uma estrutura de dados complexa, mas apenas usa um subconjunto específico de campos desse objeto (id). Isso demonstra um acoplamento por carimbo.

### 3 - Control Coupling (Acoplamento de Controle):

Envolve a dependência entre módulos devido ao compartilhamento de informações de controle, como valores de flags ou indicadores que afetam o fluxo de execução do programa.

Quando os módulos se relacionam ou se comunicam de forma organizada, compartilhando dados de maneira coordenada, isso é conhecido como acoplamento de controle. Esse tipo de acoplamento implica que um módulo exerce controle sobre o fluxo de dados ou informações entre os demais, direcionando as instruções sobre como proceder.

```// Módulo A 
class ProcessadorPagamento {
  processarPagamento(status: boolean): void {
    if (status) {
      console.log("Pagamento processado com sucesso.");
    } else {
      console.log("Falha ao processar pagamento.");
    }
  }
}

// Módulo B 
class CarrinhoCompras {
  constructor(private processador: ProcessadorPagamento) {}

  finalizarCompra(status: boolean): void {
    this.processador.processarPagamento(status);
  }
}

// Utilização dos Módulos A e B
const processador = new ProcessadorPagamento();
const carrinho = new CarrinhoCompras(processador);
carrinho.finalizarCompra(true);
```

Neste exemplo, o CarrinhoCompras depende do ProcessadorPagamento para determinar se a compra deve ser finalizada com sucesso ou não, com base no status do pagamento. Isso demonstra um acoplamento de controle.

### 4 - Common Coupling (Acoplamento Comum):
Ocorre quando dois ou mais módulos dependem de um terceiro módulo comum para realizar suas funções. Isso cria uma forte interdependência entre os módulos, tornando o sistema mais difícil de ser modularizado e mantido.

```
// Módulo A
class Log {
  registrarMensagem(mensagem: string): void {
    console.log(`[LOG] ${mensagem}`);
  }
}

// Módulo B
class ServicoAutenticacao {
  constructor(private log: Log) {}

  autenticarUsuario(): void {
    // Lógica de autenticação
    this.log.registrarMensagem("Usuário autenticado com sucesso.");
  }
}

// Utilização dos Módulos A e B
const log = new Log();
const servicoAutenticacao = new ServicoAutenticacao(log);
servicoAutenticacao.autenticarUsuario();
```

Neste exemplo, o ServicoAutenticacao depende do Log para registrar mensagens de log durante o processo de autenticação. Ambos os módulos compartilham a mesma dependência do Log, demonstrando um acoplamento comum.

### 5 - Content Coupling (Acoplamento de Conteúdo):
É o tipo mais forte de acoplamento, onde um módulo depende diretamente da implementação interna de outro módulo, acessando e manipulando suas variáveis internas.

```
// Módulo A
class Calculadora {
  private resultado: number = 0;

  somar(a: number, b: number): void {
    this.resultado = a + b;
  }

  obterResultado(): number {
    return this.resultado;
  }
}

// Módulo B
class Logger {
  private calculadora: Calculadora;

  constructor(calculadora: Calculadora) {
    this.calculadora = calculadora;
  }

  registrarLog(): void {
    console.log(`Resultado da operação: ${this.calculadora.obterResultado()}`);
  }
}

// Utilização dos Módulos A e B
const calculadora = new Calculadora();
calculadora.somar(2, 3);
const logger = new Logger(calculadora);
logger.registrarLog();
```

Neste exemplo, o Logger depende diretamente da implementação interna da classe Calculadora, usando e manipulando sua variável interna resultado. Isso demonstra um acoplamento de conteúdo, considerado o tipo mais forte.

## Vantagens do baixo acoplamento
- Maior facilidade de manutenção: o baixo acoplamento reduz o impacto das alterações de um módulo em outros módulos, facilitando a modificação ou substituição de componentes individuais sem afetar todo o sistema.
- Modularidade aprimorada: o baixo acoplamento permite que os módulos sejam desenvolvidos e testados isoladamente, melhorando a modularidade e a reutilização do código.
- Melhor escalabilidade: o baixo acoplamento facilita a adição de novos módulos e a remoção dos existentes, facilitando o dimensionamento do sistema conforme necessário.

## Desvantagens do alto acoplamento
- Maior complexidade: o alto acoplamento aumenta a interdependência entre os módulos, tornando o sistema mais complexo e difícil de entender.
- Flexibilidade reduzida:o alto acoplamento dificulta modificar ou substituir componentes individuais sem afetar todo o sistema.
- Modularidade diminuída: o alto acoplamento dificulta desenvolver e testar módulos isoladamente, reduzindo a modularidade e a reutilização do código.

---

## Tipos de coesão
No desenvolvimento de software, o conceito de coesão está relacionado à forma como as responsabilidades são atribuídas aos diferentes componentes de um sistema.

Uma alta coesão significa que os componentes de um sistema estão fortemente relacionados e têm um propósito bem definido, enquanto uma baixa coesão indica que os componentes têm responsabilidades divergentes e pouco relacionadas.

Assim como o acoplamento, a coesão desempenha um papel crucial na qualidade e na manutenibilidade do software, influenciando diretamente a modularidade e a escalabilidade do sistema.

Vamos explorar os diferentes tipos de coesão e como eles podem impactar o design e a implementação de sistemas de software.

Principais Tipos de Coesão:
### 1 - Coesão Funcional:

A coesão funcional ocorre quando os elementos de um módulo estão relacionados e executam uma única função ou tarefa específica. Isso significa que cada componente dentro do módulo está diretamente relacionado à sua função principal e contribui para alcançar o mesmo objetivo.
```
// Exemplo de Coesão Funcional
class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return a / b;
  }
}
```

Neste exemplo, a classe Calculadora possui métodos que realizam operações matemáticas distintas, mantendo uma alta coesão funcional, pois cada método contribui para a funcionalidade principal da calculadora.

### 2 - Coesão Sequencial:

A coesão sequencial ocorre quando as operações em um módulo são organizadas em uma sequência específica, com a saída de uma operação sendo a entrada da próxima. Isso significa que os elementos do módulo estão relacionados de forma sequencial e dependem uns dos outros para executar uma série de etapas em ordem.
```
// Exemplo de Coesão Sequencial
class ProcessoPedido {
  processarPedido(pedido: Pedido): void {
    this.validarPedido(pedido);
    this.atualizarEstoque(pedido);
    this.enviarConfirmacao(pedido);
  }

  validarPedido(pedido: Pedido): void {
    // Lógica de validação do pedido
  }

  atualizarEstoque(pedido: Pedido): void {
    // Lógica de atualização do estoque
  }

  enviarConfirmacao(pedido: Pedido): void {
    // Lógica de envio de confirmação
  }
}
```

Neste exemplo, a classe ProcessoPedido possui métodos que executam etapas sequenciais para processar um pedido, mantendo uma alta coesão sequencial, pois cada método depende do resultado do método anterior.

### 3 - Coesão Temporal:

A coesão temporal ocorre quando as operações em um módulo estão relacionadas no tempo e devem ser executadas juntas devido a uma dependência temporal. Isso significa que os elementos do módulo estão agrupados com base em quando devem ser executados, em vez de suas funcionalidades específicas.

```
// Exemplo de Coesão Temporal
class AgendadorTarefas {
  agendarTarefa(tarefa: Tarefa, hora: string): void {
    // Lógica de agendamento de tarefa
  }

  cancelarTarefa(tarefa: Tarefa): void {
    // Lógica de cancelamento de tarefa
  }

  executarTarefa(tarefa: Tarefa): void {
    // Lógica de execução de tarefa
  }
}
```

Neste exemplo, a classe AgendadorTarefas possui métodos que lidam com o agendamento, cancelamento e execução de tarefas, mantendo uma alta coesão temporal, pois cada método está relacionado no tempo e deve ser executado em momentos específicos.

### 4 - Coesão Lógica:

A coesão lógica ocorre quando os elementos de um módulo estão relacionados por uma lógica específica ou operam em um conjunto comum de dados. Isso significa que os elementos do módulo estão agrupados com base em uma lógica compartilhada ou na manipulação dos mesmos dados.

```
// Exemplo de Coesão Lógica
class ValidadorFormulario {
  validarCampoRequerido(valor: string): boolean {
    // Lógica de validação de campo requerido
    return valor.trim() !== '';
  }

  validarCampoEmail(valor: string): boolean {
    // Lógica de validação de campo

 de e-mail
    return /\S+@\S+\.\S+/.test(valor);
  }

  validarFormulario(formulario: Formulario): boolean {
    // Lógica de validação do formulário
    return this.validarCampoRequerido(formulario.nome) && this.validarCampoEmail(formulario.email);
  }
}
```

Neste exemplo, a classe ValidadorFormulario possui métodos que lidam com a validação de campos de um formulário, mantendo uma alta coesão lógica, pois cada método está relacionado por uma lógica específica de validação.

### 5 - Coesão Coincidental:

A coesão coincidental ocorre quando os elementos de um módulo estão agrupados arbitrariamente, sem relação significativa entre si. Isso significa que os elementos do módulo estão reunidos por conveniência ou acaso, e não por uma lógica ou propósito comum.

```
// Exemplo de Coesão Coincidental
class Utilitario {
  gerarRelatorio(dados: any): void {
    // Lógica de geração de relatório
  }

  enviarEmail(destinatario: string, mensagem: string): void {
    // Lógica de envio de e-mail
  }

  calcularImpostos(dados: any): void {
    // Lógica de cálculo de impostos
  }
}
```

Neste exemplo, a classe Utilitario possui métodos que realizam diferentes tarefas sem relação significativa entre si, mantendo uma baixa coesão coincidental.

Compreender os diferentes tipos de coesão é essencial para projetar sistemas de software modularizados, flexíveis e de fácil manutenção. Ao escolher o tipo certo de coesão para cada componente do sistema, podemos criar sistemas mais robustos e escaláveis, seguindo os princípios da SOLID e outros princípios de design de software.


