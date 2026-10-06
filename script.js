const btn = document.querySelector(".btn");
const maina = document.querySelector(".main");

const imgs = [
  ["#img1", "#img2"],
  ["#img3", "#img4"],
  ["#img5", "#img6"]
];

const paras = [
  ["#p1", "#p2", "#p3", "#p4"],
  ["#p11", "#p21", "#p31", "#p41"],
  ["#p111", "#p211", "#p311", "#p411"]
];

btn.addEventListener("click", () => {

  btn.disabled = true;
  btn.textContent = "Searching...";

  fetch("https://pixabots.com/api/pixabot/batch?count=3&size=240")
    .then(res => res.json())
    .then(data => {

      data.pixabots.forEach((character, i) => {

        document.querySelector(imgs[i][0]).src = character.png;
        document.querySelector(imgs[i][1]).src = character.gif;

        const parts = character.parts;

        document.querySelector(paras[i][0]).textContent = parts.eyes;
        document.querySelector(paras[i][1]).textContent = parts.heads;
        document.querySelector(paras[i][2]).textContent = parts.body;
        document.querySelector(paras[i][3]).textContent = parts.top;

      });

      maina.classList.add("main1");
      maina.classList.remove("main");
      btn.disabled = false;
      btn.textContent = "See more";

    })
    .catch(error => {

      console.log("Error:", error);
      btn.disabled = false;
      btn.textContent = "Try Again";

    });

});