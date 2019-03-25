const carousel = document.getElementById("carousel");
let projects = [];
window.onload = getProjects;

/**
 * Pick random project and place it in the carousel.
 */
function carouselProjectPicker() {
    let pointer = Math.round(Math.random() * 10 % projects.length) - 1;
    if (pointer < 0) pointer = 1;

    // Create initial anchor element.
    let project = projects[pointer];
    let projectElement = document.createElement("a");
    projectElement.href = project.html_url;
    projectElement.target = "_blank";
    projectElement.id = "carousel-project";

    // Create project title element.
    let projectHeader = document.createElement("h2");
    let projectHeaderText = document.createTextNode(project.name);
    projectHeader.appendChild(projectHeaderText);

    // Create project description element.
    let projectHeaderSmall = document.createElement("small");
    let projectHeaderSmallText = document.createTextNode(project.description);
    projectHeaderSmall.appendChild(projectHeaderSmallText);
    projectHeader.appendChild(projectHeaderSmall);
    projectElement.appendChild(projectHeader);

    let oldProject = document.getElementById("carousel-project");
    carousel.replaceChild(projectElement, oldProject);
}

/**
 * Fetch projects from GitHub and trigger carousel event and interval.
 */
function getProjects() {
    fetch("https://api.github.com/users/gmemstr/repos")
    .then(function (response) {
        return response.json();
    })
    .then(function (apiResult) {
        projects = apiResult;
        carouselProjectPicker();
        setInterval(carouselProjectPicker, 10000);
    });
}