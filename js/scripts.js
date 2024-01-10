let pokemonRepository = (function  () {

let pokemonList =
[
    {name: 'Blastoise', height: 1.6, type: ['water']},//pokemon1 pokemonList[0]
    {name: 'Dugtrio', height: 0.7, type: ['ground']},//pokemon2 pokemonList[1]
    {name: 'Pidgeot', height: 1.5, type: ['flying','normal']},//pokemon3 pokemonList[2]
    {name: 'Charzard', height: 1.2, type: ['fire', 'flying']}
]

function getAll (){
    return pokemonList;
}

function add(pokemon){
        pokemonList.push(pokemon)    
}

function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");//selects pokemonlist and links with pokemon-list in index.html
    let listpokemon = document.createElement("li");//creates  a new li 
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    //attaching button to listpokemon.
    listpokemon.appendChild(button);
    //attaching listpokemon to pokemonlist
    pokemonList.appendChild(listpokemon);

    button.addEventListener('click', function(event){
        showDetails(pokemon)
    })

}

function showDetails(pokemon){
    console.log(pokemon.name + pokemon.height + pokemon.type)
    let createInfo = document.createElement('p')
}








return{
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
};

})();

console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon){
pokemonRepository.addListItem(pokemon);
});






// //adding a title variable
// let mainTitle = document.querySelector('h1');// to see if selected do : console.log(mainTitle)
// mainTitle.innerText = "helloworld";
// console.log(mainTitle);


// //adding a container varibale
// let container = document.querySelector('.container')//without the dot, it will not be able to find the container. when we say the dot, it says its a class, and searches for that class.
// container.innerHTML = "<button>hello</button>"

// //creating a button
// let button = document.createElement('button')
// button.innerText = 'Click Me';
// container.appendChild(button)

// //add element to remove varibale
// let elementToRemove = document.querySelector('p')
// elementToRemove.parentElement.removeChild(elementToRemove);

// function printPokemon(item){
//     document.write(item.name + ' (' + item.height + ') ' + item.type + ' ')
//     console.log(item.name + ' (' + item.height + ') ' + item.type)

// };
//  pokemonList.forEach(function(user){
//     document.write(user.name + user.height + user.type);
//  });

// for(let i = 0; i <= pokemonList.length; i++){
//     if (pokemonList[i].height >= 1) {
//         document.write(pokemonList[i].name + ' (' + pokemonList[i].height + ')' + " - Sheesh! What a big Pokemon!" )
//     }
//     else{
//         document.write(pokemonList[i].name + ' (' + pokemonList[i].height + ')')
//     }
// } 