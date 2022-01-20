// create variables
// button send request
const send = document.getElementById("send");

// input Firat Name
const First_Name = document.getElementById("first Name");

// input Last Name
const Last_Name = document.getElementById("last Name");

// input in email
const email = document.getElementById("email");

// input Password
const password = document.getElementById("password");

// span in redirct page
const link = document.getElementById("link");

const message = document.getElementById("message");

getComputedStyle(document.body);

///
// let overly = document.querySelector(".page-singup");
// let after = window.getComputedStyle(overly, "::after");
// let zIndex = after.getPropertyValue('z-index')

///

// array in error
const err = [];

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

// add event keyup on input First Name
First_Name.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!e.target.value.length)
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  if (err.includes(e.target)) removeElementInArrayErr(e.target);
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});

// add event focus on input First Name
First_Name.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event keyup on input Last Name
Last_Name.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!e.target.value.length)
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  if (err.includes(e.target)) removeElementInArrayErr(e.target);
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});

// add event focus on input Last Name
Last_Name.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event keyup on input email
email.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (
    !e.target.value.length ||
    !e.target.value.includes("@") ||
    !e.target.value.includes(".")
  ) {
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  }
  if (err.includes(e.target)) {
    removeElementInArrayErr(e.target);
  }
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});

// add event focus on input email
email.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event keyup on input password
password.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!e.target.value.length) {
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  }
  if (err.includes(e.target)) {
    removeElementInArrayErr(e.target);
  }
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});

// add event focus on input password
password.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event blur for check validation  on inputs
password.addEventListener("blur", (e) => {
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
  if (!password.value.length) return;
  document.documentElement.style.setProperty("--after", "1");
  send.firstElementChild.textContent = null;
  addClass([send.firstElementChild, "loading"]);
  const dt = {
    First_Name: First_Name.value,
    Last_Name: Last_Name.value,
    email: email.value,
    password: password.value,
  };
  fetch("/singup", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dt),
    method: "post",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message) {
        window.location = "/singin";
        return;
      }
      if (!res.message) {
        document.documentElement.style.setProperty("--after", "0");
        send.firstElementChild.textContent = "send";
        removeClass([send.firstElementChild, "loading"]);
        message.firstElementChild.firstElementChild.textContent =
          "this is email is found ";
        message.lastChild.firstElementChild.src = "./image/error.png";
        addClass([message, "bottom-0"]);
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
  err.push(email);
  err.push(password);
  email.value = "";
  password.value = "";
});

link.addEventListener(
  "click",
  () => (window.location.href = "http://localhost:3000/")
);
