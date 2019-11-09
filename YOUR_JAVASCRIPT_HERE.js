// Write your JS here

//Allow people to change the name of their hero, you can use window.prompt or use an input element. Be careful using a form because using a form might refresh the page.
let heroname = prompt("What is your hero's name?", "");

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
       alert("Hey warrior, you already rested enoung. Healthy = 10") 
    } else person.health = 10
    displayStats(hero)
    return person
}
//console.log(rest(hero))

//create a weapon(dagger) 
let dagger = {type:"dagger", damage: 2}
// let sword = {type:"sword", damage: 5}

//a parameter: person and weapon
//add the weapon to the inventory= person.inventory.push(weapon)
function pickUpItem (person, weapon) {
    if (weapon) {
        person.inventory.push(weapon)
        displayStats(hero)
    } else return 0
}

//a parameter person
//takes the first element in inventory and moves to the weapon
function equipWeapon (person) {
      if (person.inventory[0]) {
            person.weapon = person.inventory[0]
            displayStats(hero)
      } else return 0
}

// - Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script


function displayStats(person) {
    //empty the content before displayStats
    const content = document.getElementById("content")
    content.innerHTML = ""

    //displays hero name
    const newName = document.createElement('h2')
    newName.innerHTML = hero.name
    content.appendChild(newName)

    //display the health
    const health = document.createElement('p')
    health.innerHTML = "Your health is " + hero.health
    content.appendChild(health)

    //display type of weapon
    const weapontype = document.createElement('p')
    weapontype.innerHTML = "Your weapon is " + hero.weapon.type
    content.appendChild(weapontype)
    
    //display damage of weapon
    const weapondamage = document.createElement('p')
    weapondamage.innerHTML = "Your weapon damage is " + hero.weapon.damage
    content.appendChild(weapondamage)

}
displayStats(hero)