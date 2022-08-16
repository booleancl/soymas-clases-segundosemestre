const cuandoElUsuarioHagaClick = () => {
  const resultadoDiv = document.getElementById('resultado')
  
  const n1Input = document.getElementById('numero1').value
  const n2Input = document.getElementById('numero2')
  
  const n1 = n1Input.value
  const n2 = n2Input.value

  resultadoDiv.innerHTML = Number(n1) + Number(n2)
}