//variabelen maken:
var canvaswidth = window.innerWidth - 30;
var canvasheight = window.innerHeight - 30;
var ballen = [];
var players = [];
var muren = [];
var aantalballen = 20;
var fpstext = document.getElementById('fps');
var cr;
var cg;
var cb;
var balstraal;
var playerstraal = 40;
var playerX;
var playerY;
var playerXspeed = 15;
var playerYspeed = 15;

function setup() {
  frameRate(60)
  createCanvas(canvaswidth, canvasheight);
  background(230);

  player = new playerobject(500, 500, playerstraal, playerXspeed, playerYspeed);
  players.push(player);

  muurtje = new Muur(200, 200, 40, 40);
  muren.push(muurtje);

  for (var i = 0; i < aantalballen; i++){
    var cr = random(1, 250);
    var cg = random(1, 250);
    var cb = random(1, 250);
    var balstraal = random(15, 40);
    var xspeed = random(-10, 10);
    var yspeed = random(-10, 10);
    var xpos = random(1, canvaswidth);
    var ypos = random(1, canvasheight);

    balletje1 = new Ball(xpos, ypos, balstraal, xspeed, yspeed, cr, cg, cb);
    ballen.push(balletje1);
  }
}

function draw() {
  background(255);

  text(Math.floor(frameRate()), 200, 10);

  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i]; //Haal een bal uit het array
    bal.teken();
    bal.beweeg();
    bal.colide();
  }

  player1 = players[0];
  player1.teken();
  player1.move();

  muur1 = muren[0];
  muur1.teken;


}

function playerobject(_x, _y, _straal, _xspeed, _yspeed) {
  playerX = _x;
  playerY = _y;
  this.straal = _straal;
  this.xspeed = _xspeed;
  this.yspeed = _yspeed;

  this.teken = function() {
    noStroke();
    fill(250, 50, 50);
    ellipse(playerX, playerY, this.straal, this.straal);
  }

  this.move = function() {
    if (keyIsDown(UP_ARROW)){
      playerY -= this.yspeed;
    } else if (keyIsDown(DOWN_ARROW)){
      playerY += this.yspeed;
    } else if (keyIsDown(LEFT_ARROW)){
      playerX -= this.xspeed;
    } else if (keyIsDown(RIGHT_ARROW)){
      playerX += this.xspeed;
    }

    if (playerX + this.straal / 2> canvaswidth) {
      playerX = canvaswidth - 10;
    }
    if (playerY + this.straal / 2 > canvasheight) {
      playerY = canvasheight - 10;
    }
    if (playerX - this.straal / 2 < 0) {
      playerX = 10;
    }
    if (playerY - this.straal / 2 < 0) {
      playerY = 10;
    }
  }
}


function Ball(_x, _y, _straal, _xspeed, _yspeed, _cr, _cg, _cb) {
  this.x = _x;
  this.y = _y;
  this.straal = _straal;
  this.xspeed = _xspeed;
  this.yspeed = _yspeed;
  this.cr = _cr;
  this.cg = _cg;
  this.cb = _cb;

  this.teken = function() {
    noStroke();
    fill(this.cr, this.cg, this.cb);
    ellipse(this.x, this.y, this.straal, this.straal);
  }

  this.beweeg = function() {
    /*
    if (this.x + this.straal / 2> canvaswidth) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y + this.straal / 2 > canvasheight) {
      this.yspeed = this.yspeed * -1;
    }
    if (this.x - this.straal / 2 < 0) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y - this.straal / 2 < 0) {
      this.yspeed = this.yspeed * -1;
    }*/
    this.x += this.xspeed;
    this.y += this.yspeed;

    if (this.xspeed > 0) {
      if (playerX < this.x) {
        this.xspeed = this.xspeed * -1;
      }
    } else {
      if (playerX > this.x) {
        this.xspeed = this.xspeed * -1;
      }
    }

    if (this.yspeed > 0) {
      if (playerY < this.y) {
        this.yspeed = this.yspeed * -1;
      }
    } else {
      if (playerY > this.y) {
        this.yspeed = this.yspeed * -1;
      }
    }
  }

  this.colide = function() {
    var dx = playerX - this.x;
    var dy = playerY - this.y;
    if (Math.sqrt(dx*dx + dy*dy) <= playerstraal + this.straal){
      this.x = 10;
      this.y = 10;
    }
  }
}


function Muur(_x, _y, _width, _height) {
  this.x = _x;
  this.y = _y;
  this.width = _width;
  this.height = _height;

  this.teken = function() {
    stroke(10)
    fill(0, 0, 0);
    ellipse(this.x, this.y, this.width, this.height);
  }

  this.colide = function() {
    var dx = playerX - this.x;
    var dy = playerY - this.y;
    if (Math.sqrt(dx*dx + dy*dy) <= playerstraal + this.width){
      // code
    }
  }
}
