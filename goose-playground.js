"use strict";

var GoosePlayground = function(canvasID) {
  var playground = this;

  playground.g = new Goose(canvasID);
  playground.adding = false;
  playground.removing = false;
  playground.playing = true;
  playground.min_radius = 30;
  playground.max_radius = 70;
  playground.min_speed = 100;
  playground.max_speed = 600;

  playground.colors = ColorSchemes['dotme'];
 
  playground.g.addInitCallback(function(goose) {
    if (playground.adding) {
      playground.add();
    }
  });

  playground.g.addInitCallback(function(goose) {
    if (playground.removing) {
      playground.remove();
    }
  });

  playground.g.addMovementCallback(function(goose, shape, deltaTime) {
    if (playground.playing) {
      shape.x += shape.v_x * deltaTime;
      shape.y += shape.v_y * deltaTime;
      shape.v_x += shape.a_x * deltaTime;
      shape.v_y += shape.a_y * deltaTime;

      if (shape.x < shape.half_width && shape.v_x < 0) {
        shape.v_x *= -1;
        shape.x = (2 * shape.half_width) - shape.x;
      } else if (shape.x > goose.getWidth() - shape.half_width && shape.v_x > 0) {
        shape.v_x *= -1;
        shape.x = (2 * goose.getWidth()) - (2 * shape.half_width) - shape.x;
      }

      if (shape.y < shape.half_height && shape.v_y < 0) {
        shape.v_y *= -1;
        shape.y = (2 * shape.half_height) - shape.y;
      } else if (shape.y > goose.getHeight() - shape.half_height && shape.v_y > 0) {
        shape.v_y *= -1;
        shape.y = (2 * goose.getHeight()) - (2 * shape.half_height) - shape.y;
      }

    }
  });
}

GoosePlayground.prototype.makeShape = function(init_x, init_y, opts = {}) {
  var radius =
    opts['radius'] !== undefined ?
    opts['radius'] :
    this.min_radius + (Math.random() * (this.max_radius - this.min_radius)) ;

  var v =
    opts['speed'] !== undefined ?
    opts['speed'] :
    this.min_speed + (Math.random() * (this.max_speed - this.min_speed));

  var angle = opts['angle'] !== undefined ?
    opts['angle'] :
    Math.random() * Math.PI * 2;

  var color = opts['color'] !== undefined ?
    opts['color'] :
    this.colors[Math.floor(Math.random() * this.colors.length)];

  return ({
    x: init_x,
    y: init_y,
    v_x: v * Math.cos(angle),
    v_y: v * Math.sin(angle),
    a_x: 0,
    a_y: 0,
    half_width: radius,
    half_height: radius,
    layers: 
    [
      {
        coordinates: GooseShapes.circle(radius),
        color: color_darken(color, 0.2),
      },
      {
        coordinates: GooseShapes.circle(radius - 3),
        color: color,
      }
    ]
  });
}

GoosePlayground.prototype.toggleAdding  = function() {
  this.adding = !this.adding;
}

GoosePlayground.prototype.toggleRemoving = function() {
  this.removing = !this.removing;
}

GoosePlayground.prototype.add = function(n) {
  n = n || 1;
  var x = this.g.getWidth() / 2;
  var y = this.g.getHeight() / 2;

  for (i = 0; i < n; i++) {
    this.g.addShape(this.makeShape(x, y));
  }
}

GoosePlayground.prototype.addSpecial = function() {
  var playground = this;
  var x = this.g.getWidth() / 2;
  var y = this.g.getHeight() / 2;
  var speed = 500;
  var base_angle = Math.PI / 6;

  var angles = [
    base_angle,
    Math.PI / 2 - base_angle,
    Math.PI / 2 + base_angle,
    Math.PI - base_angle,
    Math.PI + base_angle,
    Math.PI * 3 / 2 - base_angle,
    Math.PI * 3 / 2 + base_angle,
    Math.PI * 2 - base_angle,
  ];

  var radii = [6,9,15,24,39,63];

  radii.forEach(function(radius, i) {
    var color = playground.colors[Math.floor(playground.colors.length / radii.length * i)];
    angles.forEach(function(angle) {
      playground.g.addShape(playground.makeShape(x, y, {
        'radius': radius,
        'color': color,
        'speed': speed,
        'angle': angle
      }));
    });
  });
}

GoosePlayground.prototype.remove = function(n) {
  n = n || 1;

  for (i = 0; i < n; i++) {
    this.g.removeShape();
  }
}

GoosePlayground.prototype.clear = function() {
  this.g.shapes = [];
}

GoosePlayground.prototype.togglePlaying = function() {
  this.playing = !this.playing;
}

GoosePlayground.prototype.reverse = function() {
  this.g.shapes.forEach(function(shape) {
    shape.v_x *= -1;
    shape.v_y *= -1;
  });
}

GoosePlayground.prototype.changeColors = function(colors) {
  if (colors) {
    this.colors = colors;
  } else {
    var keys = Object.keys(ColorSchemes);
    this.colors = ColorSchemes[keys[Math.floor(keys.length * Math.random())]];
  }
}

GoosePlayground.prototype.setMinRadius = function(val) {
  this.min_radius = val;
}

GoosePlayground.prototype.setMaxRadius = function(val) {
  this.max_radius = val;
}

GoosePlayground.prototype.setMinSpeed = function(val) {
  this.min_speed = val;
}

GoosePlayground.prototype.setMaxSpeed = function(val) {
  this.max_speed = val;
}
