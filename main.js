canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_mars_image_array=["nasa_image_1.jpg" , "nasa_image_2.jpg", "nasa_image_3.jpg" , "nasa_image_4.jpg" , "nasa_image_5.jpg"];

random_number=Math.floor(Math.random()*5);
console.log(random_number);

rover_width=100;
rover_height=90;

roverx=10;
rovery=10;

background_image=nasa_mars_image_array[random_number];
console.log("background_image="+background_image);
rover_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,roverx,rovery,rover_width,rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
}

function up(){
    if(rovery>=0)
    {
        rovery=rovery-10;
        console.log("When up arrow key is pressed x= " +roverx +"y=" +rovery);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rovery<=500)
    {
        rovery=rovery+10;
        console.log("When down arrow is pressed x=" +roverx +"y=" +rovery);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(roverx>=0)
    {
        roverx=roverx-10;
        console.log("when left arrow is pressed x=" +rovery +"y=" +roverx);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(roverx<=700)
    {
        roverx=roverx+10;
        console.log("when arrow right is pressed x=" +rovery +"y=" +roverx);
        uploadBackground();
        uploadRover();
    }
}






























