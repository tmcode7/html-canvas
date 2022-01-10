const canvas = document.getElementById("draw")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = "#BADA55"
ctx.lineJoin = "round"
ctx.lineCap = "round"

let isDrawing = false
let lastX = 0
let lastY = 0     //this gives the coordinates of the lines drawn


function draw(e) {
    if (!isDrawing) return   // stop running the function if mouse is not pressed down

}

canvas.addEventListener ("mousemove", draw)
canvas.addEventListener ("mousedown", () => isDrawing = true)
canvas.addEventListener ("mouseup", () => isDrawing = false)
canvas.addEventListener ("mouseout", () => isDrawing = false)

//the above are event listeners for the dragging motion of the mouse