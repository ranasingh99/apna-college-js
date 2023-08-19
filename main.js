// functions in js

let bread1 = prompt('which bread would you like to have?');
let veggies1 = prompt('which veggies would you like to have?');
let sauce1 = prompt('which sauces would you like to have?');

function makeSandwich(bread,veggies,sauces){
    let sandwich = bread+" "+veggies+" "+sauces;
    return sandwich;
}

let vegSandwich = makeSandwich(bread1,veggies1,sauce1);
// let mainHeading  = document.getElementById('main-heading');
// let heading1 = document.createElement('heading');
// heading.textContent = vegSandwich;
// mainHeading.appendChild(heading1);

console.log(vegSandwich);
