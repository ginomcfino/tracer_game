function Player(s) {
  this.health = 100;
  this.speed = {
    forward : .2 * s,
    backward: .1 * s,
    turn : 1 * s
  };
}