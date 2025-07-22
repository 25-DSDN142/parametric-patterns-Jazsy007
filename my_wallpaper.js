//your parameter variables go here!
let centersize = 40;
let petalwidth = 30;
let petalheight = 120;
let flower1x = 90;
let flower1y = 90;
let dotsize = 12;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
 // pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GLIDE_WALLPAPER);


  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 90;
}

function wallpaper_background() {
  background(222, 248, 255); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

ellipse(100, 160, 80, 20)
ellipse(100, 120, 20, 80)
ellipse(90, 120, 15, 80)



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
