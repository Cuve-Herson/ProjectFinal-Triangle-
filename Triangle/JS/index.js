var canvasElement = document.querySelector("#canvas");
    var ctx = canvasElement.getContext("2d");

    ctx.strokeStyle = "rgb(0,0,0)";
    // ctx.strokeStyle = "rgb(121,182,242)";
    ctx.fillStyle="rgb(255,255,255)";
    // ctx.fillStyle="rgb(232,149,108)";
    ctx.lineWidth="10";
    
    ctx.beginPath();
    ctx.moveTo(200,50);
    ctx.lineTo(12,400);
    ctx.lineTo(400,400);
    ctx.lineTo(200,50);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
