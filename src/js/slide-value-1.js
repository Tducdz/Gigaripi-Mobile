const intervalValue = setInterval(() => {
  const slider = document.querySelector(".value1-slider");

  if (slider) {
    clearInterval(intervalValue);
    let dem = 0;

    const value1Item = document.querySelectorAll(".value1-item");
    let tong = value1Item.length;
    const btnLeft = document.querySelector(".btn-value-left");
    const btnRight = document.querySelector(".btn-value-right");

    btnLeft.addEventListener("click", () => {
      value1Item[dem].classList.toggle("hidden");
      if (dem == 0) {
        dem = tong;
      }
      dem = (dem - 1) % tong;
      value1Item[dem].classList.toggle("hidden");
      console.log(dem);
    });

    btnRight.addEventListener("click", () => {
      value1Item[dem].classList.toggle("hidden");
      dem = (dem + 1) % tong;
      value1Item[dem].classList.toggle("hidden");
      console.log(dem);
    });
  }
}, 100);
