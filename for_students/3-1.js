
function func1(context) {
    func3(context);
    context.fillStyle = "#F0F";
    context.fillRect(10,10,80,80);
}

function func2(context) {
    context.fillStyle = "#0F0";
    context.fillRect(10,10,80,80);
}

function func3(context) {
    context.fillStyle = "#00F";
    context.fillRect(10,10,80,80);
}

window.onload = function() {
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
    let context = canvas.getContext('2d');

    func1(context);
    func2(context);
}