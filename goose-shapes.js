var GooseShapes = {
  ellipse: function(a, b) {
    var coordinates = [];
    var angle = 0;
    var sides = 36;
    for (i = 0; i < sides; i++) {
      coordinates.push(a * Math.cos(angle));
      coordinates.push(b * Math.sin(angle));
      coordinates.push(0);
      coordinates.push(0);

      angle = 2 * Math.PI * (i + 1) / sides;
      coordinates.push(a * Math.cos(angle));
      coordinates.push(b * Math.sin(angle));
    }
    return coordinates;
  },
  circle: function(radius) {
    return this.ellipse(radius, radius);
  },
  rectangle: function(half_width, half_height) {
    var coordinates = [];

    coordinates.push(-half_width);
    coordinates.push(-half_height);
    coordinates.push(half_width);
    coordinates.push(half_height);
    coordinates.push(half_width);
    coordinates.push(-half_height);


    coordinates.push(-half_width);
    coordinates.push(-half_height);
    coordinates.push(half_width);
    coordinates.push(half_height);
    coordinates.push(-half_width);
    coordinates.push(half_height);

    return coordinates;
  },
  square: function(half_width) {
    return this.rectangle(half_width, half_width);
  },
}
