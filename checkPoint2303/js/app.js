const inserirTripulante=(event)=> {
  event.preventDefault();

  const listaTripulantes = document.getElementById("box-character");

  const inputName = document.querySelector("[data-form-name]");
  const inputPatente = document.querySelector("[data-form-patente]");
  const inputImage = document.querySelector("[data-form-img]");

  const valorNome = inputName.value;
  const valorPatente = inputPatente.value;
  const valorImage = inputImage.value;
  
  const tripulante = document.createElement("div");
  /* tripulante.classList.add("box-image"); */

  const conteudo = 
  ` <div class="box-image">
    <div class="text-character">
    <h2>${valorNome}</h2>
    <img class="character"
    src="${valorImage}">
    <p>${valorPatente}
    </p>
  </div>
</div>`;

tripulante.innerHTML = conteudo;
listaTripulantes.appendChild(tripulante);

valorNome.innerHTML = "";
valorPatente.innerHTML = "";
valorImage.innerHTML = "";
};

const novoTripulante = document.querySelector("[data-form-btn]");

novoTripulante.addEventListener("click", inserirTripulante);

