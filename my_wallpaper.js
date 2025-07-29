//your parameter variables go here!

// defining colour palette
let blue = [202, 240, 248] // very light  
let blue2 = [144, 224, 239] // light
let blue3 = [0, 180, 216] // mid 
let blue4 = [0, 119, 182] // dark


// parameter variables that I will change 
let start = 100; // sets center of canvas to draw shapes in relation to
let centrecircle = 25; // sets size of circle in the center of the canvas
let outercircles = 20; // sets size of circles on the corners of the grid
let pluscircles = 15; // sets size of the circles in the middle of the corner cirles on the grid boundry 
let firstdots = 5; // sets size of the dots closest to the centre of the canvas
let seconddots = 4; // sets size of the dots second closest to the centre of the canvas
let thirddots = 3; // sets size of the dots thrid closest to the centre of the canvas

let diamonddots = 10; // when dots = 0 if statement on line 206 activates, when dots = 19 if statement on line 242 activates
//when dots = 14 or less if statement on line 48 activates

let linestrokeweight = 2; // sets the stoke weight of the 4 lines that create a plus in the centre of the canvas


let backgroundcolour = blue2; // sets the background colour
let centrecirclecolour = blue; // sets the colour of the centre circle 
let outercirclescolour = blue2; // sets the colour of the outer circles 
let pluscirclescolour = blue3; // sets the colour of the plus circles 
let firstdotscolour = blue2; // sets the colour of the first set of dots
let seconddotscolour = blue; // sets the colour of the second set of dots
let thirddotscolour = blue; // sets the colour of the third set of dots
let diamonddotscolour = blue; // sets the colour of the diamond dots
let linescolour = blue;  // sets the colour of the lines
let outsideverticaltrianglescolour = blue; // sets the colour of the vertical triangles on the edge of the grid 
let insideverticaltrianglescolour = blue; // sets the colour of the vertical triangles in the centre of the grid
let insidehorizontaltrianglescolour = blue; // sets the colour of the horizontal triangles in the centre of the grid
let outsidehorizontaltrianglescolour = blue; // sets the colour of the horizontal triangles  on the edge of the grid 
let insidetrianglescolour = blue; // sets the colour of the smaller triangles that apper in the if statements


function setup_wallpaper(pWallpaper) {  
 pWallpaper.output_mode(DEVELOP_GLYPH);
 //pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GLIDE_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(backgroundcolour); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
stroke(3, 4, 94)
  if(diamonddots < 15){
fill(3, 4, 94)
// center 
  beginShape();
  vertex(start-50, start+40);
  vertex(start-60, start+50);
  vertex(start-50, start+60);
  vertex(start-40, start+50);
  endShape(CLOSE);

fill(3, 4, 94)
// center 
  beginShape();
  vertex(start-50, start-60);
  vertex(start-60, start-50);
  vertex(start-50, start-40);
  vertex(start-40, start-50);
  endShape(CLOSE);

  fill(3, 4, 94) // navy
// center 
  beginShape();
  vertex(start+50, start+40);
  vertex(start+40, start+50);
  vertex(start+50, start+60);
  vertex(start+60, start+50);
  endShape(CLOSE);

fill(3, 4, 94)
// center 
  beginShape();
  vertex(start+50, start-60);
  vertex(start+40, start-50);
  vertex(start+50, start-40);
  vertex(start+60, start-50);
  endShape(CLOSE);
}


// circles 

// centre circle 
circle(start, start, centrecircle);

 // plus circles
circle(start, start-100, pluscircles);
circle(start, start+100, pluscircles);
circle(start-100, start, pluscircles);
circle(start+100, start, pluscircles);

 // outer circles
circle(start-100, start-100, outercircles);
circle(start+100, start-100, outercircles);
circle(start-100, start+100, outercircles);
circle(start+100, start+100, outercircles);

// first dots 
circle(start, start-32, firstdots);
circle(start, start+32, firstdots);
circle(start+32, start, firstdots);
circle(start-32, start, firstdots);

// second dots 
circle(start-50, start, seconddots);
circle(start+50, start, seconddots);
circle(start, start+50, seconddots);
circle(start, start-50, seconddots);

// third dots 
circle(start, start-68, thirddots);
circle(start, start+68, thirddots);
circle(start+68, start, thirddots);
circle(start-68, start, thirddots);


// lines 
strokeWeight(linestrokeweight);
line(start, start-17.5, start, start-82.5);
line(start, start+82.5, start, start+17.5);
line(start+82.5, start, start+17.5, start);
line(start-17.5, start, start-82.5, start);


strokeWeight(1);

// bottom left
fill(144, 224, 239)
triangle(start-82.5, start+10, start-17.5, start+10, start-50, start+40)
fill(0, 180, 216)
triangle(start-90, start+17.5, start-90, start+82.5, start-60, start+50)
fill(202, 240, 248)
triangle(start-82.5, start+90, start-17.5, start+90, start-50, start+60)
fill(0, 119, 182)
triangle(start-10, start+17.5, start-10, start+82.5, start-40, start+50)


// fill(3, 4, 94)
// // center 
//   beginShape();
//   vertex(start-50, start+40);
//   vertex(start-60, start+50);
//   vertex(start-50, start+60);
//   vertex(start-40, start+50);
//   endShape(CLOSE);

// top left 
fill(202, 240, 248)
triangle(start-82.5, start-90, start-17.5, start-90, start-50, start-60)
fill(0, 180, 216)
triangle(start-90, start-82.5, start-90, start-17.5, start-60, start-50)
fill(144, 224, 239)
triangle(start-82.5, start-10, start-17.5, start-10, start-50, start-40)
fill(0, 119, 182)
triangle(start-10, start-82.5, start-10, start-17.5, start-40, start-50)


// fill(3, 4, 94)
// // center 
//   beginShape();
//   vertex(start-50, start-60);
//   vertex(start-60, start-50);
//   vertex(start-50, start-40);
//   vertex(start-40, start-50);
//   endShape(CLOSE);


// bottom right
fill(144, 224, 239)
triangle(start+17.5, start+10, start+82.5, start+10, start+50, start+40)
fill(0, 119, 182)
triangle(start+10, start+17.5, start+10, start+82.5, start+40, start+50)
fill(202, 240, 248)
triangle(start+17.5, start+90, start+82.5, start+90, start+50, start+60)
fill(0, 180, 216)
triangle(start+90, start+17.5, start+90, start+82.5, start+60, start+50)

// fill(3, 4, 94) // navy
// // center 
//   beginShape();
//   vertex(start+50, start+40);
//   vertex(start+40, start+50);
//   vertex(start+50, start+60);
//   vertex(start+60, start+50);
//   endShape(CLOSE);


// top right
fill(202, 240, 248) // very light  
triangle(start+17.5, start-90, start+82.5, start-90, start+50, start-60)
fill(0, 119, 182) // dark
triangle(start+10, start-82.5, start+10, start-17.5, start+40, start-50)
fill(144, 224, 239) // light
triangle(start+17.5, start-10, start+82.5, start-10, start+50, start-40)
fill(0, 180, 216) // mid
triangle(start+90, start-82.5, start+90, start-17.5, start+60, start-50)



// fill(3, 4, 94)
// // center 
//   beginShape();
//   vertex(start+50, start-60);
//   vertex(start+40, start-50);
//   vertex(start+50, start-40);
//   vertex(start+60, start-50);
//   endShape(CLOSE);



  fill(255, 4, 94)
  //dots 
  circle(50, 50, diamonddots);
  circle(150, 50, diamonddots);
  circle(50, 150, diamonddots);
  circle(150, 150, diamonddots);


 if(diamonddots == 0){

  // inside triangle 
fill(222, 248, 255); //light blue colour
// bottom left
triangle(start-70.5, start+15, start-29.5, start+15, start-50, start+33)
triangle(start-85, start+29.5, start-85, start+70.5, start-67, start+50)
triangle(start-70.5, start+85, start-29.5, start+85, start-50, start+67)
triangle(start-15, start+29.5, start-15, start+70.5, start-33, start+50)

// inside triangle 
fill(222, 248, 255); //light blue colour
// top left 
triangle(start-70.5, start-85, start-29.5, start-85, start-50, start-67)
triangle(start-85, start-70.5, start-85, start-29.5, start-67, start-50)
triangle(start-70.5, start-15, start-29.5, start-15, start-50, start-33)
triangle(start-15, start-70.5, start-15, start-29.5, start-33, start-50)

// inside triangle 
fill(222, 248, 255); //light blue colour
// bottom right
triangle(start+29.5, start+15, start+70.5, start+15, start+50, start+33)
triangle(start+15, start+29.5, start+15, start+70.5, start+33, start+50)
triangle(start+29.5, start+85, start+70.5, start+85, start+50, start+67)
triangle(start+85, start+29.5, start+85, start+70.5, start+67, start+50)


// inside triangle 
fill(222, 248, 255); //light blue colour
// top right
triangle(start+29.5, start-85, start+70.5, start-85, start+50, start-67)
triangle(start+15, start-70.5, start+15, start-29.5, start+33, start-50)
triangle(start+29.5, start-15, start+70.5, start-15, start+50, start-33)
triangle(start+85, start-70.5, start+85, start-29.5, start+67, start-50)
 }

 if(dots == 19){

  // inside triangle 
fill(222, 248, 255); //light blue colour
// bottom left
triangle(start-70.5, start+15, start-29.5, start+15, start-50, start+33)
triangle(start-85, start+29.5, start-85, start+70.5, start-67, start+50)
triangle(start-70.5, start+85, start-29.5, start+85, start-50, start+67)
triangle(start-15, start+29.5, start-15, start+70.5, start-33, start+50)

// inside triangle 
fill(222, 248, 255); //light blue colour
// top left 
triangle(start-70.5, start-85, start-29.5, start-85, start-50, start-67)
triangle(start-85, start-70.5, start-85, start-29.5, start-67, start-50)
triangle(start-70.5, start-15, start-29.5, start-15, start-50, start-33)
triangle(start-15, start-70.5, start-15, start-29.5, start-33, start-50)

// inside triangle 
fill(222, 248, 255); //light blue colour
// bottom right
triangle(start+29.5, start+15, start+70.5, start+15, start+50, start+33)
triangle(start+15, start+29.5, start+15, start+70.5, start+33, start+50)
triangle(start+29.5, start+85, start+70.5, start+85, start+50, start+67)
triangle(start+85, start+29.5, start+85, start+70.5, start+67, start+50)


// inside triangle 
fill(222, 248, 255); //light blue colour
// top right
triangle(start+29.5, start-85, start+70.5, start-85, start+50, start-67)
triangle(start+15, start-70.5, start+15, start-29.5, start+33, start-50)
triangle(start+29.5, start-15, start+70.5, start-15, start+50, start-33)
triangle(start+85, start-70.5, start+85, start-29.5, start+67, start-50)
 }

  // beginShape();
//   vertex(100, 95);               // Top point
//   vertex(107, 97);                // Inner point right of top
//   vertex(104, 97);               // Outer right point
//   vertex(111, 104);                // Inner lower-right
//   vertex(105, 102);               // Bottom right point
//   vertex(100, 112);                // Bottom center inner
//   vertex(95, 102);              // Bottom left point
//   vertex(89, 104);               // Inner lower-left
//   vertex(96, 97);              // Outer left point
//   vertex(97, 97);               // Inner point left of top
//   endShape(CLOSE);

//  beginShape();
//   vertex(100, 75);               // Top point
//   vertex(107, 93);                // Inner point right of top
//   vertex(124, 93);               // Outer right point
//   vertex(111, 104);                // Inner lower-right
//   vertex(115, 121);               // Bottom right point
//   vertex(100, 112);                // Bottom center inner
//   vertex(85, 121);              // Bottom left point
//   vertex(89, 104);               // Inner lower-left
//   vertex(76, 93);              // Outer left point
//   vertex(93, 93);               // Inner point left of top
//   endShape(CLOSE);

//  beginShape();
//   vertex(0, -25);               // Top point
//   vertex(7, -7);                // Inner point right of top
//   vertex(24, -7);               // Outer right point
//   vertex(11, 4);                // Inner lower-right
//   vertex(15, 21);               // Bottom right point
//   vertex(0, 12);                // Bottom center inner
//   vertex(-15, 21);              // Bottom left point
//   vertex(-11, 4);               // Inner lower-left
//   vertex(-24, -7);              // Outer left point
//   vertex(-7, -7);               // Inner point left of top
//   endShape(CLOSE);
 
// // star
// fill(3, 4, 94)
// // center 
//   beginShape();
//   vertex(start, start-5);
//    vertex(start-1, start-4.5);
//   vertex(start-4, start-1.5);
//   vertex(start-2.5, start+5);
//   vertex(start+2.5, start+5);
//   vertex(start+4, start-1.5);
//   endShape(CLOSE);

//   heart 
// fill(245, 66, 75)
// noStroke()
// ellipse(75, 50, 50,50)
// ellipse(125, 50, 50,50)
// triangle(50, 55, 150, 55, 100, 130)

// // flower pattern 
// strokeWeight(0)

// fill(80, 0, 145)
// ellipse(flower1x, flower1y, petalwidth, petalheight); // petal
// ellipse(flower1x, flower1y, petalheight, petalwidth); // petal

// fill(252, 242, 172)
// ellipse(flower1x, flower1y, centersize, centersize); // center

//  // dots 
//  strokeWeight(1)
//  stroke(193, 126, 247)
//  fill(252, 226, 154)
// ellipse(flower1x, flower1y, dotsize, dotsize);
// ellipse(flower1x + 5, flower1y +5, dotsize, dotsize);
// ellipse(flower1x - 5, flower1y - 5, dotsize, );
// ellipse(flower1x + 5, flower1y - 5, dotsize, dotsize);
// ellipse(flower1x - 5, flower1y +5, dotsize, dotsize);
// ellipse(flower1x - 10, flower1y, dotsize, dotsize);
// ellipse(flower1x +10, flower1y, dotsize, dotsize);
// ellipse(flower1x, flower1y+10, dotsize, dotsize);
// ellipse(flower1x, flower1y -10, dotsize, dotsize);
}
