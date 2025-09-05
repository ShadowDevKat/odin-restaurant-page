import { setBackgroundClass, contentDiv } from ".";

import ribeyeImg from "./images/ribeye.jpg";
import filetImg from "./images/filet.jpg";
import ribsImg from "./images/short-ribs.jpg";
import shrimpImg from "./images/shrimp.jpg";
import veggiesImg from "./images/veggies.jpg";
import cakeImg from "./images/lava-cake.jpg";

class MenuItem {
    constructor(title, description, image) {
        this.title = title;
        this.description = description;
        this.image = image;
    }

    render(index) {
        const container = document.createElement("div");
        container.classList.add("menu-item");
        if (index % 2 === 1) container.classList.add("reverse");

        // Details section
        const details = document.createElement("div");
        details.classList.add("menu-item-details");

        const title = document.createElement("h2");
        title.classList.add("menu-item-title");
        title.textContent = this.title;

        const desc = document.createElement("p");
        desc.classList.add("menu-item-text");
        desc.textContent = this.description;

        details.append(title, desc);

        // Image section
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("menu-item-img");

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = `${this.title} image`;

        imgWrapper.appendChild(img);

        container.append(details, imgWrapper);
        return container;
    }
}

// Menu items data
const menuItems = [
    new MenuItem(
        "Grilled Ribeye",
        "A juicy 14oz ribeye, seared over open flame for a smoky char and tender center. Served with garlic butter and your choice of sides.",
        ribeyeImg
    ),
    new MenuItem(
        "Crimson Filet",
        "Our signature cut — lean, buttery filet mignon cooked to perfection. Pairs beautifully with red wine reduction and seasonal vegetables.",
        filetImg
    ),
    new MenuItem(
        "Smoked Short Ribs",
        "Slow-cooked over hardwood for hours until fall-off-the-bone tender. Glazed with house BBQ sauce and served with roasted potatoes.",
        ribsImg
    ),
    new MenuItem(
        "Fire Shrimp Skewers",
        "Plump shrimp marinated with chili and lime, grilled on open flame, and served with a zesty dipping sauce.",
        shrimpImg
    ),
    new MenuItem(
        "Ember Roasted Vegetables",
        "A hearty medley of fire-roasted seasonal vegetables, lightly seasoned with herbs and olive oil.",
        veggiesImg
    ),
    new MenuItem(
        "Molten Lava Cake",
        "Decadent chocolate cake with a molten center, served warm with vanilla ice cream and a drizzle of caramel.",
        cakeImg
    ),
];

export function displayMenu() {
    setBackgroundClass("menu-bg");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    menuItems.forEach((item, index) => menuDiv.appendChild(item.render(index)));

    contentDiv.appendChild(menuDiv);
}