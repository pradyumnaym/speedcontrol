document.addEventListener('DOMContentLoaded', function() {
    var txt = document.getElementById("spd");
    var speed = document.getElementById('speed');
    
    speed.addEventListener('change', function() {

      chrome.tabs.getSelected(null, function(tab) {
        var vid = document.getElementsByTagName('video')[0];
        txt.innerHTML = speed.value;
        chrome.tabs.executeScript({ code: `(${ inContent })(${speed.value})` });
        function inContent(s) {
            const el = document.getElementsByTagName('video')[0];
            el.playbackRate = s;
        }
      });
    }, false);
  }, false);