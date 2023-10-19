import './style.css';
import { tabSite, switchTabs } from './index';

let mainDiv = document.getElementById("content");
mainDiv.innerText = "";

tabSite()
switchTabs()

function menuMain(){
    let contactH1 = document.createElement("h1")
    contactH1.setAttribute("id", "contactTitle")
    contactH1.innerText = "The Resturant Contact Page"
    mainDiv.appendChild(contactH1);
}

menuMain()
