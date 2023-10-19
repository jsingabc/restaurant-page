import './style.css';
import { tabSite, switchTabs } from './index';

let mainDiv = document.getElementById("content");
mainDiv.innerText = "";

tabSite()
switchTabs()

function menuMain(){
    let menuH1 = document.createElement("h1")
    menuH1.setAttribute("id", "menuTitle")
    menuH1.innerText = "The Resturant Menu Page"
    mainDiv.appendChild(menuH1);
}

menuMain()
