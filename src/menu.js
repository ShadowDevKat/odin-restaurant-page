import { contentDiv } from ".";
export function displayMenu() {
    // const contentDiv = document.getElementById("content");

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dignissimos, esse, quas, ut ipsa atque velit nostrum aliquid eius sapiente nihil quae tempore error ? Hic cupiditate doloribus ipsa exercitationem nemo.";

    containerDiv.append(heading, para);
    contentDiv.appendChild(containerDiv);
}