const chamBg1 = document.querySelector(".bg_left");
const chamBg2 = document.querySelector(".bg_right");
const chamText = document.getElementById("cham_title_area");
const chamSkin = document.querySelector(".skin_cha");

const map = document.querySelector(".map_img_area");

window.addEventListener("mousemove", (e) => {
  const mouseX = (e.clientX / window.innerWidth - 0.5) * 100;

  chamBg1.style.transform = `translateX(-${mouseX * 0.3}px)`;
  chamBg2.style.transform = `translateX(${mouseX * 0.15}px)`;
  chamText.style.transform = `translateX(-${mouseX * 0.7}px)`;
  chamSkin.style.transform = `translate(calc( -50% - ${mouseX * 0.1}px ), -50%)`;
  map.style.transform = `translateX(-${mouseX * 0.5}px)`;
});
