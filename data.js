import data from "./data.json" assert { type: "json" };

document.getElementById("search").addEventListener("keyup", (event) => {
  const searchQuery = document.getElementById("search").value;
  const filteredList = data.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredList);
});

/*recommended list is 5 - 28 */
const recommendedList = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const getsAllDatafromOneVideo = (videoNumber, id) => {
  const video = data[videoNumber];
  /* article layer*/
  const articleTag = document.createElement("article");

  /* figure layer */
  const figureTag = document.createElement("figure");
  articleTag.appendChild(figureTag);
  /* image layer*/
  const imageTag = document.createElement("img");
  imageTag.setAttribute("src", video.thumbnail.regular.medium);
  imageTag.setAttribute("alt", video.title);

  figureTag.appendChild(imageTag);

  const bookmarkImg = document.createElement("img");

  bookmarkImg.setAttribute(
    "src",
    "./starter-code/assets/icon-bookmark-empty.svg"
  );
  bookmarkImg.setAttribute("alt", "empty bookmark");
  figureTag.appendChild(bookmarkImg);

  /* figcaption layer */
  const figcaptionTag = document.createElement("figcaption");
  figureTag.appendChild(figcaptionTag);
  /* span layer */
  const yearTag = document.createElement("span");
  const yearTagContent = document.createTextNode(`${video.year}`);

  yearTag.appendChild(yearTagContent);

  figcaptionTag.appendChild(yearTag);
  /* to be continued */

  document.getElementById(id).appendChild(articleTag);
};
getsAllDatafromOneVideo(5, "recommended");

const node = document.createElement("p");
const nodetext = document.createTextNode("lalalal");
node.appendChild(nodetext);
document.getElementById("recommended").appendChild(node);
