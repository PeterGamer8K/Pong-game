class Rectangle {
    constructor(x, y, height, width, speedX, speedY) {

        this.originalX = x;
        this.originalY = y;

        this.canMove = true;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speedX = speedX;
        this.speedY = speedY;
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.color = "white";

        


    }

    //Belongs to ball
    moveBall (scoreP1, scoreP2) {
       
        this.x+= this.speedX;
        this.y+= this.speedY;
        


        if (this.x + this.width > this.canvas.width) {
           
            this.x = this.originalX;
            this.y = this.originalY;
            this.speedX = -this.speedX;
            scoreP1.textContent++;
        }
    
        if (this.x < 0) {

            this.x = this.originalX;
            this.y = this.originalY;
            this.speedX = -this.speedX;
            scoreP2.textContent++;
        }

        if (this.y + this.height > this.canvas.height) {
            this.speedY = -this.speedY;
        }

        if (this.y  < 0) {
            this.speedY = -this.speedY;
        }        
    }


    movePlayer(key, up, down) {
        this._rectangle(this.x, this.y, this.width, this.height, this.ctx);

        if (key == up)  {
            if (this.l2 > 0) {

                this.y -= this.speedY;
            }
        }
        if (key == down)   {
            if (this.l4 < this.canvas.height) {

                this.y += this.speedY;
            }
        }
        
    }

    _rectangle(x, y, width, height, ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, width, height);
        this.l1 = this.x; 
        this.l2 = this.y; 
        this.l3 = this.x + this.width;
        this.l4 = this.y + this.height; 
        
    }



    stop() {
        this.canMove = false;
    }

    start() {
        this.canMove = true;
    }


}


