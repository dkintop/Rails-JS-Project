class TrainerAdapter {
  constructor(fokemon_id) {
    this.baseURL = "http://localhost:3000/trainers";
    this.getTrainersURL = `http://localhost:3000/fokemons/${fokemon_id}`;
  }

  createTrainer(name, fokemon_id) {
    const trainer = {
      name: name,
      fokemon_id: fokemon_id
    };

    return fetch(this.baseURL, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ trainer })
    });
  }

  getTrainers() {
    return fetch(this.getTrainersURL).then(res => res.json());
  }
}
