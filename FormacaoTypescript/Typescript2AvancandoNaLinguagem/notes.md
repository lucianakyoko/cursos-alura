# ANOTAÇÕES - Typescript parte 2 - Avançando na linguagem

--- 

<p align="center">
  <a href="#-aula-1">Aula 1</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-2">Aula 2</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-3">Aula 3</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-4">Aula 4</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-5">Aula 5</a> 
</p>

---

## 📌 AULA 1
### Elaborando uma solução de view
 - O modificador protected garante que apenas a própria classe e suas classes filhas tenham acesso à propriedade.- O modificador public é bem abrangente, classes filhas e outras partes do sistema poderão acessar a propriedade sem qualquer problema. 
 
---

## 📌 AULA 2
### Herança e reaproveitamento de código


---

## 📌 AULA 3
### Visibilidade de métodos e Enumeration



---

## 📌 AULA 4
### Lapidando nosso código
#### métodos estáticos

Considere o seguinte código:
```
class DateUtils {
  public ehDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.DOMINGO
      && data.getDay() < DiasDaSemana.SABADO;
  }
}

const dateUtils = new DateUtils();
const ehDiaUtil = dateUtils.ehDiaUtil(new Date());
```

A forma que transforma corretamente o método ehDiaUtil em um método estático:
```
  
class DateUtils {
  public static ehDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.DOMINGO
      && data.getDay() < DiasDaSemana.SABADO;
  }
}
```
Métodos estáticos podem ser acessados diretamente pela classe sem precisarmos de uma instância desta mesma classe.

---

## 📌 AULA 5
### TSC e StrictNullChecks
#### tsconfig.json
Para remover os comentários dos arquivos ts durante o processo de compilação para javascript:

Dentro do arquivo tsconfig.json:
```
{
  "compilerOptions": {
    "removeComments": true
  },
}
```

#### StrictNullChecks
Diz para o compilador TSC que pare de assumir implicitamente o tipo null para todos os tipos da aplicação. Caso null faça sentido, o desenvolvedor deve deixar isso explícito em seu código. Inclusive o StrictNullChecks obrigará o desenvolvedor a tratar todos os pontos de acesso a valores null em sua aplicação, forçando que o desenvolvedor pondere com cuidado cada cenário.

No arquivo tsconfig.json:
```
{
  "compilerOptions": {
    "strictNullChecks": true
  },
}
```