"use strict";

var GooseText = function(canvasID, characterMapping) {
  var gooseText = this;

  gooseText.g = new Goose(canvasID);
  gooseText.characterMapping = characterMapping;

  gooseText.playing = true;
  gooseText.density = 5;
  gooseText.speed = 45;
  gooseText.charsPerLine = 12;
  gooseText.timeToDisappear = 0.25

  gooseText.colors = ColorSchemes['dotme'];

  gooseText.text = "";
  gooseText.lights_on = [];  

  gooseText.g.addInitCallback(function(goose, deltaTime) {
    if (gooseText.playing) {
      var radius = 300 * deltaTime * gooseText.density / gooseText.charsPerLine;
      gooseText.add(radius);
    }
  });

  gooseText.g.addMovementCallback(function(goose, shape, deltaTime) {
    if (gooseText.playing) {
      shape.life+= deltaTime;
      if (shape.life > gooseText.timeToDisappear) {
        //hacky way to do this because it doesn't ensure that you are removing
        //this element
        gooseText.g.shapes.pop();
      }
    }
  });

  gooseText.g.addMovementCallback(function(goose, shape, deltaTime) {
    if (gooseText.playing) {
      shape.x += shape.v_x * deltaTime;
      shape.y += shape.v_y * deltaTime;
    }
  });
}

GooseText.prototype.makeShape = function(init_x, init_y, opts = {}) {
  var v = this.speed;

  var radius = opts['radius'] !== undefined ?
    opts['radius'] :
    3;

  var angle = opts['angle'] !== undefined ?
    opts['angle'] :
    (Math.random() - 0.5) + 3 * Math.PI / 2;

  var color = opts['color'] !== undefined ?
    opts['color'] :
    this.colors[Math.floor(Math.random() * this.colors.length)];

  return {
    x: init_x,
    y: init_y,
    v_x: v * Math.cos(angle),
    v_y: v * Math.sin(angle),
    life: 0,
    layers: 
    [
      {
        coordinates: GooseShapes.square(radius),
        color: color,
      },
    ]
  };
}

GooseText.prototype.add = function(radius) {
  var gooseText = this;
  var canvasWidth = gooseText.g.getWidth();

  var len = gooseText.lights_on.length;
  for (var i = 0; i < len; i++) {
    var el = gooseText.lights_on[i];
    for (var k = 0; k < 1; k++) {
      var x = (Math.random() + el.x) * (canvasWidth/gooseText.charsPerLine/6);
      var y = (Math.random() + el.y) * (canvasWidth/gooseText.charsPerLine/6);

      gooseText.g.shapes.unshift(gooseText.makeShape(x, y, {radius}));
    }
  }
}

GooseText.prototype.clear = function() {
  this.g.shapes = [];
}

GooseText.prototype.setPlaying = function(playing) {
  this.playing = playing;
}

GooseText.prototype.togglePlaying = function() {
  this.playing = !this.playing;
}

GooseText.prototype.changeColors = function(colors) {
  if (colors) {
    this.colors = colors;
  } else {
    var keys = Object.keys(ColorSchemes);
    this.colors = ColorSchemes[keys[Math.floor(keys.length * Math.random())]];
  }
}

GooseText.prototype.setText  = function(text) {
  this.text = text;
  this.lights_on = [];
  for (var i = 0; i < text.length; i++)
  {
    var c = text.charAt(i);
    var mapping = this.characterMapping[c];
    for (var j = 0; j < mapping.length; j++) {
      for (var k = 0; k < mapping[j].length; k++) {
        var x = ((i%this.charsPerLine)*6) + j;
        var y = (9 - mapping[j][k]) + (10 * Math.floor(i/this.charsPerLine));
        this.lights_on.push({x,y});
      }
    }
  }
}

GooseText.prototype.setTimeToDisappear = function(t) {
  this.timeToDisappear = t;
}

GooseText.prototype.setCharsPerLine = function(n) {
  this.charsPerLine = n;
  this.setText(this.text);
}

GooseText.prototype.setSpeed = function(v) {
  this.speed = v;
}

GooseText.prototype.setDensity = function (ro) {
  this.density = ro;
}
