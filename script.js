const canvas = document.getElementById("draw")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = "#BADA55"
ctx.lineJoin = "round"
ctx.lineCap = "round"
ctx.lineWidth = 100

let isDrawing = false
let lastX = 0
let lastY = 0     //this gives the coordinates of the lines drawn
let hue = 0
let direction = true

function draw(e) {
    if (!isDrawing) return  // stop running the function if mouse is not pressed down
       ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
       ctx.lineWidth = hue
       ctx.beginPath()
       ctx.moveTo(lastX, lastY)
       ctx.lineTo(e.offsetX, e.offsetY)
       ctx.stroke()
       lastX = e.offsetX
       lastY = e.offsetY 
       hue++
       if (hue >= 360) {
           hue = 0
       }
       if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
           direction = !direction
       }
       if (direction) {
        ctx.lineWidth++   
       }else{
        ctx.lineWidth--   
       }
}

canvas.addEventListener ("mousemove", draw)
canvas.addEventListener ("mousedown", (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY 
})
canvas.addEventListener ("mouseup", () => isDrawing = false)
canvas.addEventListener ("mouseout", () => isDrawing = false)

//the above are event listeners for the dragging motion of the mouse