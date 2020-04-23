// 1. function string boolean
console.log('******** Nr1 *********');

const str = 'As Moku JavaScript';
const stringSearch = (str) => (str.toLowerCase().includes('moku'));
console.log(stringSearch(str));

// 2. Lottery
console.log('******** Nr2 *********');
const h3 = document.querySelector('h3');
document.forms.lottery.addEventListener('submit', event=>{
    event.preventDefault();
    const name = event.target.elements.name.value;
    const age = Number(event.target.elements.age.value);
    const check = document.getElementById('check');
    console.log(check.checked);

    if (check.checked === true && age >= 18){
        h3.textContent = `${name} successfully registered in the lottery!`;
    }else if(check.checked === false){
        alert('You did not agree to the rules!');
    }else{
        alert('You are not adult');
    }
})

// 3 ASCII L
console.log('******** Nr3 *********');

const L = 7;
const div = document.querySelector('.ascii');
const asciiL = (L) =>{
    for (let i = 0; i < (L-1); i++) {
        const h2 = document.createElement('h2');
        h2.textContent = 'L';
        div.append(h2);
    }
    const h2 = document.createElement('h2');
    for (let i = 0; i < L; i++) {
        h2.textContent += 'L'
    }
    div.append(h2);
}
asciiL(L);

// 4 function names Sort
console.log('******** Nr4 *********');

let nameArr = ['Petras', 'Antanas', 'Jonas', 'Vitalijus', 'Tomas'];
const stringSort = (array) => array.sort((a, b)=> a.length - b.length);
console.log(stringSort(nameArr));

// 5 function Time
console.log('******** Nr5 *********');

let newArr = [];
function getTime(startTime, endTime, sessionTime) {
    for (let i = startTime; i < endTime; i += sessionTime) {
        const hours = (Math.floor(i / 60)).toString();
        const minutes = ((i % 60).toString() + '0').slice(0, 2);
        newArr.push(`${hours}:${minutes}`) ;
    }
    return newArr;
}
console.log(getTime(480, 600,30));

// 6 Two function
console.log('******** Nr6 *********');

const names = ['Petras geras vyras', 'Jonas gudrus', 'Kestas vaziuoja namo'];
let namesArr = [];

localStorage.setItem('products', JSON.stringify(names));

const addToLocalStorage = (string) =>{
    let array = JSON.parse(localStorage.getItem('products'));
    array.unshift(string);
    localStorage.setItem('products', JSON.stringify(array));
};

addToLocalStorage('Giedrius saunuolis');

const filterLocalStorage = (string) => {
    let products = JSON.parse(localStorage.getItem('products'))
    products = products.filter(item => item.toLowerCase().includes(string.toLowerCase()));
    return products;
};

console.log(localStorage.getItem('products'));
console.log(filterLocalStorage('Kestas'));

// 7 Card API
console.log('******** Nr7 *********');

const img = document.querySelector('.card > img');
const span = document.querySelectorAll('.card > span');
const p = document.querySelector('.card > p');

fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(response => {

        response.results.forEach(item =>{
            console.log(item);
            img.src = item.picture.large;
            span[0].textContent = `${item.name.first}  ${item.name.last}`;
            span[1].textContent = `${item.registered.age} years old`;
            span[1].style.color = 'cyan'
            p.textContent = item.email;
        })
    })





