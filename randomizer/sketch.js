Let dogs = [{
  name: "dudu",
  color: "brown"
}, {
  name: "bobby",
  color: "white"
}, {
  name: "milky",
  color: "black",
}, {
  name: "olivia",
  color: "chocolate"
}, {
  name: "jackey",
  color: "gold"
}, {
  name:  "tutu",
  color: "mocha"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);


function draw() {

}

function mousePressed(){
  background(random(200, 255));
  randomIndex = int(random(dogs.length));
  text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);
}
