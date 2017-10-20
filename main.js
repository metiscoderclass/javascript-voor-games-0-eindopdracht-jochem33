//variabelen maken:
var canvaswidth = window.innerWidth - 30;
var canvasheight = window.innerHeight - 30;
var bal1;
var xspeedorgineel;
var yspeedorgineel;
var ballen = [];
var aantalballen = 50;
var fpstext = document.getElementById('fps');
var cr;
var cg;
var cb;
var balstraal;

function setup() {
  frameRate(60)
  createCanvas(canvaswidth, canvasheight);
  background(230);

  for (var i = 0; i < aantalballen; i++){
    var cr = Math.floor(Math.random() * 255);
    var cg = Math.floor(Math.random() * 255);
    var cb = Math.floor(Math.random() * 255);
    var balstraal = Math.floor(Math.random() * 40 + 10);
    xspeedorgineel = Math.floor(Math.random() * 20 + 1);
    yspeedorgineel = Math.floor(Math.random() * 20 + 1);
    var xpos = Math.floor(Math.random() * canvaswidth);
    var ypos = Math.floor(Math.random() * canvasheight);
    balletje1 = new Ball(xpos, ypos, balstraal, xspeedorgineel, yspeedorgineel, cr, cg, cb); //Maak een nieuwe instantie van Bal()
    // balletje2 = new Ball(2, 21, 30, 2, 1); //Maak een nieuwe instantie van Bal()

    ballen.push(balletje1); //Push voegt de bal aan het einde van het array toe
  }

  player
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
    if (Math.sqrt(dx*dx + dy*dy)
  }
}
