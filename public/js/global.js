// create varaibles in dom
// button id = show from  search
const show_from = document.getElementById("show_from");

// form search
const from_search = document.getElementById("from_search");

// button send form search
const send = document.getElementById("send");
const deep = document.getElementById("deep");

// button  show nav
const show_nav = document.getElementById("show-nav");

// div nav

const nav = document.getElementById("nav");

// function add class
const addClass = ([el, nameClass]) => {
  el.classList.add(nameClass);
};

// function add class
const removeClass = ([el, nameClass]) => {
  el.classList.remove(nameClass);
};

// function add class
const toggleClass = ([el, nameClass]) => {
  el.classList.toggle(nameClass);
};

// add event click for button in id = show_from
show_from.addEventListener("click", (e) => {
  toggleClass([from_search, "overly"]);
  toggleClass([document.body, "no_scroll"]);
  toggleClass([deep, "overly"]);
  toggleClass([show_from.firstElementChild, "fa-times"]);
});

// add event click for button send
send.addEventListener("click", () => {
  preventDefault();
  console.log("flflfllflflflffl");
});

// add evrnt click for deep
deep.addEventListener("click", (e) => {
  removeClass([e.currentTarget, "overly"]);
  removeClass([document.body, "no_scroll"]);
  removeClass([show_from.firstElementChild, "fa-times"]);
  removeClass([from_search, "overly"]);
});

// add event click for btn show_nav

if (window.innerWidth <= 767) {
  console.log("yes");
  show_nav.addEventListener("click", () => {
    toggleClass([nav, "show-nav"]);
    toggleClass([show_nav.firstElementChild, "fa-times"]);
  });
}