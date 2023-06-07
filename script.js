
let img = document.querySelector("img");

let nome_input = document.querySelector("#nome_input");
let tipo_span = document.querySelector("#tipo_span");
let peso_span = document.querySelector("#peso_span");

async function busca() {
  let nome = nome_input.value.toLowerCase().trim().replace(" ", "-");
  let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome);
  console.log(res);
  let json = await res.json();

  img.src = json.sprites.front_default;

  peso_span.innerText = json.weight + "kg";

  let tipos = "";

  json.types.forEach(t => {
    tipos = tipos + " " + t.type.name;
  })

  tipo_span.innerText = tipos;
}