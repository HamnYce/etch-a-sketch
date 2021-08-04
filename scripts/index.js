function addBackColorBlack(e) {
    e.target.style.backgroundColor = "black";
}

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
        gridDiv.addEventListener('mouseenter',addBackColorBlack)
    })
}
createGrid(10)

function emptyGrid() {
    //considered using once:true for addEventListner
    //however it only removes once invoked, which is not ideal here
    //(might not use all pixels before reseting canvas)
    const main = document.querySelector('#main-container')
    const gridDivs = document.querySelectorAll('.inner-div');
    gridDivs.forEach((gridDiv) => {
        gridDiv.removeEventListener('mouseenter',addBackColorBlack)
    })
    while (main.firstChild) {
        
        main.firstChild.remove()
    }
    
        
}

function reset(promptText = "how big would you like your grid to be? (1-100)") {
    let gridSize = Number(prompt(promptText))
    
    if ( isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        reset("Please enter a valid number between 1 & 100 ^_^")
    }
    else {
        
        emptyGrid()
        createGrid(Number(gridSize))
        
    }
    
}
