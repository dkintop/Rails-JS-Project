class FokemonAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/fokemons";
  }

  getFokemon() {
    return fetch(this.baseURL).then(res => res.json());
  }

  createFokemon(fokemon) {
    return fetch(this.baseURL, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ fokemon })
    });
  }
}
