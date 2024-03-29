let card = document.querySelector(".trend");
let blog = document.querySelector(".trends");
let about = document.querySelector(".about");
let card2 = document.getElementById("trendsec");
let card3 = document.getElementById("trend2");
let mainpage = document.querySelector(".main");
let contet = document.querySelector(".contet");
function homes() {
     mainpage.style.display = "flex";
     card.style.display = "block";
     blog.style.display = "block";
     card2.style.display = "block";
     card3.style.display = "block";
     about.style.display = "none";
     document.getElementById("blog").style.color = "black";
     document.getElementById("home").style.color = "aqua";
     document.getElementById("shop").style.color = "black";
     document.getElementById("about").style.color = "black";
     document.getElementById("contect").style.color = "black";
}

function shops() {
     mainpage.style.display = "none";
     card.style.display = "block";
     card3.style.display = "block";
     about.style.display = "none";
     contet.style.display = "none";
     blog.style.display = "none";
     document.getElementById("blog").style.color = "black";
     document.getElementById("home").style.color = "black";
     document.getElementById("shop").style.color = "aqua";

     document.getElementById("about").style.color = "black";
     document.getElementById("contect").style.color = "black";

}
function blogs() {
     mainpage.style.display = "none";
     card2.style.display = "none";
     card.style.display = "none";
     card3.style.display = "none";
     about.style.display = "none";
     blog.style.display = "block";
     my_card.style.display = "none";
     contet.style.display = "none";
     document.getElementById("blog").style.color = "aqua";
     document.getElementById("home").style.color = "black";
     document.getElementById("shop").style.color = "black";
     document.getElementById("about").style.color = "black";

     document.getElementById("contect").style.color = "black";

}

function abouts() {
     mainpage.style.display = "none";
     card2.style.display = "none";
     card.style.display = "none";
     my_card.style.display = "none";
     blog.style.display = "none";
     contet.style.display = "none";
     card3.style.display = "none";
     about.style.display = "block";
     document.getElementById("blog").style.color = "black";
     document.getElementById("home").style.color = "black";
     document.getElementById("shop").style.color = "black";
     document.getElementById("about").style.color = "aqua";

     document.getElementById("contect").style.color = "black";

}
function contents() {
     mainpage.style.display = "none";
     card2.style.display = "none";
     card.style.display = "none";
     blog.style.display = "none";
     card3.style.display = "none";
     about.style.display = "none";
     my_card.style.display = "none";
     contet.style.display = "block";
     document.getElementById("blog").style.color = "black";
     document.getElementById("home").style.color = "black";
     document.getElementById("shop").style.color = "black";
     document.getElementById("about").style.color = "black";

     document.getElementById("contect").style.color = "aqua";

}
let inpt = document.getElementById("inpt");
function clicknow() {
     if (inpt.value == " ") {
          alert("Please enter your email-id");
     }
     else {
          window.open("https://www.amazon.in/",);
          inpt.value = " ";
     }

}


//Add to Caed

let show = document.querySelector(".show_item");

let addcard={
     name:'Cotton Shirts Men FAshion Floral Summer...',
     price:550
}


let button_1= document.querySelector(".button_1");
button_1.addEventListener("click" , ()=> {
    
       let creat= document.createElement("p");
         show.appendChild(creat).innerHTML=addcard.name + addcard.price;
        
});

// card2

let rahul={
     name:'RAhul Singh',
     Price:342
}

let button_2= document.querySelector(".button_2");
button_2.addEventListener("click" , ()=> {
    
       let creat= document.createElement("p");
         show.appendChild(creat).innerHTML=rahul.name +" "  + rahul.Price;
        
});

// count_item which you  have selected
let count = 0;
let ctn = document.querySelector(".count");

async function btn_click() {
     count = count + 1;
     ctn.innerHTML = await count;

   
}


// card coloring

let my_card = document.querySelector(".my_card_main_part");
//let cls=document.querySelector(".close_part");
function clse() {
     mainpage.style.display = "none";
     blog.style.display = "none";
     my_card.style.display = "block";
     contet.style.display = "none";
     about.style.display = "none";
     card2.style.display = "block";
     card3.style.display = "block";

}

function close_icon() {
     my_card.style.display = "none";
     mainpage.style.display = "flex";
     card.style.display = "block";
     blog.style.display = "block";
     card2.style.display = "block";
     card3.style.display = "block";

}


  






