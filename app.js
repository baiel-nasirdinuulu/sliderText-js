window.onload = function () {
  const slider = document.querySelector(".slider");

  let texts = ["text1", "text2", "text3"];

  let counter = 0;
  setInterval(() => {
    slider.innerHTML = `<h1>${texts[counter]}</h1>`;
    counter++;
    if (counter == texts.length) {
      counter = 0;
    }
  }, 1000);
};
