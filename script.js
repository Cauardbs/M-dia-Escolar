let altura = document.getElementById('input-altura');
let peso = document.getElementById('input-peso');

let imc = document.getElementById('imc');

function calcularIMC() {
  let alturaI = altura.value;
  let pesoI = peso.value;
  let resultado = pesoI / ((alturaI / 100) * (alturaI / 100));
  imc.innerHTML = `<p>Seu IMC é: 
  
  ${resultado.toFixed(2)}</p>`;
}
