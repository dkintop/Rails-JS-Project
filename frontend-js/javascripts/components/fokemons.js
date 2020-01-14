class Fokemons {
  constructor() {
    this.fokemons = [];
    this.adapter = new FokemonAdapter();
    //this.bindEventListeners();
    this.fetchAndLoadFokemons();
  }

  fetchAndLoadFokemons() {
    this.adapter.getFokemon().then(fokemons => {
      console.log(fokemons);
      return fokemons;
    });
  }
}
