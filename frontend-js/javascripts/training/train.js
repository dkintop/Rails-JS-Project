class Train {
  constructor(fokemon_id) {
    this.fokemon_id = fokemon_id;
    this.trainers = [];
    this.displayAvatarOnTrainingField();
    this.displalyStats();
    this.addEventListeners();
    this.addFokemonIdToForm(this.fokemon_id);
  }
  //Train class instance created when clicking train button on cardand passes in an argument of the fokemon id associated with that card. eventlistener and DOM element added in fokemons.js createCard()
  addEventListeners() {
    this.trainerForm = document.getElementById("new-trainer-form");
    this.trainerForm.addEventListener("submit", this.createTrainer);
    console.log("event listeners added");
  }

  createTrainer(e) {
    e.preventDefault();
    console.log("trainerr is being created");
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
    hiddenField.setAttribute("value", fokemon_id);
    form.appendChild(hiddenField);
  }
}
//try copying what cernan does for his create action. might need to use a form.

//create:
// const trainer = {
//   name: name,
//   fokemon_id: this.fokemon_id
// };

// return fetch("http://localhost:3000/trainers", {
//   method: "post",
//   headers: {
//     "content-type": "application/json"
//   },
//   body: JSON.stringify({ trainer })
// });
