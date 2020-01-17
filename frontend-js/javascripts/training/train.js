class Train {
  constructor(fokemon_id) {
    this.adapter = new TrainerAdapter();
    this.fokemon_id = fokemon_id;
    this.trainers = [];
    this.displayAvatarOnTrainingField();
    this.displalyStats();
    this.addFokemonIdToForm(this.fokemon_id);
    this.addEventListeners();
  }
  //Train class instance created when clicking train button on cardand passes in an argument of the fokemon id associated with that card. eventlistener and DOM element added in fokemons.js createCard()
  addEventListeners() {
    this.trainerForm = document.getElementById("new-trainer-form");
    this.name = document.getElementById("trainer-name");
    this.fokemonId = document.getElementById("fokemon_id");
    this.trainerForm.addEventListener("submit", this.createTrainer.bind(this));
    console.log("event listeners added");
  }

  createTrainer(e) {
    e.preventDefault();
    const name = this.name.value;
    const fokemonId = this.fokemonId.value;

    this.adapter.createTrainer(name, fokemonId);

    console.log("createTrainer triggered");
  }

  getAvatarSrc() {
    let avatar = document.getElementById(`avatar${this.fokemon_id}`);
    return avatar.getAttribute("src");
  }

  displayAvatarOnTrainingField() {
    let src = this.getAvatarSrc();
    let container = document.getElementById("avatar-container");
    let trainingImage = document.createElement("img");
    trainingImage.setAttribute("src", `${src}`);
    trainingImage.setAttribute("id", "trainingImage");
    trainingImage.setAttribute("class", "avatar");
    container.appendChild(trainingImage);
  }

  displalyStats() {
    let attackPoints = document.getElementById(
      `attack_points${this.fokemon_id}`
    );
    let hitPoints = document.getElementById(`hit_points${this.fokemon_id}`);

    let attackPointsContainer = document.createElement("div");
    attackPointsContainer.setAttribute("id", "attack-points-container");
    attackPointsContainer.innerHTML = `${attackPoints.innerHTML} <br>`;

    let hitPointsContainer = document.createElement("div");
    hitPointsContainer.setAttribute("id", "hit-points-container");
    hitPointsContainer.innerHTML = `${hitPoints.innerHTML}`;

    let parent = document.getElementById("avatar-container");
    parent.appendChild(attackPointsContainer);
    parent.appendChild(hitPointsContainer);
  }

  addFokemonIdToForm(fokemon_id) {
    let form = document.getElementById("new-trainer-form");
    let hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("id", "fokemon_id");
    hiddenField.setAttribute("value", fokemon_id);
    form.appendChild(hiddenField);
  }
}
//try copying what cernan does for his create action. might need to use a form.
