async function Detalle(personajeId) {
    if (!personajeId) {
        console.error("❌ No se proporcionó un personajeId");
        return;
    }

    try {
        const res = await fetch("https://api.disneyapi.dev/characters/" + personajeId);
        if (!res.ok) throw new Error("❌ Error en la API: " + res.status);

        const json = await res.json();
        const data = json.data;

        document.getElementById("root").innerHTML = `
            <img src="${data.imageUrl}" alt="${data.name}" height="120" width="auto">
            <p>Nombre: ${data.name}</p>
            <p>ID: ${data._id}</p>
            <p>Películas: ${data.films?.length || 0}</p>
            <p>Series de TV: ${data.tvShows?.length || 0}</p>
            <p>Videojuegos: ${data.videoGames?.length || 0}</p>
            <p>Aliados: ${data.allies?.length || 0} / Enemigos: ${data.enemies?.length || 0}</p>
        `;
    } catch (error) {
        console.error("❌ Error obteniendo el personaje:", error);
    }
}

// 👇 Hacerla accesible desde los botones del HTML
window.Detalle = Detalle;
