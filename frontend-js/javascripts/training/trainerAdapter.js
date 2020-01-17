class TrainerAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/trainers";
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
}
