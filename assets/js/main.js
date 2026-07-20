document.addEventListener("DOMContentLoaded", () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('navbar-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;

                const currentPage = window.location.pathname.split("/").pop() || "index.html";
                const navLinks = document.querySelectorAll("nav div div a");
                navLinks.forEach(link => {
                    if (link.getAttribute("href") === currentPage) {
                        link.classList.add("active");
                    }
                });
            }
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        });

    const elements = document.querySelectorAll("header, main > section");
    elements.forEach((el) => {
        el.classList.add("fade-in");
    });

    const observerOptions = {
        threshold: 0.15 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.entries.forEach(entry => { 
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll("main section, .contact-grid, .footer-container");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(el);
    });

    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Message successfully sent. Thank you for contacting Soka's Wood Carving.");
            form.reset();
        });
    });
});