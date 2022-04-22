var one = document.getElementsByClassName('link')
one.onclick = () => {
   alert("click")
}

const people = [
    {name:'Vladilen',budget:4200},
    {name:'Vladilen',budget:3000},
    {name:'Vladilen',budget:3500}
]

const person = people.find(function(person) {
    return person.budget === 3500
})
console.log(person)