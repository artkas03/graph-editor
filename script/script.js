/** 
 Plan
 1. Listen tool changes and save in variables.
 2. Update toolbar UI.
 3. Draw shape on click.
  - draw on canvas
  - draw shapes
 4. Render future shape on hover.
*/
const state = {
  color: "#000",
  size: 50,
  shape: "square"
};

const toolbarElement = document.querySelector("#toolbar");
const canvasElement = document.querySelector("#canvas");

toolbarElement.addEventListener("input", (event) => {
  const name = event.target.name;
  const value =
    event.target.type === "range"
      ? event.target.valueAsNumber
      : event.target.value;
  state[name] = value;

  console.log(state);
});

const ctx = canvasElement.getContext("2d");
const canvasRect = canvasElement.getBoundingClientRect();

canvasElement.width = canvasRect.width;
canvasElement.height = canvasRect.height;

canvasElement.addEventListener("click", (event) => {
  const x = event.clientX - canvasRect.x;
  const y = event.clientY - canvasRect.y;
  const halfSize = state.size / 2;

  if (state.shape === "square") {
    ctx.fillStyle = state.color;
    ctx.fillRect(x - halfSize, y - halfSize, state.size, state.size);
  }
  if (state.shape === "circle") {
    ctx.beginPath();
    ctx.arc(x, y, halfSize, 0, 2 * Math.PI);
    ctx.fillStyle = state.color;
    ctx.fill();
  }
});
