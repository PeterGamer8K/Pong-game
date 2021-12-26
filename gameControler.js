const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreP1 = document.getElementById("scoreP1");
const scoreP2 = document.getElementById("scoreP2");

scoreP2.style.marginLeft = canvas.width/1.1+"px";


const speed = 40;
const ball = new Rectangle(canvas.width/2-25, canvas.height/2-25, 50, 50, 3, 3);
const player1 = new Rectangle(canvas.width-60, canvas.height/3,200, 50, speed, speed);
const player2 = new Rectangle(0+10, canvas.height/3,200, 50, speed, speed-1);


let key;

document.addEventListener("keydown", function(event) {
    key = event.keyCode;
})

window.requestAnimationFrame(loop);

function loop() {
    update();
    draw();
    window.requestAnimationFrame(loop);
}

function update() {

    


    if (ball.l3 > player1.l1 && 
        ball.l4 > player1.l2 && 
        ball.l2 < player1.l4) {
        ball.speedX = -ball.speedX;
    }
    
    if (ball.l1 < player2.l3 && 
        ball.l4 > player2.l2 && 
        ball.l2 < player2.l4) {
        ball.speedX = -ball.speedX;
    }
    
}



function draw() {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)


    if (ball.canMove){
        ball.moveBall(scoreP1, scoreP2);
    }
    
    ball._rectangle(ball.x, ball.y, ball.width, ball.height, ball.ctx)

    if (key != undefined) {  
        player1.movePlayer(key, 38, 40); 
        player2.movePlayer(key, 87, 83) 
        
        key = undefined;
    }
    
    player1._rectangle(player1.x, player1.y, player1.width, player1.height, player1.ctx);
    player2._rectangle(player2.x, player2.y, player2.width, player2.height, player2.ctx);
    
    
}


function circle (ctx,x,y,radius, lineWidth, color) {
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}







