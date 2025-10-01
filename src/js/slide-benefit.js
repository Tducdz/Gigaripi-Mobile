const listSlide = document.getElementsByClassName("slide-item");
const listText = document.getElementsByClassName("slide-desc");
let dem = 0;

const nextSlide = () => {
  listSlide[dem].classList.remove("active");
  listText[dem].classList.remove("active");
  dem = (dem + 1) % listSlide.length;
  listSlide[dem].classList.add("active");
  listText[dem].classList.add("active");
};

setInterval(nextSlide, 3000);
