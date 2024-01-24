const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navigasi");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("is-active");
});

window.onscroll = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove("is-active");
}

// owl-carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    stagePadding: 50,
    items:1,
    loop:true,
    nav:false,
    dots:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});

// Function to scroll to the target section with an offset from the top
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop;
        const windowHeight = window.innerHeight;
        const targetPosition = offsetTop - (windowHeight / 5);
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    }
}

// Add event listeners to navbar links
const navbarLinks = document.querySelectorAll('.navigasi span a');
navbarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSectionId = link.getAttribute('href').substring(1);
      scrollToSection(targetSectionId);
    });
});