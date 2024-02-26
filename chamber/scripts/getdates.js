// New script for current year 
const currentyear = {year: 'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', currentyear);

// New script for date last modified
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;