game_over=false
function init(){
    canvas=document.getElementById('abcc')
    W=canvas.height=500;
    H=canvas.width=500;
    pen=canvas.getContext('2d');
    
    rect={
        x:20,
        y:20,
        w:40,
        h:40,
        speed:10
    }

}
function draw(){
    pen.clearRect(0,0,W,H)
    pen.fillRect(rect.x,rect.y,rect.w,rect.h)
    pen.fillStyle='red';
}
function update(){
    rect.x+=rect.speed
    if (rect.x>W-rect.w || rect.x<0){
        rect.speed*=-1; 
    }
}
function gameloop(){
    if (game_over==true){
        clearInterval(f);
    }
    console.log("gmaeLoop")
    draw();
    update();
}
init();
var f=setInterval(gameloop,100);