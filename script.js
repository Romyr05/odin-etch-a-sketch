const container = document.getElementById("container")

const size = 16;

function add_grid(size){
    const container_size = container.offsetWidth + container.offsetHeight
    const cell_size = (container_size/ size) - 2

    for(let i = 0; i<size*size; i++){
        const cell = document.createElement("div")
        cell.className = ("cells")
        cell.style.border =  "solid"
        cell.style.width = `${cell_size}px`
        cell.style.height = `${cell_size}px`
        cell.style.borderWidth = "1px"
        container.appendChild(cell)
    }
}

add_grid(size)





