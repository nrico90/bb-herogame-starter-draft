// Write your JS here

let heroname = prompt("enter your hero name", "Daenerys");

//declare a variable
//name property, string
//heroic property, boolean
//inventory property, array
// health property, number
// weapon property, object with string and number
let hero = {
    name: heroname,
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type:"", damage: 2}
}
console.log(hero)//check


// let bad = {
//     name: "Juanjo",
//     heroic: false,
//     inventory: [],
//     health: 10,
//     weapon: {type:"", damage: 2}
// }

//a parameter: person
//reassigns health to 10
//alert if health is 10
//condition when click reset the health
function rest (person) {
    if (person.health === 10) {
       alert("health already has the value 10") 
    } else person.health = 10
    return person
}
//console.log(rest(hero))

//create a weapon(dagger) 
let dagger = {type:"dagger", damage: 2}
let sword = {type:"sword", damage: 5}

//a parameter: person and weapon
//add the weapon to the inventory= person.inventory.push(weapon)
function pickUpItem (person, weapon) {
    if (weapon) {
        person.inventory.push(weapon)
    } else return 0
}

//a parameter person
//takes the first element in inventory and moves to the weapon
function equipWeapon (person) {
      if (person.inventory[0]) {
            person.weapon = person.inventory[0]  
      } else return 0
}


//Allow people to change the name of their hero, you can use window.prompt or use an input element. Be careful using a form because using a form might refresh the page.


const newName = document.createElement('span')
const h1title = document.getElementById("title")

newName.innerHTML = hero.name
h1title.appendChild(newName)
console.log(newName);
