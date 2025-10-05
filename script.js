const nombre = document.getElementById("nombre");
const nPokedex = document.getElementById("nPokedex");
const statsList = document.getElementById("stats");
const sonido = document.getElementById("sonido");
const input = document.getElementById("pokeInput");
const btn = document.getElementById("buscarBtn");
const imgFront = document.getElementById("img-front");
const imgBack = document.getElementById("img-back");

// tabla
const tabla = document.getElementsByTagName("tr");

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
        const id = datos.id;
        const front_default = datos.sprites.front_default;
        const back_default = datos.sprites.back_default;
        const stats = datos.stats;
        const cries = datos.cries.latest;

        // // no funciona actualmente
        // // en vez de añadirlo a la tabla, crear una segunda fila en la tabla
        // stats.forEach(stat => {
        //     for (const th of tabla) {
        //         th.textContent = stat.base_stat;
        //     }
        //     statsList.appendChild(statLi);
        // });

        nombre.textContent = `${name.toUpperCase()}  #${id}`;
        imgFront.src = front_default;
        imgBack.src = back_default;
        sonido.src = cries;
    }).catch(error => console.log("Ha ocurrido un error tratando de obtener los datos: ", error));
});

// meter todo en una función y llamarla