import "./styles.css";
import { displayHomePage } from "./homepage";
import { displayMenu } from "./menu";
import { displayAboutUs } from "./about";

// Handle tab switching
export const contentDiv = document.getElementById("content");

const navElement = document.querySelector("nav");
navElement.addEventListener("click", (e) => {
    let btnId = e.target.dataset.buttonName;
    if(!btnId) return;
    contentDiv.textContent = "";

    switch (btnId) {
        case "home":
            displayHomePage();
            break;
        case "menu":
            displayMenu();
            break;
        case "about":
            displayAboutUs();
            break;
        default:
            break;
    }
});

displayHomePage();