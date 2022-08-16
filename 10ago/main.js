const cambiarColor = () => {
  const color = document.getElementById('bgcolor').value
  document.bgColor = color
}

const cambiarColorDesdeSelect = () => {
  const color = document.getElementById('selectColor').value
  document.bgColor = color
}

const colorear = (color) => {
  document.bgColor = color
}