const container = document.getElementById("container")

const size = 16;
const cell_size = 20;

for(let i = 0; i<16*16; i++){
    const cell = document.createElement("div")
    cell.className = ("cells")
    cell.style.border =  "solid"
    cell.style.width = "20px"
    cell.style.height = "20px"
    cell.style.borderWidth = "1px"
    container.appendChild(cell)
}



