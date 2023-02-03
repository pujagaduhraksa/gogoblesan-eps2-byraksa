// Gobles Part 2

const targetObject1 = document.getElementById('targetObject1'); // background color
const targetObject2 = document.getElementById('targetObject2'); // text color
const selection = document.getElementById('selection'); // Pilihan User
const inputValue = document.getElementById('inputValue'); 

function update() {
    const userPick = selection.options.selectedIndex;

    if(userPick == 1) {
        targetObject1.style.backgroundColor = inputValue.value
    } else if(userPick == 2) {
        targetObject2.style.color = inputValue.value
    } else if(userPick == 3) {
        targetObject2.style.fontSize = inputValue.value + 'px'
    } else if(userPick == 4) {
        targetObject2.style.fontFamily = inputValue.value
    } else if(userPick == 5) {
        targetObject1.style.width = inputValue.value + 'px'
    } else {
        targetObject1.style.height = inputValue.value + 'px'
    }
}