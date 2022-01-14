
function func1(context) {
    context.fillStyle = "#F0F";
    context.fillRect(10,10,30,30);
}

function func2(context) {
    context.fillStyle = "#0F0";
    context.fillRect(50,10,30,30);
}

function func3(context) {
    context.fillStyle = "#0FF";
    context.fillRect(10,50,30,30);
}

function func4(context) {
    context.fillStyle = "#00F";
    context.fillRect(50,50,30,30);
}

window.onload = function() {
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
    let context = canvas.getContext('2d');

    func1(context);
    func2(context);
    func3(context);
    func4(context);
}