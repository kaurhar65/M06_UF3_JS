let arrayFitxers = [];
let dropArea = document.querySelector('.drop-area');
let dragDropText = document.querySelector("h2");
let button = document.querySelector("button");
let input = document.querySelector("#input-file");
let preview = document.querySelector("#preview");
const eventos = ['dragover', 'dragleave', 'drop'];

eventos.forEach(function(evento) {
  dropArea.addEventListener(evento, prevDefault);
});

function prevDefault(e) {
  e.preventDefault();
  e.stopPropagation();
}

//eventos
dropArea.addEventListener('dragover', function() {
  dropArea.classList.add('active');
  dragDropText.innerHTML = "Drop to upload files";
});

dropArea.addEventListener('dragleave', function() {
  dropArea.classList.remove('active');
  dragDropText.innerHTML = "Drag & Drop files";
});

dropArea.addEventListener("drop", function(e) {
  dropArea.classList.remove("active");
  let ficherosArras = Array.from(e.dataTransfer.files);
  arrayFitxers = arrayFitxers.concat(ficherosArras);
  showFiles(arrayFitxers);
  console.log(arrayFitxers);
});

button.addEventListener("click", function(e) {
  e.preventDefault();
  input.click();
});

input.addEventListener("change", function(e) {
  let seleccionados = Array.from(input.files);
  arrayFitxers = arrayFitxers.concat(seleccionados);
  showFiles(arrayFitxers);
  input.value = null;
});

//funciones
function showFiles(ficheros) {
  preview.innerHTML = "";
  ficheros.forEach((fichero, index) => {
    processFile(fichero, index);
  });
}

function processFile(fichero, index) {
  const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  const docType = fichero.type;
  if (validExtensions.includes(docType)) {
    let reader = new FileReader();
    reader.readAsDataURL(fichero);
    reader.onload = function() {
      let prev = `<div class="previewImage">
                  <img id="img${index}" src="${reader.result}"/>
                  <span>${fichero.name}</span>
                  <span onclick="removeFile(${index})" class="material-symbols-outlined removeBtn">x</span>
                  </div>`;
      preview.innerHTML += prev;
    };
  } else {
    arrayFitxers.splice(index, 1);
    alert("El fichero seleccionado no és una imagen.");
  }
}

function removeFile(index) {
  arrayFitxers.splice(index, 1);
  showFiles(arrayFitxers);
}
