const popup = document.querySelector(".popup");

const sharebtn = document.querySelector("#share");

sharebtn.addEventListener("click", () => {
  popup.classList.toggle("popup-active");
});
