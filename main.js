// 1 
let exH2 = document.querySelectorAll('h2')[0]
console.log(exH2.textContent);

// 2 
let replaceEx = document.querySelector('h2').replaceWith("Exercice 1")

// 3 
let leP = document.querySelector('p')
console.log(leP);
// Deux méthodes
// Première :
// leP.innerHTML+="coucou";
// Deuxième :
let node = document.createTextNode("coucou ça va?")
leP.appendChild(node)

// 4
let sec1 = document.querySelectorAll('section')[0]
console.log(sec1.id);

// 5
let firstH1 = document.querySelector('h1')
console.log(firstH1.className);

// 6
let tousLesH1 = document.querySelectorAll('h1')

tousLesH1.forEach(el => {
    console.log(el.className);
});

// 7
let firstInput = document.querySelector('input')
console.log(firstInput.getAttributeNames());

// 8 
console.log(firstInput.getAttribute("type"));

// 9 
let input2 = document.querySelector('#inputPassword3')
console.log(input2);
input2.setAttribute("type", "color")
console.log(input2);