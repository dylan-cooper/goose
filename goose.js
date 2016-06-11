var Goose = function(canvasID) {
  var me = this;
  this._canvasID = canvasID;
  this.canvas = document.getElementById(canvasID);
  var gl = this.canvas.getContext('webgl');

  this.shapes = [];
  this.init_callbacks = [];
  this.movement_callbacks = [];
  this.drawing_callbacks = [];

  //load shaders, set up program
  var vert_shader_src = 
    'attribute vec2 a_position;' +
    'uniform vec2 u_resolution;' +
    'uniform vec2 u_translation;' +
    'void main() {' +
      // Add in the translation.
      'vec2 position = a_position + u_translation;' +
      // convert the position from pixels to 0.0 to 1.0
      'vec2 zeroToOne = position / u_resolution;' +
      // convert from 0->1 to 0->2
      'vec2 zeroToTwo = zeroToOne * 2.0;' +
      // convert from 0->2 to -1->+1 (clipspace)
      'vec2 clipSpace = zeroToTwo - 1.0;' +

      'gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);' +
    '}'

  var frag_shader_src = 
    'precision mediump float;' +
    'uniform vec4 u_color;' +
    'void main() { gl_FragColor = u_color;}';

  var program = createProgram(gl, vert_shader_src, frag_shader_src);
  if (program == null) { return; }
  gl.useProgram(program);

  //get locations for variables in the program
  var position_location = gl.getAttribLocation(program, "a_position");
  var resolution_location = gl.getUniformLocation(program, "u_resolution");
  var color_location = gl.getUniformLocation(program, "u_color");
  var translation_location = gl.getUniformLocation(program, "u_translation");

  gl.uniform2f(resolution_location, this.canvas.width, this.canvas.height);

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.enableVertexAttribArray(position_location);
  gl.vertexAttribPointer(position_location, 2, gl.FLOAT, false, 0, 0);

  var then = 0;
  var lastDeltaTime = 1;
  var drawScene = function(now) {
    now = now * 0.001;
    var deltaTime = now - then;
    if (deltaTime > 10 * lastDeltaTime) {
      deltaTime = lastDeltaTime;
    }
    lastDeltaTime = deltaTime;
    then = now;

    //run each registered initialization callback
    me.init_callbacks.forEach(function(cb) { cb(me); });

    gl.clear(gl.COLOR_BUFFER_BIT);

    me.shapes.forEach(function(shape) {
      //run each registered movement callback
      me.movement_callbacks.forEach(function(cb) {cb(me, shape, deltaTime);});

      shape.layers.forEach(function(layer) {
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(layer.coordinates), gl.STATIC_DRAW);
        gl.uniform4f(color_location, layer.color[0], layer.color[1], layer.color[2], 1);
        gl.uniform2fv(translation_location, [shape.x, shape.y]);
        gl.drawArrays(gl.TRIANGLES, 0, layer.coordinates.length / 2);
      });
    });

    window.requestAnimationFrame(drawScene);
  }
  window.requestAnimationFrame(drawScene);
}

Goose.prototype.addShape = function(data) {
  //TODO: add validation here
  this.shapes.push(data);
}

Goose.prototype.removeShape = function() {
  this.shapes.shift();
}

Goose.prototype.addInitCallback = function(callback) {
  //TODO: add validation here
  this.init_callbacks.push(callback);
}

Goose.prototype.addMovementCallback = function(callback) {
  //TODO: add validation here
  this.movement_callbacks.push(callback);
}

Goose.prototype.getWidth = function() {
  return this.canvas.width;
}

Goose.prototype.getHeight = function() {
  return this.canvas.height;
}
