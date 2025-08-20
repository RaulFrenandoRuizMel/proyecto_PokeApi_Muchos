/*fetch("https://pokeapi.co/api/v2/pokemon/tyranitar").then(recurso => {
    recurso.json().then(pokemon => {
        console.log(pokemon);
    });
});*/

const Plantilla_contenedor = document.querySelector(".contenedorPokemon");

const main = document.querySelector("main");

for(i=0; i<1025; i++)
{
    var clon = Plantilla_contenedor.cloneNode(true);
    main.appendChild(clon);
}

const arreglo_pokemons = document.querySelectorAll(".contenedorPokemon");

const input_buscar = document.querySelector("input");
const button_buscar = document.querySelector("button");

button_buscar.addEventListener("click", () =>{
    const tipo_buscado = input_buscar.value.toLowerCase().trim();

    arreglo_pokemons.forEach(clon =>{
        if (tipo_buscado === "")
        {
            clon.style.display = "block";
        }
        else if(clon.classList.contains(tipo_buscado +"1"))
        {
            clon.style.display = "block";
        }
        else
        {
            clon.style.display = "none";
        }
    });
});

for(i=0; i<arreglo_pokemons.length; i++)
{

    fetch("https://pokeapi.co/api/v2/pokemon/"+ (i + 1)).then(recurso => recurso.json()).then(pokemon => {
        
        console.log(pokemon); //obtiene el recurso de la pokeapi, lo convierte en .JSON de forma directa y despues lo imprime en la consola
    
        const numero_pokemon = arreglo_pokemons[pokemon.id-1].querySelector(".numero_pokemon");
        numero_pokemon.innerHTML ="<p>" + "Numero: "+ pokemon.id + "</p>";
    
        const nombre_pokemon = arreglo_pokemons[pokemon.id-1].querySelector(".nombre_pokemon");
        nombre_pokemon.innerHTML = "<p>"+ "Nombre: " + pokemon.name + "</p>";
    
        const imagen_pokemon = arreglo_pokemons[pokemon.id-1].querySelector("img");
        imagen_pokemon.src = pokemon.sprites.front_default;
    
        const altura_pokemon = arreglo_pokemons[pokemon.id-1].querySelector(".height");
        altura_pokemon.innerHTML = "<p>" + "Altura: " + pokemon.height/10 + "M" + "</p>";

        const peso_pokemon = arreglo_pokemons[pokemon.id-1].querySelector(".peso_pokemon");
        peso_pokemon.innerHTML = "<p>" + "Peso:" + pokemon.weight/10 + "KG" + "</p>";
    
        const tipo_pokemon = arreglo_pokemons[pokemon.id-1].querySelector(".tipo_pokemon");
        if(pokemon.types.length > 1)
            {
                tipo_pokemon.innerHTML = "<p>" + "Tipo: "+ "<div class='"+pokemon.types[0].type.name+"'>" + "<p>" + pokemon.types[0].type.name + "</p>" + "</div>" + "<p>" + "/" + "</p>" + "<p>" + "<div class='"+pokemon.types[1].type.name+"'>" + "<p>" + pokemon.types[1].type.name + "</p>" + "</div>";
                
            }
            else
            {
                tipo_pokemon.innerHTML = "<p>" + "Tipo: "+ "<div class='"+pokemon.types[0].type.name+"'>" + "<p>" + pokemon.types[0].type.name + "</p>" + "</div>";
            }
        
        /*    const audio_pokemon = document.querySelector("audio");
        audio_pokemon.src = pokemon.cries.latest; */
        const contenedor_audio = arreglo_pokemons[pokemon.id-1].querySelector(".contenedor_audio");
        contenedor_audio.innerHTML = "<audio controls><source src='" + pokemon.cries.latest +"'></audio>";

        const contenedorPokemon = document.querySelector(".contenedorPokemon");
        contenedorPokemon.className = ""; 
        contenedorPokemon.classList.add(pokemon.types[0].type.name + "1");

        contenedorPokemon.style.backgroundImage = "url(../230309_RAUL_FERNANDO_RUIZ_MELENDEZ/IMAGENES/"+ pokemon.types[0].type.name +".png)";

        const Separador_Imagen = arreglo_pokemons[pokemon.id-1].querySelector(".separador_Imagen");
        Separador_Imagen.style.display = "none"
        clon.style.display = "none";
    });
}

