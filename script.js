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
        
        const colorList = [
            '#FFF0F5', '#FFB6C1', '#FFC0CB', '#FF99AA', '#FF69B4',
            '#FF1493', '#FF007F', '#E0115F', '#C71585', '#8B008B'
        ];

        //Another way of coloring
        const firstRGB = Math.floor(Math.random()*256)
        const secondRGB = Math.floor(Math.random() * 256)
        const thirdRGB = Math.floor(Math.random() *256)


        let listing = 0

        cell.addEventListener(("mouseenter"), (event) => {
            cell.style.backgroundColor = `${colorList[listing]}`
            listing++
        })
        container.append(cell)
    }

}

//Adding a new_grid 
function new_grid(){
    newGrid.addEventListener(("click"), () => {
        const new_size = prompt("Enter the new size of the grid")

        if(new_size > 100 || new_size < 1 || !Number.isInteger(new_size)){
            alert("Try Again 1 to 100 only")
            return
        }

        container.innerHTML = ""

        add_grid(new_size)
    })

    
}

add_grid(size)

new_grid()