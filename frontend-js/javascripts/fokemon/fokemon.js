class Fokemon {
  constructor(fokemonJson) {
    this.id = fokemonJson.id;
    this.name = fokemonJson.name;
    this.element_type = fokemonJson.element_type;
    this.hit_points = fokemonJson.hit_points;
    this.attack_points = fokemonJson.attack_points;
    this.avatar = fokemonJson.avatar;
  }
}
