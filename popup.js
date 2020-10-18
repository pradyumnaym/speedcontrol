document.addEventListener('DOMContentLoaded', function() {
    var txt = document.getElementById("spd");
    var speed = document.getElementById('speed');

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {getSpeed : true}, function(response) {
        console.log(response);
        txt.innerHTML = response.speed;
        speed.value = response.speed;
      });
    });

    speed.addEventListener('change', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {speedToSet: speed.value}, function(response) {
          txt.innerHTML = response.speed;
          speed.value = response.speed;
        });
      });

    }, false);
  }, false);