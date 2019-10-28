
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ------- Header -------//
const nav = document.querySelector("nav");
const navA = Array.from(document.getElementsByTagName("a"));

navA[0].textContent = siteContent.nav["nav-item-1"];
navA[1].textContent = siteContent.nav["nav-item-2"];
navA[2].textContent = siteContent.nav["nav-item-4"];
navA[3].textContent = siteContent.nav["nav-item-5"];
navA[4].textContent = siteContent.nav["nav-item-6"];
navA[5].textContent = siteContent.nav["nav-item-7"];

navA.forEach(el => {
  el.style.color = "#14FA0C";
})

const signIn = document.createElement("a");
signIn.textContent = "Sign In";
nav.prepend(signIn);

const signOut = document.createElement("a");
signOut.textContent = "Sign Out";
nav.appendChild(signOut);

const headerImg = document.getElementById('logo-img');


// ------- CTA area -------//

const headText = document.getElementsByTagName("h1");
headText[0].innerHTML = 'DOM <br /> Is <br /> Awesome';
headText[0].style.fontSize = "5rem";

const ctaBtn = document.getElementsByTagName("button")[0];
ctaBtn.textContent = "Get Started";
ctaBtn.addEventListener("mouseover", mouseOver);
ctaBtn.addEventListener("mouseout", mouseOut)


function mouseOver() {
  ctaBtn.style.color = "white";
}

function mouseOut() {
  ctaBtn.style.color = "black";
}

const ctaImg = document.getElementById("cta-img");
ctaImg.src = "img/header-img.png";

// ------- Top Content -------//
const topContent = document.getElementsByClassName("top-content")
const paraS = siteContent["main-content"];

const topContentHeadfirst = document.getElementsByTagName("h4")[0];
topContentHeadfirst.textContent = "Features";

const topContentParaFirst = document.getElementsByTagName("p")[0];
topContentParaFirst.textContent = paraS["features-content"];

const topContentHeadsecond = document.getElementsByTagName("h4")[1];
topContentHeadsecond.textContent = "About";

const topContentParaSecond = document.getElementsByTagName("p")[1];
topContentParaSecond.textContent = paraS["about-content"];

// ------- middle Image -------//
const midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";

// ------- Bottom Content -------//
const bottomContent = document.getElementsByClassName("bottom-content")
const firstBottomContentH = document.getElementsByTagName("h4")[2];
firstBottomContentH.textContent = "Services"

const firstBottomContentP = document.getElementsByTagName("p")[2];
firstBottomContentP.textContent = paraS["services-content"];

const secondBottomContentH = document.getElementsByTagName("h4")[3];
secondBottomContentH.textContent = "Product";

const secondBottomContentP = document.getElementsByTagName("p")[3];
secondBottomContentP.textContent = paraS["product-content"];

const thirdBottomContentH = document.getElementsByTagName("h4")[4];
thirdBottomContentH.textContent = "Vision";

const thirdBottomContentP = document.getElementsByTagName("p")[4];
thirdBottomContentP.textContent = paraS["product-content"];

// ------- Contact Section -------//
const sectionC = siteContent["contact"];
const contact = document.getElementsByClassName("contact");

const contactContentH = document.getElementsByTagName("h4")[5];
contactContentH.textContent = "Contact";

const contactContentPFirst = document.getElementsByTagName("p")[5];
contactContentPFirst.textContent = sectionC["address"];

const contactContentPSecond = document.getElementsByTagName("p")[6];
contactContentPSecond.textContent = sectionC["phone"];

const contactContentPThird = document.getElementsByTagName("p")[7];
contactContentPThird.textContent = sectionC["email"];


// ------- Footer -------//

const footerP = document.getElementsByTagName("p")[8];
footerP.textContent = siteContent.footer.copyright;
