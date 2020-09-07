const postHeight = () => {
    window.parent.postMessage({height: document.body.scrollHeight}, '*');
}
window.onload = () => postHeight();
window.onresize = () => postHeight();
