let personajes = [];

async function Conexion(filtrotipo) {
  // No hay "tipo" como en Pokémon, así que usamos un filtro simulado
  const res = await fetch(`https://api.disneyapi.dev/character`);
  const data = await res.json();

  // Los personajes vienen en data.data
  let results = data.data;

  if (filtrotipo && filtrotipo !== "All") {
    // Filtra personajes por nombre o película (simulado)
    results = results.filter(p => 
      (p.films && p.films.join(" ").toLowerCase().includes(filtrotipo.toLowerCase())) ||
      (p.name && p.name.toLowerCase().includes(filtrotipo.toLowerCase()))
    );
  }

  return results;
}

async function General() {
  if (personajes.length === 0) {
    personajes = await Conexion("All");
  }
  Home();
}

General();

async function FiltroConexion(Elfiltro) {
  document.getElementById("la-lista").innerHTML = "";
  personajes = await Conexion(Elfiltro);
  const listaHTML = generarLista(personajes);
  document.getElementById("la-lista").innerHTML = listaHTML;
}
