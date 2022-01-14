
function getColor(r, g, b) {
    return "#" +
        (r.toString(16).length == 1 ? "0" + r.toString(16) : r.toString(16)) + 
        (g.toString(16).length == 1 ? "0" + g.toString(16) : g.toString(16)) +
        (b.toString(16).length == 1 ? "0" + b.toString(16) : b.toString(16))
}

window.onload = function() {
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
    let context = canvas.getContext('2d');

    let square = {
        "x": 0,
        "y": 0,
        "r": 0,
        "g": 0,
        "b": 0,
        "size": 20
    }

    let t = 0;

    let drawSquare = () => {
        context.fillStyle = getColor(square.r, square.g, square.b);
        context.fillRect(square.x-square.size/2, square.y-square.size/2, square.size, square.size);
    }

    let updateSquare = () => {
        square.x = 20*Math.cos(t) + 50;
        square.y = 20*Math.sin(t) + 50;
        square.r = parseInt(127*Math.sin(t+0.2)+127);
        square.g = parseInt(127*Math.cos(t*0.5+0.5)+127);
        square.b = parseInt(127*Math.sin(t*2+0.1)+127);
    }

    t += 5;
    updateSquare();
    drawSquare();

    let animate = () => {
        context.fillStyle = "White";
        context.fillRect(0,0,200,200);
        t += 0.05;
        updateSquare();
        drawSquare();
        window.requestAnimationFrame(animate);
    }

    animate();
}