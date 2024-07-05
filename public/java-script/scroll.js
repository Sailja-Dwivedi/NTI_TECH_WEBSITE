
document.addEventListener("DOMContentLoaded", function () {
    var aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        var aboutSection = document.getElementById('About'); // Change 'about' to 'About'
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        var contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

