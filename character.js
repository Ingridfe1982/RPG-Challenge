//Use this script to generate your character
class Person{
    constructor(name,race,item){
        this.name = name;
        this.race = race;
        this.item = item;
        if (race === "Orc") {
            this.currenthealth = 140;
            this.maxHealth =140;
        }
        else {
            this.currenthealth = 100;
            this.maxHealth = 100;
        }
        
        this.min = 3;
        this.maxDamage = 20;
        this.maxHealing = 30;
    
    }
    name;
    race;
    item;
    currenthealth;
    maxHealth;
    min;
    maxDamage;
    maxHealing;
    heal = function(valeur){
        if (valeur > this.maxHealing) {
            valeur = this.maxHealing;
        }
        if (this.item === "Staff"){
            valeur *= 1.2;
        }
        valeur = Math.floor(valeur);
        document.getElementById("log").innerHTML += '<br>'+this.name + " heals "+valeur+" hp";
        this.currenthealth += valeur;
        if (this.currenthealth > this.maxHealth) {
            this.currenthealth = this.maxHealth;
        }
    };
    damage = function(valeur){
        if (this.item === "Boots"){
            let esquive = Math.random()*100;
            if (esquive <= 30){
                document.getElementById("log").innerHTML += '<br>'+this.name + " dodge the attack";
                return;
            }
        }
        if (this.race === "Human") {
            valeur *= 0.8;
        }
        valeur = Math.floor(valeur);
        document.getElementById("log").innerHTML += '<br>'+this.name + " is hit for "+valeur+" hp";
        this.currenthealth -= valeur;
        if (this.currenthealth <0) {
            this.currenthealth = 0;
        }
    };
    

    displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}

function refreshPersos(){
    affichePerso1();
    affichePerso2();
}

function affichePerso1(){
    let baseElement = document.getElementById("statPerso1");
    baseElement.querySelector(".nomPerso").innerHTML = perso1.name;
    baseElement.querySelector(".racePerso").innerHTML = perso1.race;
    baseElement.querySelector(".itemsPerso").innerHTML = perso1.item;
    baseElement.querySelector(".pvActuel").innerHTML = perso1.currenthealth;
    baseElement.querySelector(".pvMax").innerHTML = perso1.maxHealth;
}

function affichePerso2(){
    let baseElement = document.getElementById("statPerso2");
    baseElement.querySelector(".nomPerso").innerHTML = perso2.name;
    baseElement.querySelector(".racePerso").innerHTML = perso2.race;
    baseElement.querySelector(".itemsPerso").innerHTML = perso2.item;
    baseElement.querySelector(".pvActuel").innerHTML = perso2.currenthealth;
    baseElement.querySelector(".pvMax").innerHTML = perso2.maxHealth;
}
//Execute la fonction applyPersoToTag avec comme valeur pour personnage la valeur de perso1 et comme valeur pour idTag 'statPerso1'
//applyPersoToTag(perso1,'statPerso1');