const menu = document.querySelector(".menu");

const btnOpenMenu = document.querySelector(".btnOpenMenu");
const btnCloseMenu = document.querySelector(".btnCloseMenu");

const cart = document.querySelector(".cart");
const cartBtn = document.querySelector(".cartBtn");

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

const counter = document.querySelector(".counter");
const minusBtn = document.querySelector("#btnMinus");
const plusBtn = document.querySelector("#btnPlus");

const gallery = document.querySelectorAll(".pic");
const heroImg = document.querySelector(".productHero");

const addToCartBtn = document.querySelector(".btn");
const cartItens = document.querySelector(".count");
const cartItensDel = document.querySelector(".iconDelete");
let cartTotalPrice = document.querySelector(".totalAmount");
const msgEmptyCart = document.querySelector(".msgEmpty");
const productsCart = document.querySelector(".productsInCart");
const checkoutBtn = document.querySelector(".checkout");
const cartCount = document.querySelector(".cart-count");

const overlay = document.querySelector(".overlay");
const lightbox = document.querySelector(".lightbox");
const arrowImg = document.querySelectorAll(".arrow");

let counterNum = 1;

let img = 1;

let qtdCart = 0;

let galleryAll;
let lightboxGallery;
let lightboxHero;

// Adicionando os eventos
btnOpenMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);

previous.addEventListener("click", previousImg);
next.addEventListener("click", nextImg);

cartBtn.addEventListener("click", openCloseCart);

minusBtn.addEventListener("click", minusCounter);
plusBtn.addEventListener("click", plusCounter);

gallery.forEach((img) => {
  img.addEventListener("click", onThumbClick);
});

addToCartBtn.addEventListener("click", addToCart);
cartItensDel.addEventListener("click", deleteCartItem);

heroImg.addEventListener("click", heroImgClick);

// Criando as funções
function openMenu() {
  menu.classList.remove("hidden");
}
function closeMenu() {
  menu.classList.add("hidden");
}

function openCloseCart() {
  cart.classList.toggle("hidden");
}

function previousImg() {
  if (img === 1) {
    img = 4;
    heroImg.src = `images/image-product-${img}.jpg`;
  } else {
    img--;
    heroImg.src = `images/image-product-${img}.jpg`;
  }
}

function nextImg() {
  if (img === 4) {
    img = 1;
    heroImg.src = `images/image-product-${img}.jpg`;
  } else {
    img++;
    heroImg.src = `images/image-product-${img}.jpg`;
  }
}

function minusCounter() {
  if (counterNum > 0) {
    counterNum--;
    counter.textContent = counterNum;
  }
}
function plusCounter() {
  counterNum++;
  counter.textContent = counterNum;
}

function onThumbClick(event) {
  gallery.forEach((img) => {
    img.classList.remove("active");
  });
  event.target.parentElement.classList.add("active");
  heroImg.src = event.target.src.replace("-thumbnail", "");
}

function addToCart() {
  msgEmptyCart.classList.add("hidden");
  cartCount.classList.remove("hidden");
  productsCart.classList.remove("hidden");
  checkoutBtn.classList.remove("hidden");
  qtdCart += counterNum;
  cartCount.textContent = qtdCart;
  cartItens.textContent = qtdCart;
  cartTotalPrice.textContent = `$${125 * qtdCart}.00`;
  counterNum = 1;
  counter.textContent = 1;
}
function deleteCartItem() {
  if (qtdCart > 1) {
    qtdCart--;
    cartCount.textContent = qtdCart;
    cartItens.textContent = qtdCart;
    cartTotalPrice.textContent = `$${125 * qtdCart}.00`;
  } else {
    qtdCart = 0;
    msgEmptyCart.classList.remove("hidden");
    cartCount.classList.add("hidden");
    productsCart.classList.add("hidden");
    checkoutBtn.classList.add("hidden");
  }
}

function heroImgClick() {
  if (window.innerWidth >= 1150) {
    if (overlay.childElementCount == 1) {
      const newNode = lightbox.cloneNode(true);
      overlay.appendChild(newNode);

      const btnOverlayClose = document.querySelector(".btnClose");
      btnOverlayClose.addEventListener("click", clickBtnOverlay);

      galleryAll = overlay.querySelector(".thumbGallery");
      lightboxGallery = overlay.querySelectorAll(".pic");
      lightboxHero = overlay.querySelector(".productHero");
      lightboxGallery.forEach((img) => {
        img.addEventListener("click", onThumbClickLightbox);
      });

      const btnOverlayNext = overlay.querySelector(".next");
      const btnOverlayPrevious = overlay.querySelector(".previous");
      btnOverlayNext.addEventListener("click", overlayNextImg);
      btnOverlayPrevious.addEventListener("click", overlayPreviousImg);
    }
    overlay.classList.remove("hidden");
    galleryAll.classList.remove("hidden");
  }

  function clickBtnOverlay() {
    overlay.classList.add("hidden");
  }
}

function onThumbClickLightbox(event) {
  lightboxGallery.forEach((img) => {
    img.classList.remove("active");
  });
  event.target.parentElement.classList.add("active");
  lightboxHero.src = event.target.src.replace("-thumbnail", "");
}

let lightboxIndex = 0;

function overlayPreviousImg() {
  lightboxGallery = overlay.querySelectorAll(".pic");
  if (img === 1) {
    img = 4;
    lightboxIndex = 3;
    lightboxGallery[lightboxIndex - 3].classList.remove("active");
    lightboxGallery[lightboxIndex].classList.add("active");
    lightboxHero.src = `images/image-product-${img}.jpg`;
  } else {
    img--;
    lightboxIndex--;
    lightboxGallery[lightboxIndex + 1].classList.remove("active");
    lightboxGallery[lightboxIndex].classList.add("active");
    lightboxHero.src = `images/image-product-${img}.jpg`;
  }
}

function overlayNextImg() {
  lightboxGallery = overlay.querySelectorAll(".pic");
  if (img === 4) {
    img = 1;
    lightboxIndex = 0;
    lightboxGallery[lightboxIndex + 3].classList.remove("active");
    lightboxGallery[lightboxIndex].classList.add("active");
    lightboxHero.src = `images/image-product-${img}.jpg`;
    console.log(lightboxGallery[lightboxIndex]);
  } else {
    img++;
    lightboxIndex++;
    lightboxGallery[lightboxIndex - 1].classList.remove("active");
    lightboxGallery[lightboxIndex].classList.add("active");
    lightboxHero.src = `images/image-product-${img}.jpg`;
  }
}

function onThumbClick(event) {
  gallery.forEach((img) => {
    img.classList.remove("active");
  });
  event.target.parentElement.classList.add("active");
  heroImg.src = event.target.src.replace("-thumbnail", "");
}
