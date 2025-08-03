// Load header and nav dynamically
fetch('/compsci/header.html').then(res => res.text()).then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
});
fetch('/compsci/nav.html').then(res => res.text()).then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
});
