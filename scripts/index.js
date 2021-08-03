

function createGrid(n) {
    const main = document.querySelector('#main-container');
    for (let i = 0;i < n;i++) {
        const div = document.createElement('div');
        if(i%2 == 0) {
            div.style.backgroundColor = "white";
        }
        else {
            div.style.backgroundColor = "grey"
        }
        div.classList.add('outer-div')
        main.appendChild(div);

        for (let j = 0;j < n; j ++) {
            const div2 = document.createElement('div');
            div2.classList.add('inner-div')
            //div2.textContent = (`${i},${j}`);
            div.appendChild(div2);
        }
    }
    const gridDivs = document.querySelectorAll('.inner-div');

    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener('mouseenter',(e) => {
            e.target.style.backgroundColor = "black"
        })
    })
}
createGrid(100)

function emptyGrid() {
    const main = document.querySelector('#main-container')
    while (main.hasChildNodes) {
        main.firstChild.remove()
    }
}


function reset() {
    let gridSize = prompt("how big would you like your grid to be?")
    emptyGrid()
    createGrid(gridSize)
}


//remove inner div event listener (abstract the function out first)
//