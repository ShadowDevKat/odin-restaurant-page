import "./styles.css";
import { displayHomePage } from "./homepage";
import { displayMenu } from "./menu";
import { displayAboutUs } from "./about";

// Handle tab switching
export const contentDiv = document.getElementById("content");

const navElement = document.querySelector("nav");
navElement.addEventListener("click", (e) => {
    let btnId = e.target.id;
    contentDiv.textContent = "";

    switch (btnId) {
        case "home-btn":
            displayHomePage();
            break;
        case "menu-btn":
            displayMenu();
            break;
        case "about-btn":
            displayAboutUs();
            break;
        default:
            break;
    }
});

displayHomePage();