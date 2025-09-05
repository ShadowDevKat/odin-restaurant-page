import { setBackgroundClass, contentDiv } from ".";

const aboutContent = {
    heading: "About Us",
    mainText: "At Crimson Flame, we're more than a steakhouse — we're a celebration of fire, flavor, and craftsmanship. From hand-selected cuts to sides made with fresh ingredients, every dish is crafted with passion and served with warmth. Here, great food meets unforgettable moments."
}

export function displayAboutUs() {
    setBackgroundClass("about-bg");

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("about", "glass-effect");

    const heading = document.createElement("h1");
    heading.classList.add("about-title");
    heading.textContent = aboutContent.heading;

    const para = document.createElement("p");
    para.classList.add("about-text");
    para.textContent = aboutContent.mainText;

    containerDiv.append(heading, para);
    contentDiv.appendChild(containerDiv);
}