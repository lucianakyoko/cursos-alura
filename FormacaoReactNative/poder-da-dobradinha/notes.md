# ANOTAÇÕES - O PODER DA DOBRADINHA

**React e React Native** são duas tecnologias diferentes, embora ambas sejam desenvolvidas pela mesma equipe do Facebook. A principal diferença entre elas é que o **React** é uma biblioteca JavaScript para construção de interfaces de usuário em plataformas web, enquanto o **React Native** é um framework para construção de aplicativos móveis nativos, usando JavaScript e React.

- **React** é usado para criar interfaces de usuário em aplicações web, usando HTML, CSS e JavaScript. Ele permite que você crie componentes reutilizáveis que podem ser combinados para formar interfaces complexas. Ele também usa uma abordagem baseada em componentes para gerenciar o estado e a renderização da interface do usuário, tornando-o mais fácil de usar do que outras bibliotecas de gerenciamento de estado.

```
import React from 'react';
import { Text } from '....';

function Nomes() {
  const instrutores = ['Natalia', 'Luiz'];

  return (
    <>
      {instrutores.map(nome => (
        <Text>{nome}</Text>
      ))}
    </>
  );
}
```

- **React Native** é uma plataforma para desenvolvimento de aplicativos móveis nativos para iOS e Android, usando JavaScript e React. Ele permite que você escreva código JavaScript e o converta em código nativo para cada plataforma. Isso significa que você pode usar as mesmas habilidades e ferramentas que você usa para criar aplicativos web para criar aplicativos móveis nativos.

Em resumo, o React é uma biblioteca JavaScript para construção de interfaces de usuário em plataformas web, enquanto o React Native é um framework para construção de aplicativos móveis nativos, usando JavaScript e React.

--- 
## Estilização:
 Estilos inline:

 ```
 //React

 <div style={{ backgroundColor: "#072347" }}>
  ...
 </div>
 ```

 ```
 //React Native

 <View style={{ backgroundColor: "#072347" }}>
  ...
 </View>
 ```

 React Native StyleSheet:
  No React Native não há CSS, então neste caso usamos a estrutura de objetos para realizar a estilização

 ```
 import React from 'react';
 import { View, StyleSheet } from 'react-native';

 export default function Exemplo() {
  return <View style={estilos.exemplo}>
    ...
  </View>
 }

 const estilos = StyleSheet.create({
  exemplo: {
    backgroundColor: "#072347",
  }
 })
 ```
