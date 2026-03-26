const view = document.getElementById('view');

function loadURL() {
let url = document.getElementById('url').value;

if (!url.startsWith('http')) {
url = 'https://' + url;
}

view.src = url;
}

function goBack() {
if (view.canGoBack()) view.goBack();
}

function goForward() {
if (view.canGoForward()) view.goForward();
}

function reload() {
view.reload();
}
