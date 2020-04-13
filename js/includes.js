fetch("/includes/header.html").then(res => res.text()).then(data => {
    document.querySelector("header").innerHTML = data;
});

if (!document.querySelector(".return")) {
    fetch("/includes/nav.html").then(res => res.text()).then(data => {
        document.querySelector("nav").innerHTML = data;
    });
}

if (!document.querySelector(".footer-support")) {
    fetch("/includes/footer.html").then(res => res.text()).then(data => {
        document.querySelector("footer").innerHTML = data;
    });
} else {
    fetch("/includes/footer-support.html").then(res => res.text()).then(data => {
        document.querySelector(".footer-support").innerHTML = data;
    });
}