document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    setup();
  }
};

function setup() {
  var content1 = document.getElementById('content-1');
  var content2 = document.getElementById('content-2');
  var sections = Object.keys(products);

  sections.forEach(function(sectionName) {
    content1.innerHTML += formatSection(sectionName);
    content2.innerHTML += formatSection(sectionName);
  });

}

function formatSection(sectionName) {
  var results = "<h2 class="category">" + sectionName + "</h2>";
  var section = products[sectionName]; 

  results  += "<ul>";

  section.forEach(function(menuItem) {

    results += "<li>" + formatMenuItem(menuItem) + "</li>";

  });

  results += "</ul>";

  return results;

}

function formatMenuItem(menuItem) {
  var results = "<img src='" + menuItem.image + "' width='24px'>" + "<span class='itemName'>" + menuItem.name + "</span><br />";

  // results += "<img src='" + menuItem.image + "' width='24px'>" + "<br>";
  results += menuItem.description + "<br>";
  results += menuItem.price;

  return results;

}