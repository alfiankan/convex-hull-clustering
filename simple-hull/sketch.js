class Coordinate {
  constructor(x, y, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.rigid = false;
  }
}

let board_matrix = [];
board_size = 50;
cell_size_scale = 10;

function findPoint(id) {
  let point = null;
  board_matrix.forEach((p) => {
    if (p.id === id) {
      point = p;
    }
  });
  return point;
}

function getLargestPoint(points) {
  let maxX = points[0];
  points.forEach((point) => { 
    if (point.x > maxX.x) {
      maxX = point;
    }
  });

  let maxY = points[0];
  points.forEach((point) => {
    if (point.y > maxY.y) {
      maxY = point;
    }
  });

  return [maxX, maxY];
}

function getLowestPoint(points) {
  let maxX = points[0];
  points.forEach((point) => { 
    if (point.x < maxX.x) {
      maxX = point;
    }
  });

  let maxY = points[0];
  points.forEach((point) => {
    if (point.y < maxY.y) {
      maxY = point;
    }
  });

  return [maxX, maxY];
}




function quickHull(coordinates) {
  
  let most = getLargestPoint(coordinates);

  console.log(most);

  findPoint(most[0].id).rigid = true;
  findPoint(most[1].id).rigid = true;

  let lowest = getLowestPoint(coordinates);

  console.log(lowest);

  findPoint(lowest[0].id).rigid = true;
  findPoint(lowest[1].id).rigid = true;

}

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 50; i++) {
    const randomX = Math.floor(Math.random() * board_size);
    const randomY = Math.floor(Math.random() * board_size);
    const point = new Coordinate();
    point.id = i;
    point.x = randomX;
    point.y = randomY;
    point.rigid = false;
    board_matrix.push(point);
  }
  
  quickHull(board_matrix);

}

function draw() {
  background(0);

  // draw grid

  board_matrix.forEach((point) => {
      fill(120,120,120);
      if (point.rigid) {
        fill(255,0,0);
      }
      circle(point.x*cell_size_scale, point.y*cell_size_scale, 10);
      
      textSize(10);
      fill(120,120,120);
      text(`${point.x},${point.y}`, point.x*cell_size_scale, point.y*cell_size_scale);
  });
}
