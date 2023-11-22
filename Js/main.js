let mode = window.localStorage.getItem("darkMode");
let darkBtn = document.querySelector("[name=dark-mode]");

if (mode === "enabled") {
  document.body.setAttribute("class", "darkmode");
  darkBtn.style.cssText = "background-color: var(--brand-secondary)";

}

darkBtn.addEventListener("click", () => {
  let mode = window.localStorage.getItem("darkMode");
  if (mode !== "enabled") {
    document.body.setAttribute("class", "darkmode");
    localStorage.setItem("darkMode", "enabled");
    darkBtn.style.cssText = "background-color: var(--brand-secondary)";

  } else {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    darkBtn.style.cssText = "background-color: var(--bg_default)";
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
let javaCardHtml=`<div class="favourite-card">
<img id="javascript" src="../imgs/javascript.jpg" alt="javascript" />
<h4 class="trim-1line">JavaScript</h4>
<div class="stars">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</div>
</div> `

let javaCard = localStorage.getItem("javaCard")
if (javaCard){
  let favBar = document.querySelector(".favourite-card-containrer");
  favBar.innerHTML += javaCardHtml;
}

let input = document.querySelector(".search-input");
let inBox = document.querySelector(".search");

input.addEventListener("focus", () => {
  inBox.style.cssText = "outline:3px solid black;";
});
input.addEventListener("blur", () => {
    inBox.style.cssText = "none";
  });