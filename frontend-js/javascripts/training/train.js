class Train {
  constructor(fokemon_id) {
    this.fokemon_id = fokemon_id;
    this.displayAvatarOnTrainingField();
    this.displalyStats();
  }
  //Train class instance created when clicking train button on cardand passes in an argument of the fokemon id associated with that card. eventlistener and DOM element added in fokemons.js createCard()
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

    let statsContainer = document.createElement("div");
    statsContainer.setAttribute("id", "stats-container");
    statsContainer.innerHTML = `${attackPoints.innerHTML} <br> ${hitPoints.innerHTML}`;

    let parent = document.getElementById("avatar-container");
    parent.appendChild(statsContainer);
  }
}
