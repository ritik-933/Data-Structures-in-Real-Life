function init(){
    canvas=document.getElementById('abc')
    canvas.width=1000
    canvas.height=1000
    pen=canvas.getContext('2d')
    cs=50;
    food=getRandomFood();
    game_over=false;
    score=0

    food_img=new Image();
    food_img.src="apple.png"
    trophy=new Image();
    trophy.src="trophy.png"
    snake={
        init_len:5,
        color:'red',
        cells:[],
        direction:"right",
        
        createSnake:function(){
            for(var i=this.init_len;i>0;i--){
                this.cells.push({x:i,y:0})
            }
        },
        drawSnake:function(){
            pen.fillStyle=this.color;
            for(var i=0;i<this.cells.length;i++){
            pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-3,cs-3)
            }
        },
        updatesnake:function(){

            var a=this.cells[0].x;
            var b=this.cells[0].y;


            if (a==food.x && b==food.y){
                food=getRandomFood();
                score++
            }
            else{
                this.cells.pop();
            }
            var nextX,nextY;

            if (this.direction=="right"){
                nextX=a+1;
                nextY=b;
            }
            else if (this.direction=="left"){
                nextX=a-1;
                nextY=b;
            }
            else if (this.direction=="down"){
                nextX=a;
                nextY=b+1;
            }
            else{
                nextX=a;
                nextY=b-1;
            }
            
            this.cells.unshift({x:nextX,y:nextY});
            aa=Math.round(1000/cs);
            bb=Math.round(1000/cs);
            if (this.cells[0].y<0 || this.cells[0].x<0 || this.cells[0].x==aa ||this.cells[0].y==bb){
                game_over=true
            }

        }
    };
    snake.createSnake()
    ///Add a event listener
    function keyPress(e){
        if (e.key=="ArrowRight"){
            snake.direction="right";
        }
        else if (e.key=="ArrowLeft"){
            snake.direction="left"
        }
        else if (e.key=="ArrowUp"){
            snake.direction="up";
        }
        else{
            snake.direction="down"
        }
    }
    document.addEventListener('keydown',keyPress);

}
function draw(){
    pen.clearRect(0,0,1000,1000)
    snake.drawSnake();
    pen.fillStyle="Blue"
    pen.drawImage(food_img,food.x*cs,food.y*cs,cs,cs);

    pen.drawImage(trophy,30,19,cs,cs);
    pen.font="20px Roboto"
    pen.fillText(score,50,50)
}
function update(){
    snake.updatesnake();
}
function getRandomFood(){
    var foodX=Math.round(Math.random()*(1000-cs)/cs);
    var foodY=Math.round(Math.random()*(1000-cs)/cs);

    var food={
        x:foodX,
        y:foodY,
        color:"red",
    }
    return food
}
function gameloop(){

    if (game_over==true){
        clearInterval(f)
        alert("GameOver")
    }
    draw();
    update();
}
init();
var f=setInterval(gameloop,100)