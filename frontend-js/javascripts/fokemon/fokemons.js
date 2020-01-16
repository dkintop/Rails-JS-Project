class Fokemons {
  constructor() {
    this.fokemons = [];
    this.adapter = new FokemonAdapter();
    this.fetchAndLoadFokemons();
    this.initBindingsAndEventListeners();
  }

  initBindingsAndEventListeners() {
    this.fokemonForm = document.getElementById("new-fokemon-form");
    this.fokemonForm.addEventListener("submit", this.createFokemon.bind(this));
  }

  createFokemon(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const elementType = document.getElementById("element_type").value;
    const hitPoints = document.getElementById("hit_points").value;
    const attackPoints = document.getElementById("attack_points").value;
    const avatar = document.getElementById("avatar").value;

    this.adapter.createFokemon({
      name: name,
      element_type: elementType,
      hit_points: hitPoints,
      attack_points: attackPoints,
      avatar: avatar
    });
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
    this.fokemons.forEach(fokemon => this.createCard(fokemon));
  }

  createCard(fokemon) {
    let card = document.createElement("DIV");
    card.setAttribute("class", "card");

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
    avatar.setAttribute("data-id", fokemon.id);

    const container = document.getElementById("index-container");

    let delete_button = document.createElement("BUTTON");
    delete_button.setAttribute("id", `delete_button${fokemon.id}`);
    delete_button.setAttribute("class", "delete_button");
    delete_button.setAttribute("data-id", `${fokemon.id}`);
    delete_button.innerHTML = "X";

    let train_button = document.createElement("BUTTON");
    train_button.setAttribute("id", `train_button${fokemon.id}`);
    train_button.setAttribute("class", "train_button");
    train_button.setAttribute("data-id", `${fokemon.id}`);
    train_button.innerHTML = "Train";
    train_button.addEventListener("click", function() {
      new Train();
    });

    let card_elements = [
      name,
      avatar,
      hit_points,
      element_type,
      attack_points,
      train_button,
      delete_button
    ];

    card_elements.forEach(element => card.appendChild(element));

    document.querySelector("#index-container").appendChild(card);
    //event listener for delete button function added here due to errors

    this.get_delete_button = document.getElementById(
      `delete_button${fokemon.id}`
    );
    this.get_delete_button.addEventListener("click", function() {
      return fetch(`http://localhost:3000/fokemons/${fokemon.id}`, {
        method: "delete"
      })
        .then(response => response.json())
        .then(json => {
          return json;
        });
    });
  }
}
