let introText = document.getElementById("intro-graph");

document.addEventListener("scroll", (event) => {
    if(window.scrollY > 320) {
        introText.style.visibility = "initial";
        introText.classList.add("slideInRight");
      }
});


let btn = document.getElementById('pwr');
let mp4 = document.getElementById('frame');
let x =0;

btn.onclick = (e) => {
//    mp4.play()
   if (x===0) {
    mp4.play(); 
    x = 1;
   }
    else if (x === 1){
    mp4.pause(); 
  x = 0;
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