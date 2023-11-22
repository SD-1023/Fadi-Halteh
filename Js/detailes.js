let mode = window.localStorage.getItem("darkMode");
let darkBtn = document.querySelector("[name=dark-mode]");
let whiteBacks = document.querySelectorAll(".white");
let article = document.querySelector("article");
let card = document.querySelector(".card");
let heartBtn = document.querySelector(".card-des2 button");
if (mode === "enabled") {
  document.body.setAttribute("class", "darkmode");
  darkBtn.style.cssText = "background-color: var(--brand-secondary)";
  card.style.cssText =
    "background-color: var(--body-text);color:var(--lines-color)";
  heartBtn.style.cssText = "color: var(--body-text)";
  article.style.cssText = "background-color: #333;color:var(--body-text)";
  whiteBacks.forEach((back) => {
    back.style.cssText = "background-color: var(--body-text);";
    article.style.cssText = "background-color: #333;color:var(--body-text)";
  });
}

darkBtn.addEventListener("click", () => {
  let mode = window.localStorage.getItem("darkMode");
  if (mode !== "enabled") {
    document.body.setAttribute("class", "darkmode");
    localStorage.setItem("darkMode", "enabled");
    darkBtn.style.cssText = "background-color: var(--brand-secondary)";
    heartBtn.style.cssText = "color: var(--body-text)";
    card.style.cssText =
      "background-color: var(--body-text);color:var(--lines-color)";
    article.style.cssText = "background-color: #333;color:var(--body-text)";
    whiteBacks.forEach((back) => {
      back.style.cssText = "background-color: var(--body-text);";
    });
  } else {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    article.style.cssText = "color: var(--bg_default)";
    card.style.cssText =
      "color: var(--body-text);backgorund-color:var(--lines-color)";
    darkBtn.style.cssText = "background-color: var(--bg_default)";
    heartBtn.style.cssText = "color: var(--bg_default)";
    whiteBacks.forEach((back) => {
      back.style.cssText = "background-color: var(--bg_body);";
    });
  }
});

let favourites = localStorage.getItem("favourites");
let favBtn = document.querySelector("[name=favourites]");

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

