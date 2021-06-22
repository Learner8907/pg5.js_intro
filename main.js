function preload(){

}
function setup(){
    canvas = createCanvas(500,400)
    canvas.position(200,300)
    video = createCapture(VIDEO)
    video.hide()

    tint_colour = "";
    filename= "";
}
function draw(){
    image(video, 130, 100,220 ,200)

    fill(255,0,0)
    stroke(255,0,0)
    circle(50,50,80)
   

    fill(0,128,0)
    stroke(0,128,0)
    rect(90, 40, 350, 20)


    fill(255,0,0)
    stroke(255,0,0)
    circle(450,50,80)
 
    fill(0,128,0)
    stroke(0,128,0)
    rect(450, 87, 20, 250)

    fill(255,0,0)
    stroke(255,0,0)
    circle(450,350,80)

    fill(0,128,0)
    stroke(0,128,0)
    rect(90, 350, 330, 20)

    fill(255,0,0)
    stroke(255,0,0)
    circle(50,350,80)


    fill(0,128,0)
    stroke(0,128,0)
    rect(30, 87, 20, 230)

tint(tint_colour)
  
    
}
function filter_appear(){
    console.log("hi")
    tint_colour= document.getElementById("colour").value;
    console.log(tint_colour)
}
function take_snapshot(){
    filename = document.getElementById("filename").value
    save(filename)
}