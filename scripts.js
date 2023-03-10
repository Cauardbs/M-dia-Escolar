var mediaEscola = document.getElementById('media');
var materia = document.getElementById('materia');
var nota1 = document.getElementById('nota1');
var nota2 = document.getElementById('nota2');
var nota3 = document.getElementById('nota3');
var nota4 = document.getElementById('nota4');
var resultado = document.getElementById('resultado');

function calcular() {
  let materiaF = materia.value;
  let mediaEscolaF = parseFloat(mediaEscola.value);
  let nota1F = parseFloat(nota1.value);
  let nota2F = parseFloat(nota2.value);
  let nota3F = parseFloat(nota3.value);
  let nota4F = parseFloat(nota4.value);

  media = (nota1F + nota2F + nota3F + nota4F) / 4;
  if (nota1F && nota2F && nota3F && nota4F && mediaEscolaF) {
    if (media < mediaEscolaF) {
      resultado.innerHTML = `<p>Infelizmente você foi reprovado na matéria ${materiaF} com média ${parseFloat(
        media.toFixed(2),
      )}!</p>`;
    } else {
      resultado.innerHTML = `<p>Parabéns! Você aprovado na matéria ${materiaF} com média ${media.toFixed(
        2,
      )}!</p>`;
    }
  } else {
    alert('Por favor, preencha todos os campos!');
  }
}
