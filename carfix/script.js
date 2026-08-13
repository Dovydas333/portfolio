const hamburgerBtn = document.getElementById("hamburger"); 
const navLinks = document.getElementById("nav-links");

if (hamburgerBtn && navLinks) {

    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburgerBtn.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

}