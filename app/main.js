// Code that pulls in products the right way
// This will be sneaky 



document.onreadystatechange = function() {
  if (document.readyState === "interactive") {

    $.getScript('products.js')
      .done(setup)
      .fail(oops);

  }
};

function oops() {
  alert("Problem loading data file!");
}

function setup() {

  var content = document.getElementById('content');
  var sections = Object.keys(products); 

  sections.forEach(function(sectionName) {
    content.innerHTML += formatSection(sectionName);
  });

}

function formatSection(sectionName) {

  var results = "<h2>" + sectionName + "</h2>";
  var section = products[sectionName]; 
  results  += "<ul>";
  section.forEach(function(menuItem) {
    results += "<li>" + formatMenuItem(menuItem) + "</li>";
  });
  results += "</ul>";
  return results;

}

function formatMenuItem(menuItem) {

  var results = "<span class='test'>" + menuItem.name + "</span><br />";
  results += menuItem.description + "<br />";
  results += menuItem.price;

  return results;

}