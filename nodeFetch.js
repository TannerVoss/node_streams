// install NPM package "npm init"
// Install ‘isomorphic-fetch’ from npm with ‘npm install isomorphic-fetch’

// Inside ‘nodeFetch.js’ import fs and isomorphic-fetch
const fetch = require("isomorphic-fetch");
const { createWriteStream } = require("fs");

async function fetchPokemon() { // Create a function named ‘fetchPokemon’ that uses isomorphic-fetch to fetch the array of pokemon objects
    const res = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    const arrayBuffer = await res.arrayBuffer();

    const writeStream = createWriteStream("./pokemon.json"); // Use the createWriteStream method to create a write stream using an new file named ‘pokemon.json’ in your project

    writeStream.write(buffer); //Use the write method to populate the json file with the data from your fetch request

};

fetchPokemon();