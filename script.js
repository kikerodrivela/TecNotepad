
const buttonClaro = document.getElementById('button-claro')
const buttonOscuro = document.getElementById('button-oscuro')

const clearButton = document.getElementById('clear-button');
const fontButton = document.getElementById('font-button');
const sizeButton = document.getElementById('size-button');
const colorButton = document.getElementById('color-button');
const saveButton = document.getElementById('save-button');


const textarea = document.querySelector('textarea');

clearButton.addEventListener('click', () => {
  textarea.value = '';
});

fontButton.addEventListener('click', () => {
  const font = prompt('Enter a font name:');
  textarea.style.fontFamily = font;
});

sizeButton.addEventListener('click', () => {
  const size = prompt('Enter a font size:');
  textarea.style.fontSize = size + 'px';
})

colorButton.addEventListener('click', () => {
  const color = prompt('Enter a color:');
  textarea.style.color = color;
})

saveButton.addEventListener('click', () => {
  const name = prompt('Enter a file name:');
  const text = textarea.value;
  const blob = new Blob([text], { type: 'text/plain' });
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');

  if (name === '') {
    name = 'tecnotepad';
  }

  link.href = href;
  link.download = name + '.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
})

textarea.addEventListener('input', () => {
  if (textarea.style.color === 'black' || textarea.style.color === 'grey') {
    textarea.style.backgroundColor = 'white';
  } else {
    textarea.style.backgroundColor = textarea.style.color;
  }
})

buttonClaro.addEventListener('click', () => {
  textarea.style.backgroundColor = 'white';
  textarea.style.color = 'black';
  buttonClaro.style.display = 'none';
  buttonOscuro.style.display = '';
})

buttonOscuro.style.display = 'none';

buttonOscuro.addEventListener('click', () => {
  textarea.style.backgroundColor = '#272727';
  textarea.style.color = 'white';
  buttonOscuro.style.display = 'none';
  buttonClaro.style.display = '';
})
