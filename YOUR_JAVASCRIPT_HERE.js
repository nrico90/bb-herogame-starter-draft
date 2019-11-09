// Write your JS here
let hero = {
    name: "Mulan",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type:"", damage: 2}
}
console.log(hero); 


function rest (hero) {
    if (hero.health === 10) {
       alert ("health already has the value 10") 
    } else hero.health = 10
    
    return hero
}

let weapon = {type:"dagger", damage: 2}


function pickUpItem (hero, weapon) {
   
    hero.inventory.push(weapon)
    weapon = {type: "sword", damage: 5}
    
}
//weapon = 
function equipWeapon (hero) {
    
}