document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL REVEAL
    ========================= */
    const revealElements = document.querySelectorAll(".reveal");

    function reveal() {
        const windowHeight = window.innerHeight;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 90) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", reveal, {
        passive: true
    });

    window.addEventListener("load", reveal);

    reveal();


    /* =========================
       MOBILE MENU
    ========================= */
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        // Tutup menu setelah memilih menu
        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */
    const sections =
        document.querySelectorAll(
            "section[id], header[id]"
        );

    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    function updateActiveNav() {

        const scrollPosition =
            window.scrollY + 140;

        let currentId = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentId = section.id;
            }

        });


        navItems.forEach((item) => {

            const target =
                item.getAttribute("href");

            item.classList.toggle(
                "active",
                target === `#${currentId}`
            );

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );

    updateActiveNav();


    /* =========================
       PRODUCT CARD ANIMATION
    ========================= */
    const cards =
        document.querySelectorAll(
            ".reveal-card"
        );


    if (cards.length > 0) {

        const cardObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry, index) => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            entry.target.style.transitionDelay =
                                `${index * 70}ms`;


                            entry.target.classList.add(
                                "active"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        cards.forEach((card) => {

            card.classList.add("reveal");

            cardObserver.observe(card);

        });

    }


    /* =========================
       HERO PARALLAX
    ========================= */
    const heroImage =
        document.querySelector(
            ".hero-img"
        );


    if (
        heroImage &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        window.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    ) * 2;


                const y =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    ) * 2;


                heroImage.style.transform =
                    `translate3d(
                        ${x * 5}px,
                        ${y * 5}px,
                        0
                    )`;

            },
            {
                passive: true
            }
        );

    }


    /* =========================
       SMOOTH ANCHOR
       ========================= */
    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });

});
