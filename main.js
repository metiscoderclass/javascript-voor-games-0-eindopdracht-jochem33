//variabelen maken:
var canvaswidth = window.innerWidth - 30;
var canvasheight = window.innerHeight - 30;
var bal1;
var xspeedorgineel;
var yspeedorgineel;
var ballen = [];
var players = [];
var aantalballen = 20;
var fpstext = document.getElementById('fps');
var cr;
var cg;
var cb;
var balstraal;
var playerstraal = 40;

function setup() {
  frameRate(60)
  createCanvas(canvaswidth, canvasheight);
  background(230);

  for (var i = 0; i < aantalballen; i++){
    var cr = random(1, 255);
    var cg = random(1, 255);
    var cb = random(1, 255);
    var balstraal = random(15, 40);
    xspeedorgineel = random(-25, 25);
    yspeedorgineel = random(-25, 25);
    var xpos = random(1, canvaswidth);
    var ypos = random(1, canvasheight);

    balletje1 = new Ball(xpos, ypos, balstraal, xspeedorgineel, yspeedorgineel, cr, cg, cb);
    ballen.push(balletje1);
  }
  player = new playerobject(500, 500, playerstraal);
  players.push(player);
}

function draw() {
  background(255);
  var frameratestr = frameRate();
  var frameratestring = frameratestr.toString();
  fpstext.innerHtml = frameRate();
  console.log(frameRate());
  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i]; //Haal een bal uit het array
    bal.teken();
    bal.beweeg();
    bal.colide();
  }
  player1 = players[0];
  player1.teken();
}

function playerobject(_x, _y, _straal) {
  this.x = _x;
  this.y = _y;
  this.straal = _straal;

  this.teken = function() {
    noStroke();
    fill(50, 50, 50);
    ellipse(this.x, this.y, this.straal, this.straal);
  }
}

function Ball(_x, _y, _straal, _xspeed, _yspeed, _cr, _cg, _cb) {
  this.x = _x;
  this.y = _y;
  this.straal = _straal;
  this.xspeed = _xspeed;
  this.yspeed = _yspeed;

  this.teken = function() {
    noStroke();
    fill(_cr, _cg, _cb);
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
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  this.colide = function() {
    var dx = 500 - this.x;
    var dy = 500 - this.y;
    if (Math.sqrt(dx*dx + dy*dy) <= this.straal + playerstraal){
      alert("prettig");
    }
  }
}
