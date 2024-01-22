
const changeColor = (event) => {
  const changeBackgroundColor = () => {
    event.currentTarget.querySelector("path").classList.add("active");
  };
  const svgList = document.querySelector("nav").querySelectorAll("svg");
  for (let i = 0; i < svgList.length; i++) {
    if (svgList[i] === event.currentTarget) {
      changeBackgroundColor();
    } else {
      console.log(svgList[i].querySelector("path").classList.remove("active"));
    }
  }
};
const sortVideos = () => {
  console.log("hello");
};
