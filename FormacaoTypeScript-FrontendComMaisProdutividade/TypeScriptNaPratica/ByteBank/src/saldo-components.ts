let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementoSaldo != null) {
  elementoSaldo.textContent = saldo.toString();
};

