class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rigid = false;
  }
}

let board_matrix = [];
board_size = 50;
cell_size_scale = 10;

function createWall({sx, sy}, direction, length) {
  if (direction === 'vertical') {
    for (let i = sy; i < sy + length; i++) {
      board_matrix[sx][i].rigid = true;
    }
  } else if (direction === 'horizontal') {
    for (let i = sx; i < sx + length; i++) {
      board_matrix[i][sy].rigid = true;
    }
  }
}


function setup() {
  createCanvas(600, 600);

  /*
   [[0, 0] [0, 1] [0, 2], [0, 3], [0, 4], [0, 5], [0, 6]],
   [[1, 0] [1, 1] [1, 2] [1, 3] [1, 4] [1, 5] [1, 6]],
   [[2, 0] [2, 1] [2, 2] [2, 3] [2, 4] [2, 5] [2, 6]],
   * */

  // create grid

  for (let i = 0; i < board_size; i++) {
    board_matrix[i] = []
    for (let j = 0; j < board_size; j++) {
      board_matrix[i].push(new Coordinate(i, j));
    }
  }
  // create walls
  createWall({sx: 10, sy: 14}, 'vertical', 10);
  createWall({sx: 8, sy: 12}, 'horizontal', 5);
  createWall({sx: 9, sy: 6}, 'horizontal', 21);
  createWall({sx: 16, sy: 9}, 'vertical', 10);
  createWall({sx: 6, sy: 24}, 'horizontal', 20);
  createWall({sx: 10, sy: 27}, 'horizontal', 20);
  createWall({sx: 6, sy: 25}, 'vertical', 6);
  createWall({sx: 18, sy: 18}, 'horizontal', 10)
  createWall({sx: 27, sy: 19}, 'vertical', 6);
  createWall({sx: 27, sy: 10}, 'vertical', 8);
  createWall({sx: 8, sy: 2}, 'vertical', 8);
  createWall({sx: 7, sy: 12}, 'vertical', 10);


  board_matrix[0][0].rigid = true;
  board_matrix[49][49].rigid = true;

  console.log(board_matrix[0][0]);
}

function draw() {
  background(0);

  // draw grid

  for (let i = 0; i < board_size; i++) {
    for (let j = 0; j < board_size; j++) {
      fill(120,120,120);
      if (board_matrix[i][j].rigid) {
        fill(255);
      }
      circle(i*cell_size_scale, j*cell_size_scale, 5);
    }
  }


}
