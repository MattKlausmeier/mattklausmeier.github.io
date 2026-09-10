(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const intro = document.createElement("p");
        intro.textContent = "Contact me: ";
        const name = document.createElement("p");
        name.textContent = "blog";
        const at = document.createElement("p");
        at.textContent = "@";
        const domain = document.createElement("p");
        domain.textContent = "mattklausmeier.com";
        const contact = document.getElementById("contact");
        contact.appendChild(intro);
        contact.appendChild(name);
        contact.appendChild(at);
        contact.appendChild(domain);
    });
})();
