import './style.css';
import testpic from './testpic.jpg';


let mainDiv = document.getElementById("content");
mainDiv.innerText = "";

function tabSite(){

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

tabSite()


let switchTabs = (event) => {
    let myButtons = document.querySelectorAll(".tabLinks")
    console.log(myButtons)
    myButtons.forEach((button, currentIndex) => {
        button.addEventListener('click', (event) => {
                if (event.target.id === 'home'){
                    require("./index");
                }
                if (event.target.id === 'menu'){
                    require("./menu");
                }
                if (event.target.id === 'contact'){
                    require("./contact");
                }
        })
    })

}

switchTabs()

function main(){
//Main Header
let mainH1 = document.createElement("h1")
mainH1.setAttribute("id", "theTitle")
mainH1.innerText = "The Resturant Home Page"

mainDiv.appendChild(mainH1);

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


// IMAGE I need to load
let imageDiv = document.createElement("div");
imageDiv.setAttribute("id", "imageDiv");

mainDiv.appendChild(imageDiv)

//let imgSrc = document.createElement("img");
//imgSrc.setAttribute("id", "imgSrc");
//imageDiv.appendChild(imgSrc)

let restImg1 = new Image();
restImg1.src = testpic;
restImg1.setAttribute("id", "restImg")
imageDiv.appendChild(restImg1)



//Paragraph text to add
let mainContent = document.createElement("p");
mainContent.setAttribute("id", "mainContent");

mainContent.innerText += `This resturant is a great place for small eats.
You can buy anything here from coffee to fast 
meals on the go. Need a place to study as well then enjoy
a meal with the tables for eating and resting.`;

mainDiv.appendChild(mainContent)
}
main()

export { tabSite, switchTabs };



/*getButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        //console.log(button)
        
        //console.log(event.button)
        if (event.target.id === "home"){
            //console.log(button.id)
            require('./index')
        }

        else if (event.target.id === "menu"){
            //console.log(button.id)
            require('./menu') 
        }

        else if (event.target.id === "contact"){
            //console.log(button.id)
            require('./contact')  
        }
        
    })
    
})

}*/
