class Fokemons {
  constructor() {
    this.fokemons = [];
    this.adapter = new FokemonAdapter();
    //this.bindEventListeners();
    this.fetchAndLoadFokemons();
  }

  fetchAndLoadFokemons() {
    this.adapter
      .getFokemon()
      .then(fokemons => {
        fokemons.forEach(fokemon => this.fokemons.push(fokemon));
      })
      .then(() => {
        this.renderFokemons();
      });
  }

  renderFokemons() {
    const indexContainer = document.getElementById("index-container");
    indexContainer.innerHTML = "my fokemons here";
    console.log(`my fokemon are`, this.fokemons);
  }
}
