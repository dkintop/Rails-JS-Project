class Train {
  constructor(fokemon_id) {
    this.fokemon_id = fokemon_id;
    this.fokemon_adapter = new FokemonAdapter();
    this.fokemon = [];

    // this.fetchFokemon();
  }
  //Train class instance created when clicking train button on cardand passes in an argument of the fokemon id associated with that card. eventlistener and DOM element added in fokemons.js createCard()
}
