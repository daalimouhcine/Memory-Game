const lion = "https://i.pinimg.com/564x/49/c4/38/49c43851924b9e2036c0377c12208ec1.jpg";
const hybris = "https://i.pinimg.com/564x/5e/74/db/5e74dbf1c0a2987bbd40442631217a4d.jpg";
const owl = "https://i.pinimg.com/564x/00/86/97/0086976b1bc4e1014ac589d008c5250d.jpg";
const tropical = "https://i.pinimg.com/564x/8e/08/f9/8e08f9d27baa034eaa8ddb34b403ad28.jpg";
const blue = "https://i.pinimg.com/564x/21/40/40/21404003ae70f1777147161fa9cfac16.jpg";

const body = document.querySelector("body");



let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");

let img1T = true;
let img2T = true;
let img3T = true;
let img4T = true;
let img5T = true;
let img6T = true;
let img7T = true;
let img8T = true;

const startButton = document.getElementById("start-btn");


let howTry = 2;


let first;
let secont;
let third;
let forth;
let fifth;
let sixth;
let saventh;
let eghth;


let stillPlaying = true;


const choises = 8;

let imgChois = [];

let failes = 0;
let score = 0;


var hidden = false;





const randomPhotos = () => {
    const randomChois = Math.floor(Math.random() * choises);
    
    switch(randomChois) {
        case 0:
            first = lion;
            secont =tropical;
            third = hybris;
            forth = owl;
            fifth = lion;
            sixth = hybris;
            saventh =tropical;
            eghth = owl;
            break;
        
        case 1:
            first = owl ;
            secont =hybris ;
            third = hybris;
            forth = owl ;
            fifth = lion;
            sixth = tropical;
            saventh = tropical;
            eghth = lion;
            break;
    
        case 2:
            first = lion;
            secont =tropical;
            third = hybris;
            forth = owl;
            fifth = tropical;
            sixth = hybris;
            saventh =lion;
            eghth = owl;
            break;

        case 3:
            first = tropical;
            secont =owl;
            third = hybris;
            forth = owl;
            fifth = hybris;
            sixth = lion;
            saventh =lion;
            eghth = tropical;
            break;

        case 4:
            first = hybris;
            secont =tropical;
            third = hybris;
            forth = lion;
            fifth = lion;
            sixth = owl;
            saventh =owl;
            eghth = tropical;
            break;

        case 5:
            first = owl;
            secont =lion;
            third = hybris;
            forth = tropical;
            fifth = hybris;
            sixth = tropical;
            saventh =lion;
            eghth = owl;
            break;

        case 6:
            first = hybris;
            secont =hybris;
            third = owl;
            forth = owl;
            fifth = tropical;
            sixth = lion;
            saventh =tropical;
            eghth = lion;
            break;

        case 7:
            first = lion;
            secont =lion;
            third = tropical;
            forth = owl;
            fifth = hybris;
            sixth = hybris;
            saventh =tropical;
            eghth = owl;
            break;

        case 8:
            first = tropical;
            secont =tropical;
            third = lion;
            forth = owl;
            fifth = lion;
            sixth = hybris;
            saventh =owl;
            eghth = hybris;
            break;

    }
};


function check(element) {
    if(element[0] == element[1]) {
        const div = document.createElement("div");
        div.classList.add("won-lose");
        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fas fa-times"></i>';
        const p = document.createElement("p");


        body.appendChild(div);
        div.appendChild(btn);
        div.appendChild(p);

        p.innerText = "You Wine yaaaay";

        btn.addEventListener("click",function(){
            document.querySelector(".won-lose").remove();
        });

        score++;
        document.querySelector(".scores").innerText = score;

    } else {
        const div = document.createElement("div");
        div.classList.add("won-lose");
        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fas fa-times"></i>';
        const p = document.createElement("p");

        body.appendChild(div);
        div.appendChild(btn);
        div.appendChild(p);

        p.innerText = "You lose nooo";

        btn.addEventListener("click",function(){
            document.querySelector(".won-lose").remove();
        });

        failes++;
        document.querySelector(".failes").innerText = failes;
    }
    stillPlaying = false;
}

function endGame(srcItem)  {
    if(howTry > 0) {
        imgChois.push(srcItem);
    } else {
        imgChois.push(srcItem);
        check(imgChois);
    }
};








img1.onclick = () => {
    if(img1T && stillPlaying === true) {
        img1.src = first;
        howTry--;
        endGame(img1.src);
        img1T = false;
    }

};
img2.onclick = () => {
    if(img2T && stillPlaying === true) {
        img2.src = secont;
        howTry--;
        endGame(img2.src);
        img2T = false;
    }

};
img3.onclick = () => {
    if(img3T && stillPlaying === true) {
        img3.src = third;
        howTry--;
        endGame(img3.src);
        img3T = false;
    }

};
img4.onclick = () => {
    if(img4T && stillPlaying === true) {
        img4.src = forth;
        howTry--;
        endGame(img4.src);
        img4T = false;
    }

};
img5.onclick = () => {
    if(img5T && stillPlaying === true) {
        img5.src = fifth;
        howTry--;
        endGame(img5.src);
        img5T = false;
    }

};
img6.onclick = () => {
    if(img6T && stillPlaying === true) {
        img6.src = sixth;
        howTry--;
        endGame(img6.src);
        img6T = false;
    }

};
img7.onclick = () => {
    if(img7T && stillPlaying === true) {
        img7.src = saventh;
        howTry--;
        endGame(img7.src);
        img7T = false;
    }

};
img8.onclick = () => {
    if(img8T && stillPlaying === true) {
        img8.src = eghth;
        howTry--;
        endGame(img8.src);
        img8T = false;
    }

};


startButton.addEventListener("click",startAgain);


function startAgain(){
    randomPhotos();
    img1.src = first;
    img2.src = secont;
    img3.src = third;
    img4.src = forth;
    img5.src = fifth;
    img6.src = sixth;
    img7.src = saventh;
    img8.src = eghth;
    img1T = true;
    img2T = true;
    img3T = true;
    img4T = true;
    img5T = true;
    img6T = true;
    img7T = true;
    img8T = true;

    howTry = 2;

    imgChois = [];

    stillPlaying = true;

    if(document.querySelector(".won-lose") !== null) {
        document.querySelector(".won-lose").remove();
    }

    setTimeout(function(){
        img1.src = blue;
        img2.src = blue;
        img3.src = blue;
        img4.src = blue;
        img5.src = blue;
        img6.src = blue;
        img7.src = blue;
        img8.src = blue;
    },500);
};



startAgain();
