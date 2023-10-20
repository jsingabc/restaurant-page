import '/home/jsing/OdinStudent/repos/restaurant-page/src/home.css';
import testpic from '/home/jsing/OdinStudent/repos/restaurant-page/src/images/testpic.jpg'
import homePic from '/home/jsing/OdinStudent/repos/restaurant-page/src/images/homePic.jpg'
import { tabSite, buttonHandler } from './function';

const homeMain = () => {

    let mainDiv = document.getElementById("content");
    mainDiv.innerText = "";


    tabSite()
    buttonHandler()

        
    //Main Header
    let mainH1 = document.createElement("h1")
    mainH1.setAttribute("id", "theTitle");
    mainH1.innerText = "The Resturant Home Page";
    mainDiv.appendChild(mainH1);

    //add para and a photo
    let homePara = document.createElement('p')
    homePara.setAttribute("id", "homePara");
    homePara.innerText = ` Best fake food in the area
    We have been voted best 10 times in a row by the
    food eater counsel so you know the food is high quality
    and your getting the best. Stop by and pay us a visit.`;
    mainDiv.appendChild(homePara);
    
    //load another image div
    let homeImg = document.createElement("div");
    homeImg.setAttribute("id", "homeImg");

    mainDiv.appendChild(homeImg);
    //add photo to div and js
    let restImg2 = new Image();
    restImg2.src = homePic;
    restImg2.setAttribute("id", "homePic")
    homeImg.appendChild(restImg2)
    
    // load image div
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "imageDiv");
    
    mainDiv.appendChild(imageDiv)
    
    //add photo to div and js
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



const loadHome = () => {
    //let mainDiv = document.getElementById("content");
    //mainDiv.innerText += "";
    homeMain()
}


export default loadHome
export { homeMain }

