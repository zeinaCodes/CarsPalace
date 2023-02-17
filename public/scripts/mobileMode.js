const logo = document.getElementById('logo-anchor');
const aboutTag = document.getElementById('about');
const contractTag = document.getElementById('contract');
const contactTag = document.getElementById('contact');
const overlay = document.getElementById('overlay');
const logoPng = document.getElementById('logo-png');
const scrollUpButton = document.getElementById('scrollUp');

function toggleNav() {
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')) {
        // Animate In Overlay
        overlay.classList.remove('overlay-slide-left')
        overlay.classList.add('overlay-slide-right');
    } else {
        // Animate out Overlay
        overlay.classList.remove('overlay-slide-right')
        overlay.classList.add('overlay-slide-left');
    }
}

function showScrollUpBtn() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpButton.style.display = "inline-block";
      } else {
        scrollUpButton.style.display = "none";
      }
}

function mobileMode() {
    if (window.innerWidth <= 600) {
        // Remove home section scroll functionality of logo
        logo.setAttribute('href', "");
        // Prevent default refresh functionality of empty anchor tags
        logo.addEventListener('click', function (event) {
            event.preventDefault();
        });
        // Set click listeners on the logo image and navbar menu items
        logoPng.addEventListener('click', toggleNav);
        aboutTag.addEventListener('click', toggleNav);
        contactTag.addEventListener('click', toggleNav);
        contractTag.addEventListener('click', toggleNav);
        window.addEventListener('scroll', showScrollUpBtn);
    } else {
        logo.setAttribute('href', "#home");
    }
}

mobileMode();