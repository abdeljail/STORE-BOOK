// create variable
// button delete
const boxBtnsDels = document.querySelectorAll(".btn-del");
// button edit
const boxBtnsEdis = document.querySelectorAll(".btn-edi");
// div overly
const overly = document.getElementById("overly");
// div del-mes
const delMes = document.getElementById("del-mes");
// icon close
const close = document.getElementById("close");
// icon link
const link = document.getElementById("link");
// input name category
const delCat = document.getElementById("del-cat");
// button send ( delete category )
const send = document.getElementById("send");
// span for change content category
const nameCat = document.getElementById("name");

///

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

///

// loop for buttons deletes
// and add event click for delete category
boxBtnsDels.forEach((btnDel) => {
  btnDel.addEventListener("click", (e) => {
    nameCat.textContent = e.target.dataset.name;
    send.dataset.id = e.target.dataset.id;
    removeClass([overly, "no-show"]);
    addClass([delMes, "show"]);
  });
});

// and add event click for update category
boxBtnsEdis.forEach((btnEdi) => {
  btnEdi.addEventListener(
    "click",
    (e) => (window.location.href = `/data/editcat/${e.target.dataset.id}`)
  );
});

// add evnet click for icon close
close.addEventListener("click", () => {
  removeClass([delMes, "show"]);
  setTimeout(() => addClass([overly, "no-show"]), 300);
});

// add event keyup for input name category
delCat.addEventListener("keyup", (e) => {
  if (nameCat.textContent.toLowerCase() != e.target.value) {
    if (send.classList.contains("delete-cat"))
      removeClass([send, "delete-cat"]);
    return;
  }
  addClass([send, "delete-cat"]);
});

// add event click for button send
send.addEventListener("click", (e) => {
  send.firstElementChild.textContent = "";
  addClass([send.firstElementChild, "loading"]);
  delMes.style.zIndex = "2";
  fetch("/data/deletecat/", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: send.dataset.id }),
    method: "post",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.message && typeof res.message === "boolean") {
        send.firstElementChild.textContent = "seccess";
        removeClass([send.firstElementChild, "loading"]);
        addClass([send, "delete-seccess"]);
        setTimeout(() => {
          let cat = document.getElementById(send.dataset.id);
          cat.remove();
          removeClass([send, "delete-seccess"]);
          removeClass([send, "delete-cat"]);
          addClass([overly, "no-show"]);
          removeClass([delMes, "show"]);
          delCat.value = "";
        },1000);
        return;
      }
      console.log("server in errr 500");
    });
});

link.addEventListener("click", () => (window.location.href = "/data/dach/"));
