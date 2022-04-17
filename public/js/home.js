//
// create parent element silders
const elementsSilders = [
  ...document.querySelector(".box-slider .content").children,
];
// crete btn left
const btnLeft = document.getElementById("btn-left");

// crete btn right
const btnRight = document.getElementById("btn-right");

// create div in id front-end
const frontEnd = document.getElementById("front-end");
const frontEndRow = document.getElementById("front-end-row");

// create div in id back-end
const backEnd = document.getElementById("back-end");
const backEndRow = document.getElementById("back-end-row");

///

let counter = 0;

let scrollFrontEnd = false;
let scrollBackEnd = false;
let e1;
///

// create function for create element div and add class
const createElementDiv = (nameClass) => {
  let div = document.createElement("div");
  let attDiv = document.createAttribute("class");
  attDiv.value = nameClass;
  div.setAttributeNode(attDiv);
  return div;
};

// create function for check scroll and show data for client
const checkScrollShowData = (elOff, elRow, id) => {
  if (window.scrollY >= elOff.offsetTop - 400) {
    e1 = createElementDiv(
      "py-5 w-100 h-100 d-flex justify-content-center align-items-center"
    );
    e1.appendChild(createElementDiv("spaner"));
    elRow.appendChild(e1);
    getDataCat(id, 5).then((books) => {
      elRow.firstElementChild.remove();
      books.books.forEach((book) => {
        console.log(book);
        elRow.innerHTML += infoBookHtml(book);
      });
    });
  }
};

// create function return info book in html
const infoBookHtml = ({ image, title, _id }) => {
  return `
  <article class=" pack col-3 my-4">
    <div class="py-2 px-2 w-100 h-100 d-flex flex-column">
      <div class=""> 
          <a class="w-100" href="/book/${_id}">
              <img class="w-100 rounded" src="/images/${image}"  alt="image book" />
          </a>
      </div>
      <div class="flex-grow-1 py-2">
          <h6> ${title}</h6>
      </div>
      <div> 
        <a class="flex-grow-0 text-decoration-none" href="/book/${_id}"> Show details</a>
      </div>
    </div>
  </article>
  `;
};

// create function get data for type gategory
const getDataCat = async (id, limit) => {
  return await fetch("/home", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, limit: limit }),
    method: "post",
  }).then((res) => res.json());
};

// getDataCat("61f1d312e364b718a3ff4bd5");
// setTimeout(() => {
//   getDataCat("61f1d2c4e364b718a3ff4bc9");
// }, 1);

// add event click for btn btnRight
btnRight.addEventListener("click", () => {
  if (counter === 0) {
    return;
  } else {
    let el = document.querySelector(".active-left");
    elementsSilders[counter].classList.add("active-silder");
    counter--;
    el.classList.remove("active-left");
  }
});
// add event click for btn btnLeft
btnLeft.addEventListener("click", () => {
  console.log(counter);
  if (counter === elementsSilders.length - 1) {
    counter = elementsSilders.length - 1;
  } else {
    let el = document.querySelector(".active-silder");
    elementsSilders[counter].classList.add("active-left");
    counter++;
    el.classList.remove("active-silder");
  }
});

///

window.onscroll = () => {
  if (!scrollFrontEnd) {
    if (window.scrollY >= frontEnd.offsetTop - 400) {
      scrollFrontEnd = !scrollFrontEnd;
      checkScrollShowData(frontEnd, frontEndRow, "61f1d312e364b718a3ff4bd5");
    }
  }
  if (!scrollBackEnd) {
    if (window.scrollY >= backEnd.offsetTop - 400) {
      scrollBackEnd = !scrollBackEnd;
      checkScrollShowData(backEnd, backEndRow, "61f1d312e364b718a3ff4bd5");
    }
  }
};

// window.scrollByPages(1);
///
