const ul = document.querySelector("ul");
const games = [
    {
        name: "Apex",
        age: 3,
        main: "Bloodhound"
    },
    {
        name: "Overwatch",
        age: 6,
        main: "Baptise"
    }
];
/* How to build a template
const li = `
    <li>
        <p>Name: ${games[0].name}</p>
        <p>Age: ${games[0].age}</p>
        <p>Main: ${games[0].main}</p>
    </li>
 `
*/
const numbers = [1,2,3,4,5,6];
const doubled = numbers.map(number => number * 2);
console.log(doubled);

const template = games.map(games => `
<li>
    <p>Name: ${games.name}</p>
    <p>Age: ${games.age}</p>
    <p>Main: ${games.main}</p>
</li>
`);
console.log(template);
ul.innerHTML = template.join('');