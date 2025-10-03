const intervalBenefit = setInterval(() => {
  const el = document.querySelector(".items");
  if (el) {
    clearInterval(intervalBenefit);
    let isDown = false;
    let startX;
    let isDragging = false;
    let startY;
    let scrollLeft;
    const slider = document.querySelector(".items");

    const end = () => {
      isDown = false;
    };

    const start = (e) => {
      isDown = true;
      isDragging = false;
      startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      startY = e.pageY || e.touches[0].pageY;
      scrollLeft = slider.scrollLeft;
    };

    const move = (e) => {
      if (!isDown) return;

      const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      const y = e.pageY || e.touches[0].pageY;
      const distX = x - startX;
      const distY = y - startY;

      if (Math.abs(distX) > Math.abs(distY)) {
        e.preventDefault();
        isDragging = true;
        slider.scrollLeft = scrollLeft - distX;
      }
    };

    (() => {
      slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;

      slider.addEventListener("mousedown", start);
      slider.addEventListener("touchstart", start);

      slider.addEventListener("mousemove", move);
      slider.addEventListener("touchmove", move);

      slider.addEventListener("mouseleave", end);
      slider.addEventListener("mouseup", end);
      slider.addEventListener("touchend", end);
    })();
  }
}, 100);
