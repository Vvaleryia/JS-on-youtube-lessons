const names = ['Lera', 'Varvara', 'Piotr', 'Pavel'];

names.push('Mark')  // fast
names.unshift('Maks')  // slowly, changes each index
const name = names.shift() // delete first element from the array and places this value in a variable
const name1 = names.pop() // removes the last element from the array and places this value in a variable


console.log(names.reverse()) // переворачивает массив, он мутирует наш оригинальный массив
console.log(names.toReversed()) // return new array. not mutation original array

const letters = ['j', 'a', 'w', 's'];

console.log(letters.sort())


console.log(names.splice(2, 1))
// The first number tells us what index to find in the array
// second number tells us how many items to delete
// this array changes original array

const greatWoman = 'Varvara';// we need to understand if this element is in the array
const index = names.indexOf(greatWoman)
console.log(index)


const capitalNames = names.map((name, index) => {
    if (index === 1) {
        return 'Varvara'
    }
    return name
})

console.log(names.includes('Pavel'))
// checks is there is an element in the array
//if there is return true
//if there is no return false
console.log(names.indexOf('Pavel') !== -1) // return true


const people = [
    {
        name: 'Lera',
        budget: 1200
    },
    {
        name: 'Valera',
        budget: 15200
    },
    {
        name: 'Varvara',
        budget: 7200
    },
    {
        name: 'Olya',
        budget: 100
    },
]
// method indexOf will not work with object,works with simple value

let findPerson

for (let person of people) {
    if (person.budget === 100) {
        findPerson = person
    }
}
// the second option

people.find((person) => {
    // if(person.budget === 100){
    //     return true
    // }
    return person.budget === 100
})
// we have to return boolean value(мы должны)
const finded = people.findIndex( (person) => {
    return person.budget === 100
})
console.log(finded)

const filtered = people.filter((people) => {
    return people.budget > 5000
})

const sumBudget = people
    .filter(p => p> 500)
    .map(p => p.budget)
    .reduce((acc, p) => acc + p,0)

const string = 'Hello, how are you?' // writing reverse string
//method split makes an array from a string
const reversed = string.split('').toReversed().join('')


