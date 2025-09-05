import { setBackgroundClass, contentDiv } from ".";

const homeContent = {
    headingOne: "Perfectly grilled",
    headingTwo: "Served with passion",
    mainText: "At Crimson Flame, every cut tells a story of fire and flavor.",
    btnText: "View Menu",
}

export function displayHomePage() {
    setBackgroundClass("home-bg");

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("home", "glass-effect");

    const headingOne = document.createElement("h1");
    headingOne.classList.add("home-title");
    headingOne.textContent = homeContent.headingOne;

    const headingTwo = document.createElement("h1");
    headingTwo.classList.add("home-title");
    headingTwo.textContent = homeContent.headingTwo;

    const para = document.createElement("p");
    para.classList.add("home-text");
    para.textContent = homeContent.mainText;

    const button = document.createElement("button");
    button.classList.add("home-btn", "btn-underline");
    button.textContent = homeContent.btnText;
    button.dataset.buttonName = "menu";

    containerDiv.append(headingOne, headingTwo, para, button);
    contentDiv.appendChild(containerDiv);
}