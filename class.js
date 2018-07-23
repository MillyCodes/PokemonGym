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
            console.log(newPoke);
            this.myPokemonList[newPoke.name] = newPoke;

            // for (let el of abilities){
            //     if(el.includes("-")){
            //         let miniArray = el.split("");
            //         miniArray.splice(el.indexOf("-"), 1, " ");
            //         el = miniArray.join("");
            //         el = el.charAt(0).toUpperCase() + el.slice(1, el.indexOf(" ") + 1) + el.charAt(el.indexOf(" ") + 1).toUpperCase() + el.slice(el.indexOf(" ") + 2);
            //     } else {
            //         el = el.charAt(0).toUpperCase() + el.slice(1, el.length - 1);
            //     }
            // }
        });
    }
}

// let ability1 = PokeTom.party[targetPoke].abilities[0];
//     if(ability1.includes("-")){
//         let abilityArray = ability1.split("");
//         console.log(abilityArray.indexOf("-") + 1);
//         abilityArray.splice(ability1.indexOf("-"), 1, " ");
//         ability1 = abilityArray.join("");
//         abilityLetter = ability1.charAt(ability1.indexOf(" ") + 1).toUpperCase();
//         ability1 = ability1.charAt(0).toUpperCase() + ability1.slice(1, ability1.indexOf(" ") + 1) + ability1.charAt(ability1.indexOf(" ") + 1).toUpperCase() + ability1.slice(ability1.indexOf(" ") + 2);
//     };

//     let ability2 = PokeTom.party[targetPoke].abilities[1];
//     if(ability2.includes("-")){
//         let abilityArray = ability2.split("");
//         console.log(abilityArray.indexOf("-") + 1);
//         abilityArray.splice(ability2.indexOf("-"), 1, " ");
//         ability2 = abilityArray.join("");
//         abilityLetter = ability2.charAt(ability2.indexOf(" ") + 1).toUpperCase();
//         ability2 = ability2.charAt(0).toUpperCase() + ability2.slice(1, ability2.indexOf(" ") + 1) + ability2.charAt(ability2.indexOf(" ") + 1).toUpperCase() + ability2.slice(ability2.indexOf(" ") + 2);
//     };

//     abilityDisplay1.innerText = ability1;
//     abilityDisplay2.innerText = ability2;

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