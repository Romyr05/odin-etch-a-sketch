//DOM elements
const container = document.getElementById("container")
const newGrid = document.getElementById("new-grid")
const size = 16 


//Adding a grid
function add_grid(size){

    const container_size = container.offsetWidth
    console.log(container_size)
    const cell_size = container_size / size

    for(let i = 0; i<size*size; i++){
        const cell = document.createElement("div")
        cell.className = "cells"
        cell.style.width = `${cell_size}px`
        cell.style.height = `${cell_size}px`
        cell.style.border = "solid"
        cell.style.borderWidth = "1px"

        const firstRGB = Math.floor(Math.random()*256)
        const secondRGB = Math.floor(Math.random() * 256)
        const thirdRGB = Math.floor(Math.random() *256)


        let opacity_cell = 0

        cell.addEventListener(("mouseenter"), (event) => {
            cell.style.backgroundColor = `rgba(${firstRGB},${secondRGB},${thirdRGB}, ${opacity_cell += 0.1})`
        })
        container.append(cell)
    }

}

//Adding a new_grid 
function new_grid(){
    newGrid.addEventListener(("click"), () => {
        const new_size = prompt("Enter the new size of the grid")

        container.innerHTML = ""

        add_grid(new_size)
    })

    
}

add_grid(size)

new_grid()