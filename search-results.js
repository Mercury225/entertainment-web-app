import data from "./data.json" assert { type: "json" };


const searchTerm = () => {
  const unfilteredURL = new URL(document.location).searchParams.get("search");
  const convertWithSpaces = (term) => {
    const replacedTerm = term.replaceAll("+", " ");
    return replacedTerm;
  };

  return convertWithSpaces(unfilteredURL);
};

export const filterData = () => {
  const filteredDataArray = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm().toLowerCase())
  );

  return filteredDataArray;
};

const createHeader = () => {
  const header = document.createElement("h2");
  header.innerHTML = `Found ${filterData().length} results for ${searchTerm()}`;

  return header;
};

const appendHeader = () => {
  return document.getElementById("search-results").appendChild(createHeader());
};
if (document.getElementById("search-results")) {
  appendHeader();
}
