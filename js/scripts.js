
let pokemonList =[
    {name: 'Blastoise', height: 1.6, type: ['water']},//pokemon1 pokemonList[0]
    {name: 'Dugtrio', height: 0.7, type: ['ground']},//pokemon2 pokemonList[1]
    {name: 'Pidgeot', height: 1.5, type: ['flying','normal']}//pokemon3 pokemonList[2]
]

// for(let i = 0; i <= pokemonList.length; i++){
//     if (pokemonList[i].height >= 1) {
//         document.write(pokemonList[i].name + ' (' + pokemonList[i].height + ')' + " - Sheesh! What a big Pokemon!" )
//     }
//     else{
//         document.write(pokemonList[i].name + ' (' + pokemonList[i].height + ')')
//     }
// } 

pokemonList.forEach(printPokemon);
function printPokemon(item){
    document.write(item.name + ' (' + item.height + ')' + item.type)
    console.log(item.name + ' (' + item.height + ')' + item.type)
};


//  pokemonList.forEach(function(user){
//     document.write(user.name + user.height + user.type);
//  });


