// const fetchJSON = async () => {
//   try {
//     const getJSON = await fetch("./data.json");
//     const convertJSON = await getJSON.json();
//     return convertJSON;
//   } catch (error) {
//     console.error("Error fetching JSON:", error);
//     throw error;
//   }
// };
// try {
//   const test = await fetchJSON();
//   console.log("test", test);
// } catch (error) {
//   console.error("await fetchJSON not working", error);
//   throw error;
// }
// const data = await fetchJSON();

// const searchTerm = () => {
//   const unfilteredURL = new URL(document.location).searchParams.get("search");
//   const convertWithSpaces = (term) => {
//     const replacedTerm = term.replaceAll("+", " ");
//     return replacedTerm;
//   };

//   return convertWithSpaces(unfilteredURL);
// };

// export const filterData = () => {
//   const filteredDataArray = data.filter((movie) =>
//     movie.title.toLowerCase().includes(searchTerm().toLowerCase())
//   );

//   return filteredDataArray;
// };
// export const filterDataMovie = () => {
//   const filteredDataArray = data.filter(
//     (movie) =>
//       movie.category === "Movie" &&
//       movie.title.toLowerCase().includes(searchTerm().toLowerCase())
//   );

//   return filteredDataArray;
// };
// export const filterDataTv = () => {
//   const filteredDataArray = data.filter(
//     (movie) =>
//       movie.category === "TV Series" &&
//       movie.title.toLowerCase().includes(searchTerm().toLowerCase())
//   );

//   return filteredDataArray;
// };
// export const filterDataBookmarked = () => {
//   const filteredDataArray = data.filter(
//     (movie) =>
//       movie.isBookmarked === "true" &&
//       movie.title.toLowerCase().includes(searchTerm().toLowerCase())
//   );

//   setTimeout(() => {
//     console.log("from the function", filteredDataArray);
//   }, 1000);

//   return filteredDataArray;
// };

// const createHeader = (filter) => {
//   const header = document.createElement("h2");
//   header.innerHTML = `Found ${filter.length} results for ${searchTerm()}`;

//   return header;
// };

// const appendHeader = (filter, id) => {
//   const process = document.getElementById(id).appendChild(createHeader(filter));
//   return process;
// };
// if (document.getElementById("search-results")) {
//   appendHeader(filterData(), "search-results-section");
// }
// if (document.getElementById("search-results-tv")) {
//   appendHeader(filterDataTv(), "search-results-tv-section");
// }

// if (document.getElementById("search-results-movies")) {
//   appendHeader(filterDataMovie(), "search-results-movies-section");
// }

// setTimeout(() => {
//   if (document.getElementById("search-results-bookmarked")) {
//     console.log("from if statement", filterDataBookmarked());

//     appendHeader(filterDataBookmarked(), "search-results-bookmarked-section");
//   }
// }, 0);
