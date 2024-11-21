var typed = new Typed(".text", {
    strings: ["Web Developer", "Full Stack Developer", "Programmer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  });

  const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth' // Enable smooth scrolling
        });
    });
});