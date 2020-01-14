class FokemonAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/fokemons";
  }

  getFokemon() {
    return fetch(this.baseURL).then(res => res.json());
  }
}
