import './contact.css';
import { tabSite, buttonHandler } from './function';
import contactPic from './images/contactPic.jpg';


function contactMain(){

    let mainDiv = document.getElementById("content");
    mainDiv.innerText = "";


    tabSite()
    buttonHandler()

    let contactH1 = document.createElement("h1")
    contactH1.setAttribute("id", "contactTitle")
    contactH1.innerText = "The Resturant Contact Page"
    mainDiv.appendChild(contactH1);


    let contactDiv = document.createElement("div")
    contactDiv.setAttribute("id", "contactDiv")
    mainDiv.appendChild(contactDiv)

    let contactPara = document.createElement("p")
    contactPara.setAttribute("id", "contactPara")
    contactPara.innerText = `
    Contact Page
    Bobby
    777-777-7777
    bobbyBobo@HeyU.com
    `
    contactDiv.appendChild(contactPara)

    let imgDiv = document.createElement("div")
    imgDiv.setAttribute("id", "imgDiv")
    mainDiv.appendChild(imgDiv)

    let contactImg1 = new Image()
    contactImg1.src = contactPic
    contactImg1.setAttribute("id", "contactPic")
    imgDiv.appendChild(contactImg1)

}


const loadContact = () => {
    //let mainDiv = document.getElementById("content");
    //mainDiv.innerText += "";
    contactMain()

}

export default loadContact
export { contactMain }