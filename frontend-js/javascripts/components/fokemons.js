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
        fokemons.forEach(fokemon => this.fokemons.push(new Fokemon(fokemon)));
      })
      .then(() => {
        this.renderFokemons();
      });
  }

  renderFokemons() {
    const indexContainer = document.getElementById("index-container");
    this.fokemons.forEach(fokemon => this.createCard(fokemon));
  }

  createCard(fokemon) {
    let parent = document.createElement("DIV");
    parent.setAttribute("class", "card");

    let name = document.createElement("DIV");
    name.setAttribute("id", "fokemon_name");
    name.innerHTML = `${fokemon.name}`;
    let element_type = document.createElement("DIV");
    element_type.setAttribute("id", "element_type");
    element_type.innerHTML = `${fokemon.element_type}`;
    let hit_points = document.createElement("DIV");
    hit_points.setAttribute("id", "hit_points");
    hit_points.innerHTML = `${fokemon.hit_points}`;
    let attack_points = document.createElement("DIV");
    attack_points.setAttribute("id", "attack_points");
    attack_points.innerHTML = `${fokemon.attack_points}`;

    let avatar = document.createElement("IMG");
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", fokemon.avatar);

    const container = document.getElementById("index-container");

    let card_elements = [name, element_type, hit_points, attack_points, avatar];

    card_elements.forEach(element => parent.appendChild(element));

    document.querySelector("#index-container").appendChild(parent);
  }
}
