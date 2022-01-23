// create variables
// button send request
const send = document.getElementById("send");

// input Firat Name
const category = document.getElementById("enter name category");

// show message
const message = document.getElementById("message");

// span in redirct page
const link = document.getElementById("link");

// old name content

const old = document.getElementById("old");

///

// array in error
const err = [];
// get id and name category in url
const r = new URL(decodeURI(document.URL));
const cat = {
  id: decodeURIComponent(r.pathname).split("/")[
    r.pathname.split("/").length - 2
  ],
  name: decodeURIComponent(r.pathname).split("/").pop(),
};
old.textContent = cat.name;
////

/// create functions

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

// function add class and remove class same element and add message error
const addRemoveErrSomeEl = ([el, success, error]) => {
  removeClass([el, success]);
  addClass([el, error]);
  if (err.includes(el)) return;
  err.push(el);
};

// function remove element in array err
const removeElementInArrayErr = (el) => {
  // get index for element in array err
  let index = err.indexOf(el);

  // remove element in array err
  err.splice(index, 1);
};

// add event keyup on input category
category.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!e.target.value.length)
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  if (err.includes(e.target)) removeElementInArrayErr(e.target);
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});

// add event focus on input category
category.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event blur for check validation  on inputs
category.addEventListener("blur", (e) => {
  if (err.length === 0) {
    removeClass([send, "not-allowed"]);
    addClass([send, "bg-black"]);
    return;
  }
  addClass([send, "not-allowed"]);
  removeClass([send, "bg-black"]);
});

// add event click on button send for singup
send.addEventListener("click", (e) => {
  if (!category.value.length) return;
  document.documentElement.style.setProperty("--after", "1");
  send.firstElementChild.textContent = null;
  addClass([send.firstElementChild, "loading"]);
  cat.name = category.value;
  fetch("/data/editcat/", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cat),
    method: "post",
  })
    .then((res) => res.json())
    .then((res) => {
      category.value = null;
      send.firstElementChild.textContent = "update";
      removeClass([send.firstElementChild, "loading"]);
      addClass([message, "bottom-0"]);
      if (res.message && typeof res.message === "boolean") {
        old.textContent = cat.name;
        message.firstElementChild.firstElementChild.textContent =
          "seccess opretion update";
        return;
      }
      console.log("server in errr 500");
    });
});

// add event click for icon close in message
message.firstElementChild.addEventListener("click", () => {
  removeClass([message, "bottom-0"]);
  addClass([send, "not-allowed"]);
  removeClass([send, "bg-black"]);
});

link.addEventListener("click", () => (window.location.href = "/data/dach/"));
