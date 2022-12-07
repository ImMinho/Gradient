const container = document.querySelector(".container");
const changeBtn = document.querySelector(".Change_color");

getRandomColor = () => {
  const hexCode = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * hexCode.length)];
  }
  return "#" + color;
};

getRandomDirection = () => {
  let directions = [
    "top left",
    "top center",
    "top right",
    "center left",
    "center center",
    "center right",
    "bottom left",
    "bottom center",
    "bottom right",
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

const setRandomColor = () => {
  return (container.style.background =
    "linear-gradient(to " +
    getRandomDirection() +
    "," +
    getRandomColor() +
    " 0%," +
    getRandomColor() +
    " 0%," +
    getRandomColor() +
    " 80%)");
};

changeBtn.addEventListener("click", setRandomColor);

setRandomColor();
