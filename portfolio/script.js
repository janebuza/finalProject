// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Change color on button click
const colors = ["#FFADDC", "blue", "green", "red"];
var colorIndex = 0;
function colorChange() {
    console.log("test")
    if(colorIndex < 3) {
        colorIndex++
    }
    else if(colorIndex == 3 || colorIndex < 0){
        colorIndex = 0;
    }
    document.documentElement.style.setProperty('--theme-color', colors[colorIndex]);
}