//functions for the timer
// Check if the current page is not the front page before redirecting
function redirectToFrontPage() {
    if (window.location.href.indexOf('/FrontPage.html') === -1) {
      window.location.href = '/FrontPage.html';
    }
  }
  
  function oneMinuteRemainingAlarm() {
    window.alert("One minute remaining! Prepare to be redirected.");
  }
  
  // Set a timeout for redirecting to the front page after 5 minutes
  setTimeout(redirectToFrontPage, 300000);
  
  // Set an interval to show the one-minute remaining alert every 4 minutes
  var oneMinuteInterval = setInterval(function () {
    oneMinuteRemainingAlarm();
  }, 240000);


