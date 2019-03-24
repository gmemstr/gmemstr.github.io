const carousel = document.getElementById("carousel");
const projects = [
    {
        "name": "Pogo",
        "description": "Self hosted podcast blah blah"
    },
    {
        "name": "Database Janitor",
        "description": "Customized MySQL database dumps"
    }
]

function carouselProjectPicker() {
    let pointer = Math.round(Math.random() * 10 % projects.length) - 1;
    if (pointer < 0) pointer = 1;
    console.log(pointer);
    let project = projects[pointer];

    carousel.innerHTML = "<h2>" + project.name + "<small>" + project.description + "</small></h2>";
}

window.onload = carouselProjectPicker();

setInterval(carouselProjectPicker, 10000);