function createProgram(
    gl, vertex_shader_src, fragment_shader_src) {

  var program = gl.createProgram();

  var vert_shader = loadShader(gl, vertex_shader_src, gl["VERTEX_SHADER"]);
  if (vert_shader == null) {return null;}
  gl.attachShader(program, vert_shader);

  var frag_shader = loadShader(gl, fragment_shader_src, gl["FRAGMENT_SHADER"]);
  if (frag_shader == null) {return null;}
  gl.attachShader(program, frag_shader);

  gl.linkProgram(program);

  // Check the link status
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!linked) {
      // something went wrong with the link
      var lastError = gl.getProgramInfoLog(program);
      console.error("Error in program linking:" + lastError);

      gl.deleteProgram(program);
      return null;
  }
  return program;
}

function loadShader(gl, shaderSource, shaderType) {
  // Create the shader object
  var shader = gl.createShader(shaderType);

  // Load the shader source
  gl.shaderSource(shader, shaderSource);

  // Compile the shader
  gl.compileShader(shader);

  // Check the compile status
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    // Something went wrong during compilation; get the error
    var lastError = gl.getShaderInfoLog(shader);
    console.error("*** Error compiling shader '" + shader + "':" + lastError);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
