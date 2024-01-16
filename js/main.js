document.querySelector("#text").addEventListener("focusout", myText);
document.querySelector("#password").addEventListener("focusout", myPass);
document.querySelector("#btn").addEventListener("click", function () {
  myText();
  myPass();
});
let name = document.querySelector("#text");
let password = document.querySelector("#password");
let item = document.querySelectorAll(".item");
let btn = document.querySelector("#btn");
function myText() {
  let message, text;
  let errElement = document.getElementById("text");
  message = document.getElementById("err");
  text = document.getElementById("text").value;

  try {
    if (text == "") {
      errElement.classList.add("err");
      throw "bo'sh";
    }
    if (text.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = " ";
    }
  } catch (e) {
    message.innerHTML = "Qiymat " + e;
  }
}
function myPass() {
  let message, pass;
  let errElement = document.getElementById("password");
  message = document.getElementById("err2");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.add("err2");
      throw "bo'sh";
    }
    if (pass.length > 0) {
      errElement.classList.remove("err2");
      errElement.classList.add("valid");
      message.innerHTML = "";
    }
  } catch (e) {
    message.innerHTML = "Qiymat " + e;
  }
}
let arr = [];
let form = document.querySelector(".login");
let list = document.querySelector(".list");
const render = () => {
  list.innerHTML = arr
    .map(
      (item) =>
        `
  <div>
    <p>Username:${item.username}</p>
  </div>
  `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  arr.push({ id: Date.now(), username: name.value });
  name.value = "";
  password.value = "";
  render();
});
let deleteItem = document.querySelector(".delete");
let deleteValue = document.querySelector("#delete");
deleteItem.addEventListener("submit", (e) => {
  e.preventDefault();
  clear(deleteValue.value);
  deleteValue.value = "";
});
const clear = (item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].username === item) {
      arr.splice(i, 1);
    }
    render();
  }
};
