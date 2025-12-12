// menu fonctionnel accessible partout depuis le header //

const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;

        toggle.ariaExpanded = isClosed;
        nav.hidden = isOpen;
    });
}

// carousel fonctionnel accessible depuis la page fiche d'artiste //

