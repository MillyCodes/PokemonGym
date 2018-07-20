class Trainer {
    constructor (){
        this.party = [];
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
            this.party.push(newPoke);
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
    console.log(MillyFlannery.all())
    console.log(Marian.all());
    console.log(PokeTom.all());
  });














//------------------ABILITY TYPOGRAPHY------------------
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