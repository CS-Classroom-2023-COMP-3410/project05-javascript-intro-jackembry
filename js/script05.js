document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("drawing-canvas");
    const ctx = canvas.getContext("2d");
    
    const brushSizeInput = document.getElementById("brush-size");
    const brushColorInput = document.getElementById("brush-color");
    const canvasBgInput = document.getElementById("canvas-bg");
    const undoBtn = document.getElementById("undo-btn");
    const clearBtn = document.getElementById("clear-btn");
    const saveBtn = document.getElementById("save-btn");

    let isDrawing = false;
    let brushSize = brushSizeInput.value;
    let brushColor = brushColorInput.value;
    let backgroundColor = canvasBgInput.value;
    let strokes = [];
    let currentStroke = [];

    // Set up canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = 400;
        applyBackground();
    }

    function startDrawing(event) {
        isDrawing = true;
        currentStroke = [];
        ctx.beginPath();
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = brushColor;
        ctx.lineCap = "round";
        ctx.moveTo(event.offsetX, event.offsetY);
    }

    function draw(event) {
        if (!isDrawing) return;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        currentStroke.push({ x: event.offsetX, y: event.offsetY, color: brushColor, size: brushSize });
    }

    function stopDrawing() {
        if (isDrawing) {
            isDrawing = false;
            strokes.push([...currentStroke]);
        }
    }

    function applyBackground() {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        redrawStrokes();
    }

    function changeBackgroundColor(event) {
        backgroundColor = event.target.value;
        applyBackground();
    }

    function redrawStrokes() {
        strokes.forEach(stroke => {
            ctx.beginPath();
            ctx.lineWidth = stroke[0]?.size || brushSize;
            ctx.strokeStyle = stroke[0]?.color || brushColor;
            ctx.lineCap = "round";

            stroke.forEach((point, index) => {
                if (index === 0) {
                    ctx.moveTo(point.x, point.y);
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            });
            ctx.stroke();
        });
    }

    function undoLast() {
        if (strokes.length > 0) {
            strokes.pop();
            applyBackground();
        }
    }

    function clearCanvas() {
        strokes = [];
        applyBackground();
    }

    function saveCanvas() {
        const link = document.createElement("a");
        link.download = "drawing.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }

    // Event Listeners
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    brushSizeInput.addEventListener("input", (e) => brushSize = e.target.value);
    brushColorInput.addEventListener("input", (e) => brushColor = e.target.value);
    canvasBgInput.addEventListener("input", changeBackgroundColor);

    undoBtn.addEventListener("click", undoLast);
    clearBtn.addEventListener("click", clearCanvas);
    saveBtn.addEventListener("click", saveCanvas);

    resizeCanvas();
});