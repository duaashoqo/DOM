const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

const nav=document.querySelector("nav");
console.log(nav);


const a1=document.querySelector("header > nav ");
a1.getElementsByTagName("a")[0].textContent=siteContent.nav["nav-item-1"];
a1.getElementsByTagName("a")[0].style.color="#33cc99";
console.log(a1);

const a2=document.querySelector("header > nav ");
a2.getElementsByTagName("a")[1].textContent=siteContent.nav["nav-item-2"];
a2.getElementsByTagName("a")[1].style.color="#33cc99";
console.log(a2);

const a3=document.querySelector("header > nav ");
a3.getElementsByTagName("a")[2].textContent=siteContent.nav["nav-item-3"];
a3.getElementsByTagName("a")[2].style.color="#33cc99";
console.log(a3);


const a4=document.querySelector("header > nav ");
a4.getElementsByTagName("a")[3].textContent=siteContent.nav["nav-item-4"];
a4.getElementsByTagName("a")[3].style.color="#33cc99";
console.log(a4);

const a5=document.querySelector("header > nav ");
a5.getElementsByTagName("a")[4].textContent=siteContent.nav["nav-item-5"];
a5.getElementsByTagName("a")[4].style.color="#33cc99";
console.log(a5);


const a6=document.querySelector("header > nav ");
a6.getElementsByTagName("a")[5].textContent=siteContent.nav["nav-item-6"];
a6.getElementsByTagName("a")[5].style.color="#33cc99";
console.log(a6);






const header1=document.querySelector("div > h1");
header1.textContent=siteContent.cta.h1;

console.log(header1);

const btn=document.querySelector("div > button");
btn.textContent=siteContent.cta.button;

console.log(btn);

const img1=document.getElementById("logo-img");
console.log(img1);
img1.src=siteContent.nav['img-src'];

const img2=document.getElementById("cta-img");
console.log(img2);
img2.src=siteContent.cta["img-src"];


const header41 = document.getElementsByClassName("text-content")[0];
header41.querySelector("h4").textContent=siteContent["main-content"]["features-h4"];
console.log(header41);

const header41c = document.getElementsByClassName("text-content")[0];
header41c.querySelector("p").textContent=siteContent["main-content"]["features-content"];
console.log(header41c);


const header42 = document.getElementsByClassName("text-content")[1];
header42.querySelector("h4").textContent=siteContent["main-content"]["about-h4"];
console.log(header42);

const header42c = document.getElementsByClassName("text-content")[1];
header42c.querySelector("p").textContent=siteContent["main-content"]["about-content"];
console.log(header42c);


const img3=document.getElementById("middle-img");
console.log(img3);
img3.src=siteContent["main-content"]["middle-img-src"];


const header43 = document.getElementsByClassName("text-content")[2];
header43.querySelector("h4").textContent=siteContent["main-content"]["services-h4"];
console.log(header43);

const header43c = document.getElementsByClassName("text-content")[2];
header43c.querySelector("p").textContent=siteContent["main-content"]["services-content"];
console.log(header43c);


const header44 = document.getElementsByClassName("text-content")[3];
header44.querySelector("h4").textContent=siteContent["main-content"]["product-h4"];
console.log(header44);

const header44c = document.getElementsByClassName("text-content")[3];
header44c.querySelector("p").textContent=siteContent["main-content"]["product-content"];
console.log(header44c);

const header45 = document.getElementsByClassName("text-content")[4];
header45.querySelector("h4").textContent=siteContent["main-content"]["vision-h4"];
console.log(header45);

const header45c = document.getElementsByClassName("text-content")[4];
header45c.querySelector("p").textContent=siteContent["main-content"]["vision-content"];
console.log(header45c);



const contact=document.querySelector("section > h4 ");
contact.textContent=siteContent.contact["contact-h4"];
console.log(contact);


const address = document.getElementsByClassName("contact")[0].querySelectorAll("p");
address[0].textContent=siteContent.contact.address;

const phone = document.getElementsByClassName("contact")[0].querySelectorAll("p");
phone[1].textContent=siteContent.contact.phone;

const email = document.getElementsByClassName("contact")[0].querySelectorAll("p");
email[2].textContent=siteContent.contact.email;


const footer=document.querySelector("footer > p ");
footer.textContent=siteContent.footer.copyright;
console.log(footer);


const a7=document.createElement('a');
a7.textContent="bla";
a7.style.color="#33cc99";
nav.appendChild(a7);

const a8=document.createElement('a');
a8.textContent="bla bla";
a8.style.color="#33cc99";
nav.appendChild(a8);

















