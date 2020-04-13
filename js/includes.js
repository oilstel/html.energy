const path = location.origin + '/includes/';

fetch(path + "header.html").then(res => res.text()).then(data => {
    document.querySelector("header").innerHTML = data;
});

if (!document.querySelector(".return")) {
    fetch(path + "nav.html").then(res => res.text()).then(data => {
        document.querySelector("nav").innerHTML = data;
    });
}

if (!document.querySelector(".footer-support")) {
    fetch(path + "footer.html").then(res => res.text()).then(data => {
        document.querySelector("footer").innerHTML = data;
    });
} else {
    fetch(path + "footer-support.html").then(res => res.text()).then(data => {
        document.querySelector(".footer-support").innerHTML = data;
    });
}