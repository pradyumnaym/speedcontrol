chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        if (request.speedToSet){
                const el = document.getElementsByTagName('video')[0];
                el.playbackRate = request.speedToSet;
                sendResponse({speed : el.playbackRate});
        }
        if (request.getSpeed){
            const el = document.getElementsByTagName('video')[0];
            sendResponse({speed : el.playbackRate});
    }
});