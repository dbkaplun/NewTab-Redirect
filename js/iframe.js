(window => {
    function postTitle () {
        window.parent.postMessage({
            type: 'NewTab-Redirect:iframe:postTitle',
            data: document.title
        }, '*');
    }
    new MutationObserver(mutations => {
        if (mutations.some(({target}) => target.nodeName.toLowerCase() === 'title')) postTitle();
    }).observe(document.head, {subtree: true, childList: true});
    postTitle();
})(this);
