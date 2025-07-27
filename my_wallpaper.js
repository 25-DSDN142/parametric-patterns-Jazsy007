//your parameter variables go here!
// let centersize = 40;
// let petalwidth = 30;
// let petalheight = 120;
// let flower1x = 90;
// let flower1y = 90;
// let dotsize = 12;

let start = 100;
let centrecircle = 25;
let pluscircle = 15;
let outercircle = 20;
let dots = 0;
let linestrokeweight = 3; 

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
  background(222, 248, 255); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  if(dots < 15){
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
circle(start, start-100, pluscircle);
circle(start, start+100, pluscircle);
circle(start-100, start, pluscircle);
circle(start+100, start, pluscircle);

 // outer circles
 circle(start-100, start-100, outercircle);
circle(start+100, start-100, outercircle);
circle(start-100, start+100, outercircle);
circle(start+100, start+100, outercircle);

  
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
  circle(50, 50, dots);
  circle(150, 50, dots);
  circle(50, 150, dots);
  circle(150, 150, dots);


 if(dots == 0){

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
