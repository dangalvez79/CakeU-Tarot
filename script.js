        const toggle = document.getElementById("darkModeToggle");
        const hamburger = document.getElementById("hamburger");
        const navLinks = document.getElementById("navLinks");
        
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });

        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });

        window.addEventListener("load", () => {
            document.getElementById("preloader").style.display = "none";
        });