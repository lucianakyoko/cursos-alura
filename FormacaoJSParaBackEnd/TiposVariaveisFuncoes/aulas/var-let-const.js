// ***** Var: *****
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
// console.log(area);
var area;

// ***** Let: *****
let forma = 'retangulo';
let altura1 = 5;
let comprimento1 = 7;

let area1;
if(forma === 'retangulo') {
  area1 = altura1 * comprimento1;
} else {
  area1 = (altura1 * comprimento1)/2;
}
// console.log(area1);


// ***** Const: *****
const forma2 = 'triangulo';
const altura2 = 5;
const comprimento2 = 7;
let area2;

if(forma2 === 'quadrado') {
  area2 = altura2 * comprimento2;
} else {
  area2 = (altura2 * comprimento2)/2;
}

console.log(area2)
