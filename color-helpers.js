var color_darken = function(color, degree) {
  return color_mix(color, [0,0,0], degree);
}

var color_lighten = function(color, degree) {
  return color_mix(color, [1,1,1], degree);
}

var color_mix = function(color1, color2, degree) {
  degree = typeof degree !== "undefined" ? degree : 0.5;
  var result = [0,0,0]
  for (i = 0; i < 3; i++) {
    result[i] = (color1[i] * (1 - degree)) + (color2[i] * degree);
  }
  return result;
}

var color_gradient = function(arr) {
  var colors = [];
  var ratio_step = (arr.length - 1)/60.0;
  for (var i = 0; i < arr.length - 1; i++) {
    var color_a = arr[i];
    var color_b = arr[i+1];
    for (var ratio = 0; ratio < 1; ratio += ratio_step) {
      colors.push(color_mix(color_a, color_b, ratio));
    }
  }
  return colors;
}

var color_format = function(color_str) {
  return [
    parseInt('0x' + color_str.substr(1,2)) / 255.0,
    parseInt('0x' + color_str.substr(3,2)) / 255.0,
    parseInt('0x' + color_str.substr(5,2)) / 255.0,
  ];
}
