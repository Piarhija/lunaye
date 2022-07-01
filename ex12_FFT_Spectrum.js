
let mic, fft;
let slider;
let checkbox;

var barva1 = 250;



function myCheckedEvent() {
  if (checkbox.checked()) {
    loop();
  } else {
    noLoop();
  }
}

function myCheckedEvent2() {
  if (checkbox.checked()) {
   
    let fs = fullscreen();
    resizeCanvas(windowWidth, windowHeight);
    fullscreen(!fs);
    
    
    
  } else {
    noLoop();
  }
}


function setup() {
  var canvas = createCanvas(windowWidth -10  , windowHeight -12);
  
  noFill();
 

  canvas.parent('sketch-holder');
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

 




  slider = createSlider(0, 10, 6,0.1);
 
  slider2 = createSlider(0, 10, 1,0.1);
 
  slider3 = createSlider(0, 100, 1,0.1);
 
  slider4 = createSlider(0, 100, 1,0.1);

//random scene  
  slider5 = createSlider(1, 10, 2,0.1);

  slider6 = createSlider(3, 10, 6,0.1);

  slider7 = createSlider(0, 24, 1 ,0.1);

  //idk
  slider8 = createSlider(0, 4, 0,0.1);
  slider9 = createSlider(0, 255, 34);

  checkbox = createCheckbox('Visualiser', true);
  checkbox.changed(myCheckedEvent);
  checkbox.position(200, 670);

  checkbox2 = createCheckbox('Fullscreen', false);
  checkbox2.changed(myCheckedEvent2);
  checkbox2.position(350, 670);
 

}

  

function draw() {
  let vol = fft.analyze();
 
  

  
  //slider.position(windowWidth / 20, windowHeight / 1.3);
  slider.position(200, 700);
  slider2.position(400, 700);
  slider3.position(600, 700);
  slider4.position(800, 700);
  slider5.position(1000, 700);
  slider6.position(1200, 700);
  slider7.position(1400, 700);
  slider8.position(200, 750);
  slider9.position(400, 750);
 

  let val = slider.value();
  let val2 = slider2.value();
  let val3 = slider3.value();
  let val4 = slider4.value();

  let val5 = slider5.value();
  let val6 = slider6.value();
  let val7 = slider7.value();

  let val8 = slider8.value();
  let val9 = slider9.value();

  background(34);
  stroke(barva1);

strokeWeight(0);
fill (255);
  textSize(24);
  textFont('Georgia');
  text(val, 0, 300);
  text(val2, 30, 300);
  text(val3, 60, 300);
  text(val4, 120, 300);
  text(val5, 170, 300);
  text(val6, 200, 300);
  text(val7, 240, 300);
  text(val8, 310, 300);
  text(val9, 400, 300);

translate (windowWidth /2 , windowHeight/2);
  beginShape();
  rotate (val8);
  for (i = 0; i < vol.length; i++) {
    strokeWeight(val5);
    point(0, map(vol[i], 0, 120, vol[i] /val2, val9));
    point(0, map(vol[i], 0, 25, height /10, val3));rotate ( val7);
    point(0, map(vol[i], 0, 120, height /10, val4));
    
   
    rotate (PI / val6);
    endShape();
    
    rotate (PI / val);
    //rotate (PI /2 );
  }

  

}

function windowResized() {
  resizeCanvas(windowWidth -10  , windowHeight -12);
}

