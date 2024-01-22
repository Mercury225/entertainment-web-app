import data from "./data.json" assert { type: "json" };

data.map((video) => console.log(video.title));

document.getElementById("search").addEventListener("keyup", (event) => {
  const searchQuery = document.getElementById("search").value;
  const filteredList = data.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredList);
});

export const example = () => {
  return data;
};
