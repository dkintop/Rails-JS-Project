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

    let newFokemon = {
      name: name,
      element_type: elementType,
      hit_points: hitPoints,
      attack_points: attackPoints,
      avatar: avatar
    };

    //changes to make elements appear on DOM without page refresh.

    this.adapter.createFokemon(newFokemon).then(
      this.adapter.getFokemon().then(fokemons => {
        this.fokemons.push(new Fokemon(fokemons[fokemons.length - 1])); //update fokemons array
        this.createCard(fokemons[fokemons.length - 1]); //creaates card and appends it to the DOM
      })
    );
    // this.createCard(newFokemon); line of code used initially to render card to DOM. issue was that since id was undefined at this point things were getting messed up since the data - id of the card div was also being set to undefined.
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
    card.setAttribute("data-id", fokemon.id);

    let name = document.createElement("DIV");
    name.setAttribute("id", "fokemon_name");
    name.innerHTML = `${fokemon.name.charAt(0).toUpperCase() +
      fokemon.name.slice(1)}`;

    let element_type = document.createElement("DIV");
    element_type.setAttribute("id", "element_type");
    element_type.innerHTML = `Element: ${fokemon.element_type}`;

    let hit_points = document.createElement("DIV");
    hit_points.setAttribute("id", `hit_points${fokemon.id}`);
    hit_points.innerHTML = `HP: ${fokemon.hit_points}`;

    let attack_points = document.createElement("DIV");
    attack_points.setAttribute("id", `attack_points${fokemon.id}`);
    attack_points.innerHTML = `Attack Points: ${fokemon.attack_points}`;

    let avatar = document.createElement("IMG");
    avatar.setAttribute("class", "avatar");
    avatar.setAttribute("id", `avatar${fokemon.id}`);
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
    train_button.setAttribute("class", "training_button");
    train_button.setAttribute("data-id", `${fokemon.id}`);
    train_button.innerHTML = "Train";
    train_button.addEventListener("click", function() {
      new Train(fokemon.id); // takes in fokemon_id to pass to constructor method of Train
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
        })
        .then(() => {
          let card = document.querySelector(`[data-id = "${fokemon.id}"]`); //new code to allow for deleting from DOM without refresh
          let parent = document.getElementById("index-container");
          parent.removeChild(card);
        });
    });
  }
}
