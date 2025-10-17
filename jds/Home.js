function buscadorfuncion(sza) {
  if (sza.length >= 3) {
    const filtrados = [];
    for (let i = 0; i < personajes.length; i++) {
      const nombre = personajes[i].name.toLowerCase();
      if (nombre.includes(sza.toLowerCase())) {
        filtrados.push(personajes[i]);
      }
    }
    let listaHTML = generarLista(filtrados);
    document.getElementById("la-lista").innerHTML = listaHTML;
  } else {
    let listaHTML = generarLista(personajes);
    document.getElementById("la-lista").innerHTML = listaHTML;
  }
}

function generarLista(arraypersonajes) {
  let listaHTML = "";
  for (let i = 0; i < arraypersonajes.length; i++) {
    listaHTML += `
      <div class="c-lista-personaje" onclick="Detalle('${arraypersonajes[i]._id}')">
        <p>#${i + 1}</p>
        <img src="${arraypersonajes[i].imageUrl}" width="auto" height="80" loading="lazy" alt="${arraypersonajes[i].name}">
        <p>${arraypersonajes[i].name}</p>
      </div>`;
  }
  return listaHTML;
}

function Home() {
  document.getElementById("root").innerHTML = "";

  // buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar personaje...";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  // contenedor filtro (películas)
  const filtros = ["All", "Mickey", "Frozen", "Toy Story", "Marvel", "Pirates", "Princess"];

  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("tipos-container");

  for (let i = 0; i < filtros.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = filtros[i];
    btn.addEventListener("click", () => {
      FiltroConexion(filtros[i]);
    });
    contenedorFiltro.appendChild(btn);
  }

  // mostrar lista
  const contenedorPjs = document.createElement("div");
  contenedorPjs.id = "la-lista";
  contenedorPjs.innerHTML = generarLista(personajes);

  document.getElementById("root").appendChild(buscador);
  document.getElementById("root").appendChild(contenedorFiltro);
  document.getElementById("root").appendChild(contenedorPjs);
}
