class Train {
  constructor(fokemon_id) {
    this.fokemon_id = fokemon_id;
    this.trainers = [];
    this.displayAvatarOnTrainingField();
    this.displalyStats();
    this.addEventListeners();
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

  createTrainer(name) {
    const trainer = {
      name: name,
      fokemon_id: this.fokemon_id
    };

    return fetch("http://localhost:3000/trainers", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ trainer })
    });
  }

  addEventListeners() {
    debugger;
    let name = document.getElementById("trainer-name").value;
    let trainButton = document.getElementById("train-button");
    trainButton.addEventListener("click", function() {
      const trainer = {
        name: name,
        fokemon_id: this.fokemon_id
      };

      return fetch("http://localhost:3000/trainers", {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ trainer })
      });
      console.log("button works");
    });
  }
}

//   return fetch(`http://localhost:3000/fokemons/${fokemon.id}`, {
//     method: "delete"
//   })
//     .then(response => response.json())
//     .then(json => {
//       return json;
//     });
// });
