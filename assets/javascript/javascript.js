// When the DOM loads, which it will do first because this script is at the bottom of the HTML,

// Create objects for each project listed with the project class
class Project {
  constructor(picURL, linkURL) {
    this.picture = picURL;
    this.link = linkURL;
  }
  createDiv() {
    var icon = document.createElemenT("<div>");
    icon.innerHTML = "text here";
  }
}

const crystalcollector = new Project(
  "./assets/images/'Portfolio Images'/placeholder.png",
  "https://ohmydearcheesus.github.io/unit-4-game/"
);

// For each of the items, create a div
crystalcollector.createDiv();

// Add to the div the relevant layout and styling classes

// Change its hover to a description of what it is in an overlay

// Have it use the parameters to give the div an image to display, a title to overlay
