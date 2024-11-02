
document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.getElementById("navigation");
    const mainSection = document.getElementById("home");

    window.addEventListener("scroll", () => {
        const mainSectionBottom = mainSection.getBoundingClientRect().bottom;

        if (mainSectionBottom <= 60) {
            // Add the 'nav-top' class and remove 'nav-bottom' when scrolled past main section
            navigation.classList.add("nav-top");
            navigation.classList.remove("nav-bottom");
        } else {
            // Add the 'nav-bottom' class and remove 'nav-top' when in the main section
            navigation.classList.add("nav-bottom");
            navigation.classList.remove("nav-top");
        }
    });
});
