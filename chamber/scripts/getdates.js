// New script for current year 
const currentyear = {year: 'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', currentyear);

// New script for date last modified
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

// Added this script for the join form since it was date specific
document.addEventListener("DOMContentLoaded", function() {

    var formSubmissionTimeInput = document.getElementById("formSubmissionTime");
    
    formSubmissionTimeInput.value = Date.now();
});