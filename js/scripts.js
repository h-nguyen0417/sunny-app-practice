let pokemonList = [];
pokemonList =[
    {name: 'Blastoise', height: 1.6, type: ['water']},//pokemon1 pokemon[0]
    {name: 'Dugtrio', height: 0.7, type: ['ground']},//pokemon2 pokemon[1]
    {name: 'Pidgeot', height: 1.5, type: ['flying','normal']}//pokemon3 pokemon[2]
]

for(let i = 0; i <= pokemonList.length; i++){
    document.write(pokemonList[i].name + '(' + pokemonList[i].height + ')')
}