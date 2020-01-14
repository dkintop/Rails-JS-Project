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
    name.innerHTML = `${fokemon.name.charAt(0).toUpperCase() +
      fokemon.name.slice(1)}`;
    let element_type = document.createElement("DIV");
    element_type.setAttribute("id", "element_type");
    element_type.innerHTML = `Element: ${fokemon.element_type}`;
    let hit_points = document.createElement("DIV");
    hit_points.setAttribute("id", "hit_points");
    hit_points.innerHTML = `HP: ${fokemon.hit_points}`;
    let attack_points = document.createElement("DIV");
    attack_points.setAttribute("id", "attack_points");
    attack_points.innerHTML = `Attack Points: ${fokemon.attack_points}`;

    let avatar = document.createElement("IMG");
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", fokemon.avatar);

    const container = document.getElementById("index-container");

    let card_elements = [name, avatar, hit_points, element_type, attack_points];

    card_elements.forEach(element => parent.appendChild(element));

    document.querySelector("#index-container").appendChild(parent);
  }
}
