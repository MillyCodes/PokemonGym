class Trainer {
    constructor (name){
        this.name = name;
        this.myPokemonList = {};
    }

    all() {
        console.log(this.party);
    }

    add(poke) {
        return axios.get(`https://pokeapi-nycda.firebaseio.com/pokemon/${poke}.json`).then((response) => {

            let data = response.data;

            let name = data.name;
            let hp = data.stats[5].base_stat
            let attack = data.stats[4].base_stat;
            let defense = data.stats[3].base_stat;
            let abilities = data.abilities.map((element) => element.ability.name);
            let sprite = data.sprites.front_default;
            let newPoke = new Pokemon(name, sprite, hp, attack, defense, abilities);
            console.log(`${poke} added sucessfully`);
            console.log(newPoke)
            this.myPokemonList[newPoke.name] = newPoke
        });
    }
}

class Pokemon {
    constructor(name, sprite, hp, attack, defense, abilities) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.sprite = sprite;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

let PokeTom = new Trainer();
let MillyFlannery = new Trainer();
let Marian = new Trainer();

Promise.all([
    MillyFlannery.add(5),
    MillyFlannery.add(37),
    MillyFlannery.add(79),
    Marian.add(265),
    Marian.add(147),
    Marian.add(506),
    PokeTom.add(45),
    PokeTom.add(3),
    PokeTom.add(89),
  ]).then(() => {
    // console.log(MillyFlannery.all())
    // console.log(Marian.all());
    // console.log(PokeTom.all());
    renderList1(MillyFlannery);
    renderList2(Marian);
    renderList3(PokeTom);

  });

// render handlebars function
let theTemplateScript = $("#pokemon-template").html();
// Compile the template
let theTemplate = Handlebars.compile(theTemplateScript);


function renderList1(trainer){
    let pokeList = trainer.myPokemonList;
    let context = {
      content: pokeList
    };
  
    // Pass my data to the template
    const theCompiledHtml = theTemplate(context);
  
    // Add the compiled html to the page
    // Why use jQuery here? DOMElement.append('htmlString') doesn't transform the html string 
    // into dom elements $jqueryElement.append('htmlString') does
    let container = $('#pokemon-container1')
    console.log(theCompiledHtml)
    container.append(theCompiledHtml);
  }
  
  function renderList2(trainer){
    let pokeList = trainer.myPokemonList;
    let context = {
      content: pokeList
    };
  
    // Pass my data to the template
    const theCompiledHtml = theTemplate(context);
  
    // Add the compiled html to the page
    // Why use jQuery here? DOMElement.append('htmlString') doesn't transform the html string 
    // into dom elements $jqueryElement.append('htmlString') does
    let container = $('#pokemon-container2')
    console.log(theCompiledHtml)
    container.append(theCompiledHtml);
    }

    function renderList3(trainer){
        let pokeList = trainer.myPokemonList;
        let context = {
          content: pokeList
        };
      
        // Pass my data to the template
        const theCompiledHtml = theTemplate(context);
      
        // Add the compiled html to the page
        // Why use jQuery here? DOMElement.append('htmlString') doesn't transform the html string 
        // into dom elements $jqueryElement.append('htmlString') does
        let container = $('#pokemon-container3')
        console.log(theCompiledHtml)
        container.append(theCompiledHtml);
    }
