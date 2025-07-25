// Load header and nav dynamically
fetch('header.html').then(res => res.text()).then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
});
fetch('nav.html').then(res => res.text()).then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
});
