let mode = window.localStorage.getItem("darkMode");
let darkBtn = document.querySelector("[name=dark-mode]");
let whiteBacks = document.querySelectorAll(".white");
if (mode === "enabled") {
  document.body.setAttribute("class", "darkmode");
  darkBtn.style.cssText = "background-color: var(--brand-secondary)";
  whiteBacks.forEach((back) => {
    back.style.cssText = "background-color: var(--body-text);";
  });
}

darkBtn.addEventListener("click", () => {
  let mode = window.localStorage.getItem("darkMode");
  if (mode !== "enabled") {
    document.body.setAttribute("class", "darkmode");
    localStorage.setItem("darkMode", "enabled");
    darkBtn.style.cssText = "background-color: var(--brand-secondary)";
    whiteBacks.forEach((back) => {
      back.style.cssText = "background-color: var(--body-text);";
    });
  } else {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    darkBtn.style.cssText = "background-color: var(--bg_default)";
    whiteBacks.forEach((back) => {
      back.style.cssText = "background-color: var(--bg_body);";
    });
  }
});

let favourites = localStorage.getItem("favourites");
let favBtn = document.querySelector("[name=favourites]");
console.log(favBtn);

if (favourites === "enabled") {
  let favBar = document.querySelector(".favourites");
  favBar.style.display = "block";
  favBtn.style.cssText = "background-color: var(--brand-secondary)";
}
favBtn.addEventListener("click", () => {
  let favBar = document.querySelector(".favourites");
  console.log(favBar);
  let favourites = localStorage.getItem("favourites");
  if (favourites !== "enabled") {
    favBar.style.display = "block";
    localStorage.setItem("favourites", "enabled");
    favBtn.style.cssText = "background-color: var(--brand-secondary)";
  } else {
    favBar.style.display = "none";
    localStorage.setItem("favourites", null);
    favBtn.style.cssText = "background-color: var(--bg_default)";
  }
});

let sortDropdownBtn = document.getElementById("sort-by");//this is the div that contains eveything
let menu = document.getElementById("dropdown-sort"); //this is the select 
sortDropdownBtn.addEventListener("click", () => {
  menu.click()
});



let input = document.querySelector(".search-input");
let inBox = document.querySelector(".search");
console.log(input);
console.log(inBox);
input.addEventListener("focus", () => {
  inBox.style.cssText = "outline:3px solid black;";
});
input.addEventListener("blur", () => {
    inBox.style.cssText = "none";
  });