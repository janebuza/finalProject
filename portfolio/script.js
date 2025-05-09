// Mobile navigation toggle
const navLinks = document.querySelector('.nav-links');

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

// Add smooth scrolling
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('animate');
        }
    })
})