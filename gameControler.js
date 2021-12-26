const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreP1 = document.getElementById("scoreP1");
const scoreP2 = document.getElementById("scoreP2");

scoreP2.style.marginLeft = canvas.width/1.1+"px";


const speed = 40;
const ball = new Rectangle(canvas.width/2-25, canvas.height/2-25, 50, 50, 3, 3);
const player1 = new Rectangle(canvas.width-60, canvas.height/3,200, 50, speed, speed);
const player2 = new Rectangle(0+10, canvas.height/3,200, 50, speed, speed-1);


let keyP1;
let keyP2;

//Linstening to the keys for the player1
document.addEventListener("keydown", function(event) {
    keyP1 = event.keyCode;
    
});

//Linstening to the keys for the player2
document.addEventListener("keydown", function(event) {
    keyP2 = event.keyCode;
    
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
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    if (ball.canMove){
        ball.moveBall(scoreP1, scoreP2);
    }
    
    ball._rectangle(ball.x, ball.y, ball.width, ball.height, ball.ctx);

    if (keyP1 != undefined) {  
        player1.movePlayer(keyP1, 38, 40); 
        keyP1 = undefined;
    }

    if (keyP2 != undefined) { 
        player2.movePlayer(keyP2, 87, 83); 
        keyP2 = undefined;
    }
    
    player1._rectangle(player1.x, player1.y, player1.width, player1.height, player1.ctx);
    player2._rectangle(player2.x, player2.y, player2.width, player2.height, player2.ctx);

   //Draw the center line 
   drawLine(ctx,[canvas.width/2-5, 0], [canvas.width/2, canvas.height-5], "white", 10);
    
}


function circle (ctx,x,y,radius, lineWidth, color) {
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawLine(ctx, begin, end, stroke, width) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();

    }

