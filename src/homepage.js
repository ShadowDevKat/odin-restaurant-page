import { contentDiv } from ".";
export function displayHomePage() {
    // const contentDiv = document.getElementById("content");

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Home";
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dignissimos, esse, quas, ut ipsa atque velit nostrum aliquid eius sapiente nihil quae tempore error ? Hic cupiditate doloribus ipsa exercitationem nemo.";
    const button1 = document.createElement("button");
    button1.textContent = "Button 1";
    const button2 = document.createElement("button");
    button2.textContent = "Button 2";

    containerDiv.append(heading, para, button1, button2);
    contentDiv.appendChild(containerDiv);
}