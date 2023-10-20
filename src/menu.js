import menuPic from './images/menuPic.jpg';
import './menu.css';
import { tabSite, buttonHandler } from './function';



function menuMain(){
    let mainDiv = document.getElementById("content");
    mainDiv.innerText = "";

    tabSite()
    buttonHandler()

    let menuH1 = document.createElement("h1")
    menuH1.setAttribute("id", "menuTitle")
    menuH1.innerText = "The Resturant Menu Page"
    mainDiv.appendChild(menuH1);

    //MENU list for page
    
    let menuHead = document.createElement("h3")
    menuHead.setAttribute("id", "menuHead")
    menuHead.innerText = "Menu"
    mainDiv.appendChild(menuHead)
    
    let menuList = document.createElement("ol")
    menuList.setAttribute("class", "menuList")
    mainDiv.appendChild(menuList)
    
    let menu = ["coffee", "ice tea", "water", "milk",
                "sandwich", "bread", "chicken"]
    
    let li;
    for (let i = 0; i < menu.length; i++){
        li = document.createElement("li");
        //console.log(menu[i])
        li.innerText += menu[i];
        menuList.appendChild(li)
    }

    let imgDiv = document.createElement('div')
    imgDiv.setAttribute("id", "imgDiv");
    mainDiv.appendChild(imgDiv);

    let menuImg1 = new Image();
    menuImg1.src = menuPic;
    menuImg1.setAttribute("id", "menuPic")
    imgDiv.appendChild(menuImg1);

}


const loadMenu = () => {
    //let mainDiv = document.getElementById("content");
    //mainDiv.innerText += "";
    menuMain()
    
}


export default loadMenu
export { menuMain }
