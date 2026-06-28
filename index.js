function createBubble() {
        const bubble = document.createElement("div");
        bubble.textContent = "🫧";
        bubble.style.position = "fixed";
        bubble.style.top = "-50px";
        bubble.style.left = Math.random() * window.innerWidth + "px";
        bubble.style.fontSize = "2em";
        bubble.style.zIndex = "1000";
        bubble.style.transition = "transform 3s linear, opacity 1s ease-out";

        document.body.appendChild(bubble);

        setTimeout(() => {
            bubble.style.transform = `translateY(${window.innerHeight + 50}px)`;
            bubble.style.opacity = "0";
        }, 900);

        setTimeout(() => {
            bubble.remove();
        }, 5000);
    }

    setInterval(createBubble, 500);

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            hamburger.classList.remove("active");
        });
    });

    const abt = document.querySelector("#abt");
    const pfl = document.querySelector("#pfl");
    const ctc = document.querySelector("#ctc");
    const head = document.getElementById("head");
    const ptfl = document.querySelector(".ptfl");

    abt.addEventListener("click", (e) => {
        e.preventDefault();
        head.scrollIntoView({ behavior: "smooth" });
    });

    pfl.addEventListener("click", (e) => {
        e.preventDefault();
        ptfl.scrollIntoView({ behavior: "smooth" });
    });