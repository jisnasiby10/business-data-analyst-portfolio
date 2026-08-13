// =========================================================
// JISNA SIBY PORTFOLIO
// Simple navigation and scroll behavior
// =========================================================


document.addEventListener("DOMContentLoaded", () => {


    // ------------------------------------------
    // Navigation links
    // ------------------------------------------

    const navLinks =
        document.querySelectorAll(".navigation a");

    const sections =
        document.querySelectorAll("section[id]");


    // ------------------------------------------
    // Highlight current section
    // ------------------------------------------

    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionBottom =
                sectionTop + section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");


            const target =
                link.getAttribute("href");


            if (
                target === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();



    // ------------------------------------------
    // Smooth navigation
    // ------------------------------------------

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (!targetId.startsWith("#")) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });



    // ------------------------------------------
    // Resume / external links
    // ------------------------------------------

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach((link) => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });

});