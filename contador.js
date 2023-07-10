function getVisitCount() {
  
  if (localStorage.getItem("visitCount")) {
    
    return parseInt(localStorage.getItem("visitCount"));
  } else {
    
    return 0;
  }
}


function incrementAndDisplayCount() {
  
  var visitCount = getVisitCount();

  
  visitCount++;

  
  localStorage.setItem("visitCount", visitCount);

  
  var visitCountElement = document.getElementById("visitCount");
  visitCountElement.textContent = visitCount;
}


window.onload = incrementAndDisplayCount;
