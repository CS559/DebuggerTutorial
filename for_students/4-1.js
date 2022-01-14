
function drawSquare(context, color) {
    context.fillStyle = color;
    context.fillRect(10,10,80,80);
}

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

    let r = 255;
    let g = 0;
    let b = 0;

    for(let i = 0; i < 255; i+=10) {
        g+=10;
        r-=10;
        let color = getColor(r, g, b);
        drawSquare(context, color);
    }
}