
// tableaux race & armes
let races = ["Human", "Orc", "Vampire", "Elf"];
let items = ["Boots", "Staff", "Sword", "Bow"];

function initselect() {
    let raceSelect1 = document.getElementById("racePerso1");
    let raceSelect2 = document.getElementById("racePerso2");
    for (let race of races) {
        // Crée une balise <option></option>
        let option = document.createElement("option");
        //Rajoute la valeur de race entre les balises
        option.appendChild(document.createTextNode(race));
        //Ajoute l'attribut value="XXX" ou XXX est la valeur de race
        option.value = race;
        //Ajoute la balise au select de races
        raceSelect1.appendChild(option);
        //Obligé de faire deux fois sinon il déplace la balise du select1 au select2
        option = document.createElement("option");
        option.appendChild(document.createTextNode(race));
        option.value = race;
        raceSelect2.appendChild(option);
    }
    
    let itemSelect1 = document.getElementById("itemsPerso1");
    let itemSelect2 = document.getElementById("itemsPerso2");
    for (let item of items) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(item));
        option.value = item;
        itemSelect1.appendChild(option);
        option = document.createElement("option");
        option.appendChild(document.createTextNode(item));
        option.value = item;
        itemSelect2.appendChild(option);
    }
}
initselect();

let perso1 = null;
// Récupère les données entrées pour personnage 1
function createPerso1 () {
    let nom = document.getElementById("nomPerso1").value;
    let race = document.getElementById("racePerso1").value;
    let item = document.getElementById("itemsPerso1").value;
    // alert(nom + " " + race + " " + item);
    perso1 = new Person(nom,race,item);
}
document.getElementById("button1").addEventListener("click",() => {
    createPerso1();
    let createDiv = document.getElementById("createPerso1Div");
    let statDiv = document.getElementById("statPerso1");
    // On rajoute la classe hidden qui cache l'élément grâce au CSS
    createDiv.classList.add("hidden");
    statDiv.classList.remove("hidden");
    affichePerso1();
    console.log(perso1);
});

let perso2 = null;
// Récupère les données entrées pour personnage 2
function createPerso2 () {
    let nom = document.getElementById("nomPerso2").value;
    let race = document.getElementById("racePerso2").value;
    let item = document.getElementById("itemsPerso2").value;
    // alert(nom + " " + race + " " + item);
    perso2 = new Person(nom,race,item);
}
document.getElementById("button2").addEventListener("click",() => {
    createPerso2();
    let createDiv = document.getElementById("createPerso2Div");
    let statDiv = document.getElementById("statPerso2");
    // On rajoute la classe hidden qui cache l'élément grâce au CSS
    createDiv.classList.add("hidden");
    statDiv.classList.remove("hidden");
    affichePerso2();
    console.log(perso2);
});

// Fonctions des boutons personnage 1
// Bouton hit perso 1
function hit1 () {
    let damage = perso1.maxDamage * Math.random();
    if (perso1.item === "Sword") {
        damage *= 1.3;
    }
    addToLog(perso1.name+" attack");
    perso2.damage(damage);

    if (perso1.item === "Bow") {
        let doubleAttaque = Math.random()*100;
        if (doubleAttaque <= 30){
            addToLog(perso1.name+ " does a double hit!")
            perso2.damage(damage);
        }
    }
}
document.getElementById("hit1").addEventListener("click", () => {
    hit1();
    refreshPersos();
});
// Bouton heal perso 1
function heal1 () {
    addToLog(perso1.name+" heal itself");
    let healing = perso1.maxHealing * Math.random();
    perso1.heal(healing);
}
document.getElementById("heal1").addEventListener("click", () => {
    heal1();
    refreshPersos();
});
// Bouton yield perso 1
function yield1 () {
    addToLog("A true " + perso1.race + " doesn't yield");
}
document.getElementById("yield1").addEventListener("click", () => {
    yield1();
    refreshPersos();
});

// Fonctions des boutons personnage 2
// Bouton hit perso 2
function hit2 () {
    let damage = perso2.maxDamage * Math.random();
    if (perso2.item === "Sword") {
        damage *= 1.3;
    }
    addToLog(perso2.name+" attack");
    perso1.damage(damage);

    if (perso2.item === "Bow") {
        let doubleAttaque = Math.random()*100;
        if (doubleAttaque <= 30){
            addToLog(perso2.name+ " does a double hit!")
            perso1.damage(damage);
        }
    }
}
document.getElementById("hit2").addEventListener("click", () => {
    hit2();
    refreshPersos();
});
// Bouton heal perso 2
function heal2 () {
    addToLog(perso2.name+" heal itself");
    let healing = perso2.maxHealing * Math.random();
    perso2.heal(healing);
}
document.getElementById("heal2").addEventListener("click", () => {
    heal2();
    refreshPersos();
});
// Bouton yield perso 2
function yield2 () {
    addToLog("A true " + perso2.race + " doesn't yield");

}
document.getElementById("yield2").addEventListener("click", () => {
    yield2();
    refreshPersos();
});

// Faire apparaître les différentes attaques dans le log
function addToLog(toLog){
    document.getElementById("log").innerHTML += "<br>"+toLog;
}
//Bottes : 30% chance to dodge an attack - OK
//Staff: 20% increase in healing - OK
//Sword 30% more damage - OK
// Bow : 30% chance to attack twice - OK

// Human : 20% less damage taken - OK
 //Orc : 40% more max health - OK
 //A FAIRE Elves 30% chance to reflect the attack back to the opponent. They take damage equal to 50% of the original hit.
 //A FAIRE Vampire 10% lifesteal from opponents current health at start of the vampire's turn. |


// A FAIRE
// Cacher les boutons d'actions quand les persos ne sont pas créés

// Afficher le log qu'une fois que les deux persos ont été créés
// -> Pour ça, quand on crée un perso vérifier que l'autre != null

