//Elements
const container = document.getElementById("container")
const new_grid = document.getElementById("new-grid")
const size = 16;



function add_grid(size) {

    const cell_size = Math.floor(960 / size) ; 

    console.log(cell_size)

    for (let i = 0; i < size * size; i++) {
        //Element sizing, and classes 
        const cell = document.createElement("div");
        cell.className = "cells";
        cell.style.width = `${cell_size}px`;
        cell.style.height = `${cell_size}px`;
        cell.style.border = "1px solid";
        cell.style.flexShrink = "0"

        //Color 
        const firstRGB = Math.ceil(Math.random() * 256)
        const secondRGB = Math.ceil(Math.random() * 256)
        const thirdRGB = Math.ceil(Math.random() * 256)

        //Event
        cell.addEventListener("mouseenter", (event) => {

            let current_opacity = parseFloat(event.target.style.opacity) || 0;

            current_opacity = Math.min(current_opacity + 0.1, 1)
            
            event.target.style.backgroundColor = `rgb(${firstRGB},${secondRGB},${thirdRGB})`;
            event.target.style.opacity = current_opacity
        });
            
    container.appendChild(cell);
    }
}

//adds new grid based on prompt
function add_new_grid(){
    new_grid.addEventListener(("click"), () => {
        const sizing = prompt("Enter new size")
        console.log(sizing)

        if(sizing > 100){
            alert("only 100 below")
            return
        }else if(sizing < 1){
            alert("from 1 to 100 only")
            return
        }else if (!Number.isInteger(sizing))
        {
            alert("not a number");
            return
        }

        container.innerHTML = ""

        add_grid(sizing)
    })
}

//calls
add_grid(size)
add_new_grid()




