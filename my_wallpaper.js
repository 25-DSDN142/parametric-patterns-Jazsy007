//your parameter variables go here!


// defining colour palette
let seafoam = [222, 248, 255]; // very pale blue 
let palesky = [183, 230, 249]; // pale blue 
let tideblue = [144, 224, 250]; // light blue 
let waveblue = [50, 203, 255]; // middle blue  
let trenchblue = [0, 119, 205]; // dark blue 
let deepsea = [3, 4, 94]; // navy  
let shellpink = [255, 189, 227]; // light pink 
let coralpink = [255, 111, 174]; // bright pink  
let reefgreen = [167, 232, 189]; // pale green 
let sand = [252, 232, 213]; // beige


// parameter variables that I will change to create my nine wallpapers
let start = 100; // sets center of canvas to draw shapes in relation to
let linestrokeweight = 2; // sets the stoke weight of the 4 lines that create a plus in the centre of the canvas
let centrecircle = 20; // sets size of circle in the center of the canvas
let outercircles = 15; // sets size of circles on the corners of the grid
let pluscircles = 10; // sets size of the circles in the middle of the corner cirles on the grid boundry 
let firstdots = 7; // sets size of the dots closest to the centre of the canvas
let seconddots = 6; // sets size of the dots second closest to the centre of the canvas
let thirddots = 5; // sets size of the dots third closest to the centre of the canvas
let diamonddots = 0; // sets size of the dots that sit in the centre of the diamonds in the centre of the triangles 
// when diamond dots = 0 if statement on line 202 activates (smaller triangles will be drawn inside the original triangles) 
// when diamond dots = 19 if statement on line 230 activates (smaller triangles will be drawn inside the original triangles) 
// when diamond dots = 14 or less if statement on line 69 activates (draws the diamonds underneath the dots)

// colour changing parameter variables that I will change to create my nine wallpapers
let backgroundcolour = seafoam; // sets the background colour
let centrecirclecolour = tideblue; // sets the colour of the centre circle 
let outercirclescolour = trenchblue; // sets the colour of the outer circles 
let pluscirclescolour = waveblue; // sets the colour of the plus circles 
let firstdotscolour = coralpink; // sets the colour of the first set of dots
let seconddotscolour = reefgreen; // sets the colour of the second set of dots
let thirddotscolour = shellpink; // sets the colour of the third set of dots
let diamonddotscolour = shellpink; // sets the colour of the diamond dots
let linescolour = deepsea;  // sets the colour of the lines
let outsideverticaltrianglescolour = trenchblue; // sets the colour of the vertical triangles on the edge of the grid 
let insideverticaltrianglescolour = tideblue; // sets the colour of the vertical triangles in the centre of the grid
let insidehorizontaltrianglescolour = palesky; // sets the colour of the horizontal triangles in the centre of the grid
let outsidehorizontaltrianglescolour = waveblue; // sets the colour of the horizontal triangles  on the edge of the grid 
let insidetrianglescolour = seafoam; // sets the colour of the smaller triangles that apper in the if statements
let diamondcolour = deepsea // // sets the colour of the diamonds

function setup_wallpaper(pWallpaper) {  
 //pWallpaper.output_mode(DEVELOP_GLYPH);
 pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GLIDE_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(backgroundcolour); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
stroke(3, 4, 94)// sets stroke to navy for all elements

  if(diamonddots < 15){ // if statement draws diamonds behind the dots if the diamomddots size is less than 15
fill(diamondcolour)
// bottom left diamond
  beginShape();
  vertex(start-50, start+40);
  vertex(start-60, start+50);
  vertex(start-50, start+60);
  vertex(start-40, start+50);
  endShape(CLOSE);

// top left diamond 
  beginShape();
  vertex(start-50, start-60);
  vertex(start-60, start-50);
  vertex(start-50, start-40);
  vertex(start-40, start-50);
  endShape(CLOSE);

// bottom right diamond 
  beginShape();
  vertex(start+50, start+40);
  vertex(start+40, start+50);
  vertex(start+50, start+60);
  vertex(start+60, start+50);
  endShape(CLOSE);

// top right diamond 
  beginShape();
  vertex(start+50, start-60);
  vertex(start+40, start-50);
  vertex(start+50, start-40);
  vertex(start+60, start-50);
  endShape(CLOSE);
}

// centre circle 
fill(centrecirclecolour)
circle(start, start, centrecircle);

 // plus circles
 fill(pluscirclescolour)
circle(start, start-100, pluscircles);
circle(start, start+100, pluscircles);
circle(start-100, start, pluscircles);
circle(start+100, start, pluscircles);

 // outer circles
 fill(outercirclescolour)
circle(start-100, start-100, outercircles);
circle(start+100, start-100, outercircles);
circle(start-100, start+100, outercircles);
circle(start+100, start+100, outercircles);

// lines 
stroke(linescolour) 
strokeWeight(linestrokeweight);
line(start, start-17.5, start, start-82.5);
line(start, start+82.5, start, start+17.5);
line(start+82.5, start, start+17.5, start);
line(start-17.5, start, start-82.5, start);
strokeWeight(1);

// first dots 
 fill(firstdotscolour)
circle(start, start-32, firstdots);
circle(start, start+32, firstdots);
circle(start+32, start, firstdots);
circle(start-32, start, firstdots);

// second dots 
 fill(seconddotscolour)
circle(start-50, start, seconddots);
circle(start+50, start, seconddots);
circle(start, start+50, seconddots);
circle(start, start-50, seconddots);

// third dots 
 fill(thirddotscolour)
circle(start, start-68, thirddots);
circle(start, start+68, thirddots);
circle(start+68, start, thirddots);
circle(start-68, start, thirddots);


// bottom left triangle quad
fill(insidehorizontaltrianglescolour)
triangle(start-82.5, start+10, start-17.5, start+10, start-50, start+40)
fill(outsideverticaltrianglescolour)
triangle(start-90, start+17.5, start-90, start+82.5, start-60, start+50)
fill(outsidehorizontaltrianglescolour)
triangle(start-82.5, start+90, start-17.5, start+90, start-50, start+60)
fill(insideverticaltrianglescolour)
triangle(start-10, start+17.5, start-10, start+82.5, start-40, start+50)

// top left triangle quad
fill(outsidehorizontaltrianglescolour)
triangle(start-82.5, start-90, start-17.5, start-90, start-50, start-60)
fill(outsideverticaltrianglescolour)
triangle(start-90, start-82.5, start-90, start-17.5, start-60, start-50)
fill(insidehorizontaltrianglescolour)
triangle(start-82.5, start-10, start-17.5, start-10, start-50, start-40)
fill(insideverticaltrianglescolour)
triangle(start-10, start-82.5, start-10, start-17.5, start-40, start-50)

// bottom right triangle quad
fill(insidehorizontaltrianglescolour)
triangle(start+17.5, start+10, start+82.5, start+10, start+50, start+40)
fill(insideverticaltrianglescolour)
triangle(start+10, start+17.5, start+10, start+82.5, start+40, start+50)
fill(outsidehorizontaltrianglescolour)
triangle(start+17.5, start+90, start+82.5, start+90, start+50, start+60)
fill(outsideverticaltrianglescolour)
triangle(start+90, start+17.5, start+90, start+82.5, start+60, start+50)

// top right triangle quad
fill(outsidehorizontaltrianglescolour)
triangle(start+17.5, start-90, start+82.5, start-90, start+50, start-60)
fill(insideverticaltrianglescolour)
triangle(start+10, start-82.5, start+10, start-17.5, start+40, start-50)
fill(insidehorizontaltrianglescolour)
triangle(start+17.5, start-10, start+82.5, start-10, start+50, start-40)
fill(outsideverticaltrianglescolour)
triangle(start+90, start-82.5, start+90, start-17.5, start+60, start-50)


  // diamond dots 
  fill(diamonddotscolour)
  circle(50, 50, diamonddots);
  circle(150, 50, diamonddots);
  circle(50, 150, diamonddots);
  circle(150, 150, diamonddots);


 if(diamonddots == 0){ // if statement draws inside triangle cut outs if the diamonddots size is 0
// inside triangles cut outs 
fill(insidetrianglescolour); 
// bottom left
triangle(start-70.5, start+15, start-29.5, start+15, start-50, start+33)
triangle(start-85, start+29.5, start-85, start+70.5, start-67, start+50)
triangle(start-70.5, start+85, start-29.5, start+85, start-50, start+67)
triangle(start-15, start+29.5, start-15, start+70.5, start-33, start+50)

// top left 
triangle(start-70.5, start-85, start-29.5, start-85, start-50, start-67)
triangle(start-85, start-70.5, start-85, start-29.5, start-67, start-50)
triangle(start-70.5, start-15, start-29.5, start-15, start-50, start-33)
triangle(start-15, start-70.5, start-15, start-29.5, start-33, start-50)

// bottom right
triangle(start+29.5, start+15, start+70.5, start+15, start+50, start+33)
triangle(start+15, start+29.5, start+15, start+70.5, start+33, start+50)
triangle(start+29.5, start+85, start+70.5, start+85, start+50, start+67)
triangle(start+85, start+29.5, start+85, start+70.5, start+67, start+50)

// top right
triangle(start+29.5, start-85, start+70.5, start-85, start+50, start-67)
triangle(start+15, start-70.5, start+15, start-29.5, start+33, start-50)
triangle(start+29.5, start-15, start+70.5, start-15, start+50, start-33)
triangle(start+85, start-70.5, start+85, start-29.5, start+67, start-50)
 }

 if(diamonddots == 19){ // if statement draws inside triangle cut outs if the diamonddots size is 19
// inside triangles cut outs 
fill(insidetrianglescolour); 
// bottom left
triangle(start-70.5, start+15, start-29.5, start+15, start-50, start+33)
triangle(start-85, start+29.5, start-85, start+70.5, start-67, start+50)
triangle(start-70.5, start+85, start-29.5, start+85, start-50, start+67)
triangle(start-15, start+29.5, start-15, start+70.5, start-33, start+50)

// top left 
triangle(start-70.5, start-85, start-29.5, start-85, start-50, start-67)
triangle(start-85, start-70.5, start-85, start-29.5, start-67, start-50)
triangle(start-70.5, start-15, start-29.5, start-15, start-50, start-33)
triangle(start-15, start-70.5, start-15, start-29.5, start-33, start-50)

// bottom right
triangle(start+29.5, start+15, start+70.5, start+15, start+50, start+33)
triangle(start+15, start+29.5, start+15, start+70.5, start+33, start+50)
triangle(start+29.5, start+85, start+70.5, start+85, start+50, start+67)
triangle(start+85, start+29.5, start+85, start+70.5, start+67, start+50)

// top right
triangle(start+29.5, start-85, start+70.5, start-85, start+50, start-67)
triangle(start+15, start-70.5, start+15, start-29.5, start+33, start-50)
triangle(start+29.5, start-15, start+70.5, start-15, start+50, start-33)
triangle(start+85, start-70.5, start+85, start-29.5, start+67, start-50)
 }
}
