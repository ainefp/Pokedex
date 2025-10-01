const nombre = document.getElementById("nombre");
const statsList = document.getElementById("stats");
const sonido = document.getElementById("sonido");
const input = document.getElementById("pokeInput");
const btn = document.getElementById("buscarBtn");

const div = document.getElementById("pokediv");
// div.style.display = "none";

const limpiar = () => {
    statsList.innerHTML = "";
}

btn.addEventListener("click", () => {
    const pokemon = input.value.trim().toLowerCase();

    limpiar();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(datos => {
        const name = datos.name;
        const stats = datos.stats;
        const cries = datos.cries.latest;

        stats.forEach(stat => {
            const statLi = document.createElement("li");
            statLi.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            statsList.appendChild(statLi);
        });

        nombre.textContent = name;
        sonido.src = cries;
    }).catch(error => console.log("Ha ocurrido un error tratando de obtener los datos: ", error));
});

// meter todo en una función y llamarla