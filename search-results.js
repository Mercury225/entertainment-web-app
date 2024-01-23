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
export const filterDataMovie = () => {
  const filteredDataArray = data.filter(
    (movie) =>
      movie.category === "Movie" &&
      movie.title.toLowerCase().includes(searchTerm().toLowerCase())
  );

  return filteredDataArray;
};
export const filterDataTv = () => {
  const filteredDataArray = data.filter(
    (movie) =>
      movie.category === "TV Series" &&
      movie.title.toLowerCase().includes(searchTerm().toLowerCase())
  );

  return filteredDataArray;
};
export const filterDataBookmarked = () => {
  const filteredDataArray = data.filter(
    (movie) =>
      movie.isBookmarked === true &&
      movie.title.toLowerCase().includes(searchTerm().toLowerCase())
  );

  return filteredDataArray;
};

const createHeader = (filter) => {
  const header = document.createElement("h2");
  header.innerHTML = `Found ${filter.length} results for ${searchTerm()}`;

  return header;
};

const appendHeader = (filter, id) => {
  return document.getElementById(id).appendChild(createHeader(filter));
};
if (document.getElementById("search-results")) {
  appendHeader(filterData(), "search-results");
}
if (document.getElementById("search-results-tv")) {
  appendHeader(filterDataTv(), "search-results-tv");
}
if (document.getElementById("search-results-bookmarked")) {
  appendHeader(filterDataBookmarked(), "search-results-bookmarked");
}
if (document.getElementById("search-results-movies")) {
  appendHeader(filterDataMovie(), "search-results-movies");
}
