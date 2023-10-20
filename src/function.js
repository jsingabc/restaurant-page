
import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";
import { menuMain } from "./menu"
import { contactMain } from "./contact";
import { homeMain } from "./home";




function tabSite(){
    let mainDiv = document.getElementById("content");

    //create tabs
    let tabs = document.createElement("div");
    tabs.setAttribute("class", "tabs");
    mainDiv.appendChild(tabs)
    
    let homeButton = document.createElement("button");
    homeButton.setAttribute("class", "tabLinks");
    homeButton.setAttribute("id", "home");
    homeButton.innerText = "Home";
    tabs.appendChild(homeButton);
    
    let menuButton = document.createElement("button");
    menuButton.setAttribute("class", "tabLinks");
    menuButton.setAttribute("id", "menu");
    menuButton.innerText = "Menu";
    tabs.appendChild(menuButton);
    
    let contactButton = document.createElement("button");
    contactButton.setAttribute("class", "tabLinks");
    contactButton.setAttribute("id", "contact");
    contactButton.innerText = "Contact";
    tabs.appendChild(contactButton);

    }

    
        function buttonHandler(){
            let homeBtn = document.querySelector("#home")
            let menuBtn = document.querySelector("#menu")
            let contactBtn = document.querySelector("#contact")

            homeBtn.addEventListener('click', (event) => {
                console.log(event);
                loadHome()
            })

            menuBtn.addEventListener('click', (event) => {
                console.log(event);
                loadMenu()
            })

            contactBtn.addEventListener('click', (event) => {
                console.log(event);
                loadContact()
            })

        }

        export { tabSite, buttonHandler }


       