// create varaibles

// create div quantité
const quantité = document.getElementById("quan");

// create box
const boxQuan = [...document.getElementById("box-quan").children];

// create button add cart
const addCart = document.getElementById("add-cart");

// create button back
const back = document.getElementById("back");

const message = document.getElementById("message");
// history.forward()

quantité.addEventListener("click", (e) => {
  toggleClass([e.target.nextElementSibling, "d-none"]);
});

boxQuan.forEach((q) => {
  q.addEventListener("click", (e) => {
    quantité.children[0].innerHTML = quantité.children[0].dataset.q =
      e.target.dataset.q;
    addClass([e.target.parentElement, "d-none"]);
  });
});
// add event click button add cart \
addCart.addEventListener("click", (e) => {
  addCart.innerHTML = "";
  let span = document.createElement("span");
  let classSpan = document.createAttribute("class");
  classSpan.value = "d-block m-auto";
  addCart.append(span);
  span.setAttributeNode(classSpan);
  addClass([addCart.firstElementChild, "loading"]);
  fetch("/order", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ numberOrder: e.target.parentElement.dataset.id }),
    method: "post",
  })
    .then((res) => res.json())
    .then((res) => {
      span.remove();
      addCart.textContent = "Add to cart";
      console.log(res);
      if (res.message && typeof res.message === "boolean") {
        message.firstElementChild.firstElementChild.textContent =
          " add this book in your cart !!!";
        message.lastChild.firstElementChild.src = "/image/checked.png";
        addClass([message, "bottom-0"]);
        return;
      }
      if (!res.message && typeof res.message === "boolean") {
        console.log("tes");
        message.firstElementChild.firstElementChild.textContent =
          " this book for add your cart !!!";
        message.lastChild.firstElementChild.src = "/image/comment.png";
        addClass([message, "bottom-0"]);
        return;
      }
      console.log("server in errr 500");
    });
});

back.addEventListener("click", () => {
  history.back();
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
