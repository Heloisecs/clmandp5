var ctracker;
var inputW = 5;
var inputH = 5;
var imgFace;
var imgPhoto;
var myDiv0;
var divBool=0;

var cnvWidth = 500;
var cnvHeight= 375;
var myDiv1;
var myDiv3;
var randomExt;
var randomInt;
var randomTxt;
var rEx;
var rIn;
var rTx;
var frRate;
var divBreak;

function setup() {
  //create div
  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.parent('container');
  // ''container.size(cnvWidth, cnvHeight);

  videoInput.size(cnvWidth, cnvHeight);
    videoInput.position(window.innerWidth/2-videoInput.width/2 , 
      window.innerHeight/2-videoInput.height/2);
  
  //hide video feed
  videoInput.show();
  
  // setup canvas
  var cnv = createCanvas(cnvWidth, cnvHeight);
  cnv.parent('container');

  cnv.position(window.innerWidth/2-videoInput.width/2 , 
      window.innerHeight/2-videoInput.height/2);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);





  //setup img
  // imgFace = loadImage("img/process.jpg");
  // imgPhoto = loadImage("img/head.gif");

  noStroke();

  //setup div
    myDiv1 = createDiv('');
    myDiv1.id('landscape');
    myDiv1.parent('container');
    myDiv1.style("width",cnvWidth+"px");
    myDiv1.style("height",cnvHeight+"px");
    myDiv0 = createDiv('');
    myDiv0.id('face');
    myDiv0.parent('container');
    myDiv3 = createDiv('');
    myDiv3.parent('container');
    myDiv3.id('bg');

    randomExt = Array('0.jpg','1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg');
    randomInt = Array('0.jpg','1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg');
    randomTxt = Array('Welcome back! To the place where you don’t have to smile when you’re sad. The place where being weird is not being odd, it’s belonging. To the place in which you walk like a cat, with wide opened eyes, to not miss a drop. To the place where the moonlight (and only her) caress your skin. To the place where you can see the geography: light and shadow, shallow and deep, wholes and peaks.','You could feel the dryness before coming here. You knew you needed to return It is the place of death and rebirth. The place of recharging. The home of withdrawal, of diving in.');



}

function draw() {
    clear();  
      myDiv0.style("width","0px");
      // myDiv1.style("visibility","hidden");
    
  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  
  // for (var i=0; i<positions.length; i++) {
  //   // set the color of the ellipse based on position on screen
  //   fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);

  //   // draw ellipse at each position point
  //   ellipse(positions[i][0], positions[i][1], 2, 2);
    

  // }
  
  fill(255,0,0);
  
  //make sure that the array is there
  if(positions.length > 0)
  {
    var faceX = positions[1][0]; 
    var faceY = positions[20][1];
    var faceW = int(dist(positions[1][0],positions[20][1], positions[13][0],positions[20][1]));
    var faceH = int(dist(positions[1][0], positions[20][1],positions[1][0],positions[7][1]));

    if (faceW < 100) {


      // myDiv3.innerHTML = ''+rTx;
      
      // console.log(millis());
      rIn = randomInt[Math.floor(Math.random()*randomInt.length)];
      rEx = randomExt[Math.floor(Math.random()*randomExt.length)];
      myDiv1.style("visibility","hidden");
      myDiv3.style("visibility","visible");
      
      myDiv1.style("background-image","url(../ext_layer/"+rEx+")");
      myDiv0.style("background-image","url(../int_layer/"+rIn+")");
      divBool=1;
    }
    else{
      

      myDiv1.style("visibility","visible");
      myDiv0.style("visibility","visible");
      myDiv3.style("visibility","hidden");

    myDiv0.style("width",cnvWidth+"px");
    myDiv0.style("height",cnvHeight+"px");

    myDiv0.style("-webkit-clip-path","polygon("+positions[1][0]+"px "+positions[1][1]+"px, "
      +positions[2][0]+"px "+positions[2][1]+"px, "+positions[3][0]+"px "+positions[3][1]+"px, "
      +positions[4][0]+"px "+positions[4][1]+"px, "+positions[5][0]+"px "+positions[5][1]+"px, "
      +positions[6][0]+"px "+positions[6][1]+"px, "+positions[7][0]+"px "+positions[7][1]+"px, "
      +positions[8][0]+"px "+positions[8][1]+"px, "+positions[9][0]+"px "+positions[9][1]+"px, "
      +positions[10][0]+"px "+positions[10][1]+"px, "+positions[11][0]+"px "+positions[11][1]+"px, "
      +positions[12][0]+"px "+positions[12][1]+"px, "+positions[13][0]+"px "+positions[13][1]+"px, "
      +positions[14][0]+"px "+positions[14][1]+"px, "+positions[15][0]+"px "+positions[15][1]+"px, "
      +positions[16][0]+"px "+positions[16][1]+"px, "+positions[17][0]+"px "+positions[17][1]+"px, "
      +positions[18][0]+"px "+positions[18][1]+"px, "+positions[21][0]+"px "+positions[21][1]+"px, "
      +positions[20][0]+"px "+positions[20][1]+"px, "+positions[19][0]+"px "+positions[19][1]+"px, "
      +positions[0][0]+"px "+positions[0][1]+"px)");
}
    // myDiv0.position("-15px", "-15px");
    // myDiv0.style("top",posY+"px");
    // myDiv0.style("left",posX+"px");


  }
  
}