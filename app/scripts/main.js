requirejs(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    setup();
  }
};

function setup() {
  var content1 = document.getElementById('content-1');
  // var content2 = document.getElementById('content-2');
  var sections = Object.keys(products);

  sections.forEach(function(sectionName) {
    content1.innerHTML += formatSection(sectionName);
    // content2.innerHTML += formatSection(sectionName);
  });

}

function formatSection(sectionName) {
  var results = "<h2>" + sectionName + "</h2>";
  var section = products[sectionName]; 
  var menuItem = document.getElementsByClassName('list-item');

  results  += "<ul>";

  section.forEach(function(menuItem) {

    results += "<li class='list-item'>" + formatMenuItem(menuItem) + "</li>";

  });

  results += "</ul>";

  return results;

}

function formatMenuItem(menuItem) {
  var results = "<img src='" + menuItem.image + "' width='24px'>" + "<span class='itemName'>" + menuItem.name + "</span><br />";

  results += menuItem.description + "<br>";
  results += menuItem.price;

  return results;
    console.log("hi");
  // sectionName.addEventListener('click', expandCollapse);

}

// function expandCollapse(sectionName) {

//   if (menuItem.style.display != 'block') {
//     menuItem.style.display = 'block';
//   }
// }