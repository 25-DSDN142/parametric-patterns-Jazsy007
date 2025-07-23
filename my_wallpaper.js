//your parameter variables go here!
let centersize = 40;
let petalwidth = 30;
let petalheight = 120;
let flower1x = 90;
let flower1y = 90;
let dotsize = 12;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
 //pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GLIDE_WALLPAPER);


  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(222, 248, 255); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
// triangle(15, 10, 65, 10, 40, 30)
// triangle(75, 10, 125, 10, 100, 35)
// triangle(15, 20, 15, 70, 35, 45)

// bottom left
fill(144, 224, 239)
triangle(17.5, 110, 82.5, 110, 50, 140)
fill(0, 180, 216)
triangle(10, 117.5, 10, 182.5, 40, 150)
fill(202, 240, 248)
triangle(17.5, 190, 82.5, 190, 50, 160)
fill(0, 119, 182)
triangle(90, 117.5, 90, 182.5, 60, 150)

fill(3, 4, 94)
// center 
  beginShape();
  vertex(50, 140);
  vertex(40, 150);
  vertex(50, 160);
  vertex(60, 150);
  endShape(CLOSE);

// top left 
fill(202, 240, 248)
triangle(17.5, 10, 82.5, 10, 50, 40)
fill(0, 180, 216)
triangle(10, 17.5, 10, 82.5, 40, 50)
fill(144, 224, 239)
triangle(17.5, 90, 82.5, 90, 50, 60)
fill(0, 119, 182)
triangle(90, 17.5, 90, 82.5, 60, 50)

fill(3, 4, 94)
// center 
  beginShape();
  vertex(50, 40);
  vertex(40, 50);
  vertex(50, 60);
  vertex(60, 50);
  endShape(CLOSE);


// bottom right
fill(144, 224, 239)
triangle(117.5, 110, 182.5, 110, 150, 140)
fill(0, 119, 182)
triangle(110, 117.5, 110, 182.5, 140, 150)
fill(202, 240, 248)
triangle(117.5, 190, 182.5, 190, 150, 160)
fill(0, 180, 216)
triangle(190, 117.5, 190, 182.5, 160, 150)

fill(3, 4, 94) // navy
// center 
  beginShape();
  vertex(150, 140);
  vertex(140, 150);
  vertex(150, 160);
  vertex(160, 150);
  endShape(CLOSE);


// top right
fill(202, 240, 248) // very light  
triangle(117.5, 10, 182.5, 10, 150, 40)
fill(0, 119, 182) // dark
triangle(110, 17.5, 110, 82.5, 140, 50)
fill(144, 224, 239) // light
triangle(117.5, 90, 182.5, 90, 150, 60)
fill(0, 180, 216) // mid
triangle(190, 17.5, 190, 82.5, 160, 50)

fill(3, 4, 94)
// center 
  beginShape();
  vertex(150, 40);
  vertex(140, 50);
  vertex(150, 60);
  vertex(160, 50);
  endShape(CLOSE);

  // heart 
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
