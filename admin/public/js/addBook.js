// create variables

// button send request
const send = document.getElementById("send");

// input title Book
const titleBook = document.getElementById("title");
// input name Author
const nameAuthor = document.getElementById("name");
// input price Book
const priceBook = document.getElementById("price");
// input number Page
const numberPage = document.getElementById("number");
// span  select category
const select = document.getElementById("select");
// div option category
const boxOption = [...document.getElementById("options").children];
// input descreption
const descreption = document.getElementById("descreption");
// input file image
const img = document.getElementById("img");
// show message
const message = document.getElementById("message");

// span in redirct page
const link = document.getElementById("link");

///
// ss = {
//   titleBook: titleBook.value,
//   nameAuthor: nameAuthor.value,
//   priceBook: priceBook.value,
//   numberPage: numberPage.value,
//   select: select.dataset.id,
//   img: img.files[0],
//   descreption: descreption.value,
// };

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

// add event keyup on input title Book
titleBook.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!e.target.value.length)
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  if (err.includes(e.target)) removeElementInArrayErr(e.target);
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});

//add event focus on input title Book
titleBook.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event keyup on input name Author
nameAuthor.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!e.target.value.length)
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  if (err.includes(e.target)) removeElementInArrayErr(e.target);
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});
//add event focus on input name Author
nameAuthor.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event keyup on input descreption Book
descreption.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!e.target.value.length)
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  if (err.includes(e.target)) removeElementInArrayErr(e.target);
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});
//add event focus on input descreption Book
descreption.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event keyup on input price Book
priceBook.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!Number(priceBook.value))
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  if (!e.target.value.length)
    return addRemoveErrSomeEl([e.target, "success", "error"]);

  if (err.includes(e.target)) removeElementInArrayErr(e.target);
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});
//add event focus on input price Book
priceBook.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event keyup on input number Page Book
numberPage.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.trim();
  if (!Number(numberPage.value))
    return addRemoveErrSomeEl([e.target, "success", "error"]);
  if (!e.target.value.length)
    return addRemoveErrSomeEl([e.target, "success", "error"]);

  if (err.includes(e.target)) removeElementInArrayErr(e.target);
  removeClass([e.target, "error"]);
  addClass([e.target, "success"]);
});
//add event focus on input znumber Page Book
numberPage.addEventListener("focus", (e) => {
  if (!e.target.value) addRemoveErrSomeEl([e.target, "success", "error"]);
});

// add event click in span select category
select.addEventListener("click", (e) => {
  toggleClass([e.target.nextElementSibling, "d-none"]);
});

// add event click for span selcet
boxOption.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    select.textContent = e.target.dataset.name;
    select.dataset.id = e.target.dataset.id;
    select.previousElementSibling.value = e.target.dataset.id;
    addClass([select, "success"]);
    toggleClass([e.target.parentElement, "d-none"]);
  });
});

img.addEventListener("change", (e) => {
  if (
    img.files[0].type != "image/png" &&
    img.files[0].type != "image/jpg" &&
    img.files[0].type != "image/jpeg"
  )
    return addClass([e.target.parentElement, "error"]);
  removeClass([e.target.parentElement, "error"]);
  addClass([e.target.parentElement, "success"]);
});

// add event blur for check input descreption Book
descreption.addEventListener("blur", (e) => {
  if (err.length === 0) {
    removeClass([send, "not-allowed"]);
    addClass([send, "bg-black"]);
    return;
  }
  addClass([send, "not-allowed"]);
  removeClass([send, "bg-black"]);
});

// add event click on button send for singup
// send.addEventListener("click", (e) => {
//   if (!descreption.value.length) return;
//   document.documentElement.style.setProperty("--after", "1");
//   send.firstElementChild.textContent = null;
//   addClass([send.firstElementChild, "loading"]);
//   // const dt = {
//   //   titleBook: titleBook.value.toLowerCase(),
//   //   descreption: descreption.value.toLowerCase(),
//   //   nameAuthor: nameAuthor.value.toLowerCase(),
//   //   priceBook: priceBook.value,
//   //   numberPage: numberPage.value,
//   //   img: img.files[0],
//   //   select: select.dataset.id,
//   // };
//   const data = new FormData();
//   data.append("titleBook",titleBook.value.toLowerCase())
//   data.append("img",img.files[0])
//   fetch("/data/addbook", {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     body:data,
//     method: "post",
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       titleBook.value = null;
//       nameAuthor.value = null;
//       priceBook.value = null;
//       numberPage.value = null;
//       select.dataset.id = null;
//       img.value = null;
//       descreption.value = null;
//       send.firstElementChild.textContent = "send";
//       removeClass([send.firstElementChild, "loading"]);
//       addClass([message, "bottom-0"]);
//     //   if (res.message) {
//     //     message.firstElementChild.firstElementChild.textContent =
//     //       "seccess opretion add category";
//     //     return;
//     //   }
//     //   if (!res.message) {
//     //     message.firstElementChild.firstElementChild.textContent =
//     //       "this is name is found";
//     //     return;
//     //   }
//       console.log("server in errr 500");
//     });
// });

// add event click for icon close in message
// message.firstElementChild.addEventListener("click", () => {
//   removeClass([message, "bottom-0"]);
//   addClass([send, "not-allowed"]);
//   removeClass([send, "bg-black"]);
// });

link.addEventListener("click", () => (window.location.href = "/data/dach/"));
