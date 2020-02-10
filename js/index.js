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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav

let navLinks = document.getElementsByTagName("a");

// Create new "Home" nav link (and make it the first link)
const homeLink = document.createElement("a");
homeLink.href = "#";
homeLink.textContent = "Home";
const navContent = document.querySelector("nav");
navContent.prepend(homeLink);

// Create a "More" nav link

const moreLink = document.createElement("a");
moreLink.href = "#";
moreLink.textContent = "More";
navContent.appendChild(moreLink);

// Make an array from navLinks
let navArray = Array.from(navLinks);

for(i=1; i < navArray.length - 1; i++) {
let navText = navLinks[i];
navText.textContent = siteContent["nav"][`nav-item-${i}`];
}

navArray.forEach(link => {
  link.style.color = "green";
});

// Header

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let headerText = document.querySelector("h1");
headerText.textContent = siteContent["cta"]["h1"];
headerText.innerHTML = "DOM<br> Is<br> Awesome";

let buttonText = document.querySelector("button");
buttonText.textContent = siteContent["cta"]["button"];
buttonText.style.border = "2px solid purple";
buttonText.style.borderRadius = "20px";
buttonText.style.fontWeight = "500";

// Top content

let featuresTitle = document.querySelector(".top-content:nth-of-type(1) .text-content h4");
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

let featuresP = document.querySelector(".top-content:nth-of-type(1) .text-content p");
featuresP.textContent = siteContent["main-content"]["features-content"];

let aboutTitle = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelector(".top-content .text-content:nth-of-type(2) p");
aboutP.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom content

let servicesTitle = document.querySelector(".bottom-content .text-content h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

let servicesP = document.querySelector(".bottom-content .text-content p");
servicesP.textContent = siteContent["main-content"]["services-content"];

let productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
productTitle.textContent = siteContent["main-content"]["product-h4"];

let productP = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productP.textContent = siteContent["main-content"]["product-content"];

let visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

let visionP = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
visionP.textContent = siteContent["main-content"]["vision-content"];

// Contact section

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

let addressP = document.querySelector(".contact p");
addressP.textContent = siteContent["contact"]["address"];
addressP.innerHTML = "123 Way 456 Street<br>Somewhere, USA";

let numberP = document.querySelector(".contact p:nth-of-type(2)");
numberP.textContent = siteContent["contact"]["phone"];

let emailP = document.querySelector(".contact p:last-child");
emailP.textContent = siteContent["contact"]["email"];

// Footer

let footerP = document.querySelector("footer");
footerP.textContent = siteContent["footer"]["copyright"];
footerP.style.color = "purple";
footerP.style.fontWeight = "600";





