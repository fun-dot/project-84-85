canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_heigth=90;
car_image_array=["race1.jpg","race2.jpg","race4.jpeg","racing.gif"];
random_number=Math.floor(Math.random()*4);

background_img=car_image_array[random_number];
console.log("backgroundm image is ="+background_img);
background_img="racing.gif";
car_img1="th.jpeg";
car_img2="Visual Studio Code.jpeg";
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=10;
function add(){

    background_imgtag=new Image();
background_imgtag.onload=uploadbackground;
background_imgtag.src=background_img;

car1_imgtag=new Image();
car1_imgtag.onload=uploadrover;
car1_imgtag.src=car1_img;
car2_imgtag=new Image();
car2_imgtag.onload=uploadrover;
car2_imgtag.src=car1_img;
}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.heigth);
}
function uploadrover(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car_width,car_heigth);
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car_width,car_heigth);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
 keyPressed=e.keyCode;
 console.log(keyPressed);
 if(keypressed == "38"){
    up();  
    console.log("up");
}
if(keypressed == "40"){
    down();  
    console.log("down");
}
if(keypressed == "37"){
    left();  
    console.log("left");
}
if(keypressed == "39"){
    right();  
    console.log("right");
}
}
function up(){
  if(car1_y >= 0){
      car1_y=car1_y -10;
      console.log("when up arrow is pressed, x =  " +car1_x+" y = "+ car1_y);
    uploadbackground();
    uploadrover();
  }  
}
function down(){
    if(car1_y <= 500){
        car1_y=car1_y +10;
        console.log("when down arrow is pressed, x =  " +car1_x+" y = "+ car1_y);
      uploadbackground();
      uploadrover();
    }  
  }
  function left(){
    if(car1_x >= 0){
        car1_x=car1_x -10;
        console.log("when left arrow is pressed, x =  " +car1_x+" y = "+ car1_y);
      uploadbackground();
      uploadrover();
    }  
  }
  function right(){
    if(car1_x <= 700){
        car1_x=car1_x +10;
        console.log("when right arrow is pressed, x =  " +car1_x+" y = "+ car1_y);
      uploadbackground();
      uploadrover();
    }  
  }
  function up2(){
    if(car2_y >= 0){
        car2_y=car2_y -10;
        console.log("when up arrow is pressed, x =  " +car2_x+" y = "+ car2_y);
      uploadbackground();
      uploadrover();
    }  
  }
  function down2(){
      if(car2_y <= 500){
          car2_y=car2_y +10;
          console.log("when down arrow is pressed, x =  " +car2_x+" y = "+ car2_y);
        uploadbackground();
        uploadrover();
      }  
    }
    function left2(){
      if(car2_x >= 0){
          car2_x=car2_x -10;
          console.log("when left arrow is pressed, x =  " +car2_x+" y = "+ car2_y);
        uploadbackground();
        uploadrover();
      }  
    }
    function right2(){
      if(car2_x <= 700){
          car2_x=car2_x +10;
          console.log("when right arrow is pressed, x =  " +car2_x+" y = "+ car2_y);
        uploadbackground();
        uploadrover();
      }  
    }