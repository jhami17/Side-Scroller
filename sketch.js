var man;
let img, img2;
// let rock;
let rocks = [];
let muzac;

function preload(){
    
  soundFormats('mp3', 'ogg');
  muzac = loadSound('assets/betterdays.mp3');
}

function setup() {
  createCanvas(400, 400);
  
  muzac.play();

  img = loadImage("Mathman2.png");
  img2 = loadImage("rock.png");
  bgrnd= loadImage("assets/jungle.png")
  man = new Person(img);
  // rock = new Obstacle(img2);

  //obstacles
  for (let i = 0; i < 10; i++) {
    rocks[i] = new Obstacle(img2, random(10));
  }
}


function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -16);
    man.applyForce(force);
  }
}

function draw() {
  if (man.pos.x < 1000) {
    game();
  } else {
    gameOver();
  }
}

function gameOver() {
  background(30, 40, 70);
  text("Game Over!" + '\n' + man.score, 100, 200)
}

function game() {
  background(bgrnd);

  //point of view around "man"
  translate(-man.pos.x + 50, 0);

  let gravity = createVector(0, 1);
  man.applyForce(gravity);



  //the player
  man.update();
  man.display();
  man.edges();

  //an obstacle as a rock
  // rock.update();
  // rock.display();
  // rock.edges();


  //obstacles

  for (let i = 0; i < 10; i++) {
    rocks[i].update();
    rocks[i].display()
    rocks[i].edges();
    man.hits(rocks[i])
  }
  // for (let i = 0; i < 10; i++) {
  //   fill(10);
  //   rect(250+i*160, 350+i, 100, 100);
  // }

}
