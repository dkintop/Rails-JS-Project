class Train {
  constructor(fokemon_id) {
    this.fokemon_id = fokemon_id;
    this.logit();
  }
  //Train class instance created when clicking train button on card. eventlistener and DOM element added in fokemons.js createCard()
  logit() {
    console.log(this.fokemon_id); // proves that Train constructor is triggered correctly when clicking train button on card
  }
}
