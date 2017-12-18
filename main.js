//variabelen maken:
var canvaswidth = window.innerWidth - 30;
var canvasheight = window.innerHeight - 30;
var ballen = [];
var players = [];
var muurs = [];
var aantalballen = 5  ;
var fpstext = document.getElementById('fps');
var cr;
var cg;
var cb;
var balstraal;
var playerstraal = 40;
var playerX;
var playerY;
var playerXspeed = 10;
var playerYspeed = 10;
var volume;

function setup() {
  frameRate(60)
  createCanvas(canvaswidth, canvasheight);
  background(230);

  player = new playerobject(500, 500, playerstraal, playerXspeed, playerYspeed);
  players.push(player);
  //muur = new muurobject(500, 500, playerstraal, playerXspeed, playerYspeed);
  //muurs.push(muur);

  for (var i = 0; i < aantalballen; i++){
    var cr = random(1, 250);
    var cg = random(1, 250);
    var cb = random(1, 250);
    var balstraal = random(15, 40);
    var xspeed = random(6, 8);
    var yspeed = xspeed + random(-2, 2);
    var xpos = random(1, canvaswidth);
    var ypos = random(1, canvasheight);

    balletje1 = new Ball(xpos, ypos, balstraal, xspeed, yspeed, cr, cg, cb);
    ballen.push(balletje1);
  }
}

function draw() {
  background(1, 50);

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

  //muur1 = muurs[0];
  //muur1.teken();
}


function playerobject(_x, _y, _straal, _xspeed, _yspeed) {
  playerX = _x;
  playerY = _y;
  //playerX2 = _x2;
  //playerY2 = _y2
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
      playerX = canvaswidth - 30;
    }
    if (playerY + this.straal / 2 > canvasheight) {
      playerY = canvasheight - 30;
    }
    if (playerX - this.straal / 2 < 0) {
      playerX = 30;
    }
    if (playerY - this.straal / 2 < 0) {
      playerY = 30;
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
    fill(this.cr, this.cg, this.cb, 200);
    ellipse(this.x, this.y, this.straal, this.straal);
  }

  this.beweeg = function() {

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
    }
    if(this.x != playerX) {
      this.x += this.xspeed;
    }
    if (this.y != playerY) {
      this.y += this.yspeed;
    }

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
      //code
    }
  }
}
