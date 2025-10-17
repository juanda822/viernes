async function Detalle(id) {
  const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
  const data = await res.json();

  const personaje = data; // La API devuelve un objeto directo

  document.getElementById("root").innerHTML = `
    <img src="${personaje.imageUrl}" alt="${personaje.name}" height="150" width="auto">
    <p><b>${personaje.name}</b></p>
    <p>ID: ${personaje._id}</p>
    <p>Películas: ${personaje.films && personaje.films.length > 0 ? personaje.films.join(", ") : "Ninguna"}</p>
    <p>Series: ${personaje.tvShows && personaje.tvShows.length > 0 ? personaje.tvShows.join(", ") : "Ninguna"}</p>
    <p>Videojuegos: ${personaje.videoGames && personaje.videoGames.length > 0 ? personaje.videoGames.join(", ") : "Ninguno"}</p>
  `;
}
