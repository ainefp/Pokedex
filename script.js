// elementos del DOM
const input = document.getElementById("pokeInput");
const btn = document.getElementById("buscarBtn");

const nombre = document.getElementById("nombre");
const nPokedex = document.getElementById("nPokedex");
const statsTable = document.getElementById("stats");
const sonido = document.getElementById("sonido");
const imgFront = document.getElementById("img-front");
const imgBack = document.getElementById("img-back");
const habilidades = document.getElementById("habilidades");

const div = document.getElementById("pokediv");
    // div.style.display = "none";

const limpiar = () => {
    statsTable.innerHTML = "";
    habilidades.innerHTML = "";
}

btn.addEventListener("click", () => {
    // Obtener el nombre del pokemon del input
    const pokemon = input.value.trim().toLowerCase();

    limpiar();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(datos => {
            const name = datos.name;
            const id = datos.id;
            const front_default = datos.sprites.front_default;
            const back_default = datos.sprites.back_default;
            const stats = datos.stats;
            const abilities = datos.abilities;
            const cries = datos.cries.latest;

            // no funciona actualmente
            // en vez de añadirlo a la tabla, crear una segunda fila en la tabla

            // Recorrer los stats
            stats.forEach(stat => {
                const th = document.createElement("th");
                th.textContent = stat.base_stat;
                statsTable.appendChild(th);
            });

            // Habilidades
            abilities.forEach(ability => {
                const li = document.createElement("li");
                li.textContent = ability.ability.name;
                habilidades.appendChild(li);
            });

            nombre.textContent = `${name.toUpperCase()}  #${id}`;
            imgFront.src = front_default;
            imgBack.src = back_default;
            sonido.src = cries;
        }).catch(error => console.log("Ha ocurrido un error tratando de obtener los datos: ", error));
});

// meter todo en una función y llamarla