let arrayFitxers=[];
let files;
const dropArea = document.querySelector('.dropArea');
const dragDropText = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.querySelector('#input-file');
const preview = document.querySelector('#preview');


button.addEventListener("click", () =>{
  input.click();
});

input.addEventListener("change", () => {
  files= this.files;
})
