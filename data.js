
const fetchJSON = async () => {
  try {
    const getJSON = await fetch("./data.json");
    const convertJSON = await getJSON.json();
    return convertJSON;
  } catch (error) {
    console.error("Error fetching JSON:", error);
    throw error; // Propagate the error
  }
};
try {
  const test = await fetchJSON();
  console.log("test", test);
} catch (error) {console.error("await fetchJSON not working", error)
  throw error;
}
const data = await fetchJSON();


// Handle the error

const getTruthValue = (index) => {
  return localStorage.getItem(localStorage.key(index));
};

const getKeyValue = (index) => {
  return localStorage.key(index);
};

const findJSON = (index) => {
  return data.filter((movie) => movie.title === getKeyValue(index))[0];
};
const changeBookmarkStatus = (index) => {
  findJSON(index).isBookmarked = getTruthValue(index);
  return;
};
const updateJSON = () => {
  {
    for (let i = 0; i < localStorage.length; i++) {
      changeBookmarkStatus(i);
    }
  }
};

updateJSON();
import {
  filterData,
  filterDataMovie,
  filterDataTv,
  filterDataBookmarked,
} from "./search-results.js";

/*recommended list is 5 - 28 */

/* creating tags for videos */
const createDiv = () => {
  const div = document.createElement("div");
  // div.setAttribute("class", "movie-details");
  return div;
};
const createArticleTag = (movieObject) => {
  const article = document.createElement("article");
  if (movieObject.isTrending === true && document.getElementById("trending")) {
    article.setAttribute("class", "trending");
  } else {
  }
  return article;
};
const createFigureTag = () => {
  return document.createElement("figure");
};

/*tag variables */

const createVideoImg = (movieObject) => {
  const createImgTag = document.createElement("img");
  createImgTag.setAttribute("src", movieObject.thumbnail.regular.large);
  createImgTag.setAttribute("alt", movieObject.title);
  if (movieObject.isTrending && document.getElementById("trending")) {
    createImgTag.setAttribute("width", "470");
    createImgTag.setAttribute("height", "300");
  } else {
    createImgTag.setAttribute("width", "300");
    createImgTag.setAttribute("height", "200");
  }

  createImgTag.setAttribute("class", "movie-photos");
  return createImgTag;
};
const createBookmarkSvg = (movieObject) => {
  const createImgTag = document.createElement("img");
  const div = createDiv();
  if (
    movieObject.isBookmarked === true ||
    movieObject.isBookmarked === "true"
  ) {
    createImgTag.setAttribute("src", "./assets/icon-bookmark-full.svg");
    createImgTag.setAttribute("alt", "full bookmark");
    createImgTag.classList.add("bookmark");
  } else if (
    movieObject.isBookmarked === false ||
    movieObject.isBookmarked === "false"
  ) {
    createImgTag.setAttribute("src", "./assets/icon-bookmark-empty.svg");
    createImgTag.setAttribute("alt", "empty bookmark");
    createImgTag.classList.add("bookmark");
  }

  createImgTag.setAttribute("width", "15");
  createImgTag.setAttribute("height", "15");
  if (movieObject.isTrending && document.getElementById("trending")) {
    div.setAttribute("class", "bookmark-cover trending-bookmark");
  } else {
    div.setAttribute("class", "bookmark-cover");
  }

  div.appendChild(createImgTag);
  return div;
};

const createFigCaptionTag = () => {
  return document.createElement("figcaption");
};

const yearTag = (movieObject) => {
  const createSpanTag = document.createElement("span");
  createSpanTag.innerHTML = movieObject.year;
  return createSpanTag;
};
const dotTag = () => {
  const createSpanTag = document.createElement("span");
  createSpanTag.innerHTML = "&#183";
  createSpanTag.setAttribute("class", "dots");
  return createSpanTag;
};
const categoryTag = (movieObject) => {
  const createSpanTag = document.createElement("span");
  createSpanTag.innerHTML = movieObject.category;
  return createSpanTag;
};
const ratingTag = (movieObject) => {
  const createSpanTag = document.createElement("span");
  createSpanTag.innerHTML = movieObject.rating;
  return createSpanTag;
};
const titleTag = (movieObject) => {
  const createSpanTag = document.createElement("h3");
  createSpanTag.innerHTML = movieObject.title;
  return createSpanTag;
};

const categoryImgTag = (movieObject) => {
  const createImgTag = document.createElement("img");
  if (movieObject.category === "Movie") {
    createImgTag.setAttribute("src", "./assets/icon-category-movie.svg");
  }
  if (movieObject.category === "TV Series") {
    createImgTag.setAttribute("src", "./assets/icon-category-tv.svg");
  }

  createImgTag.setAttribute("alt", "category image");
  createImgTag.setAttribute("width", "15");
  createImgTag.setAttribute("height", "15");
  return createImgTag;
};

const createPlayButton = (movieObject) => {
  const div = createDiv();
  if (movieObject.isTrending && document.getElementById("trending")) {
    div.setAttribute("class", "playbutton playbutton-trending");
  } else {
    div.setAttribute("class", "playbutton");
  }

  const createImgTag = document.createElement("img");
  createImgTag.setAttribute("src", "./assets/icon-play.svg");
  createImgTag.setAttribute("width", "30");
  createImgTag.setAttribute("height", "30");
  const header = document.createElement("h3");
  header.innerHTML = "Play";
  div.appendChild(createImgTag);
  div.appendChild(header);
  return div;
};

const compiledFigCaption = (movieObject) => {
  const figCaption = createFigCaptionTag();
  const div = createDiv();
  figCaption.appendChild(div);
  figCaption.appendChild(titleTag(movieObject));
  div.setAttribute("class", "movie-details");
  div.appendChild(yearTag(movieObject));
  div.appendChild(dotTag());
  div.appendChild(categoryImgTag(movieObject));
  div.appendChild(categoryTag(movieObject));
  div.appendChild(dotTag());
  div.appendChild(ratingTag(movieObject));

  return figCaption;
};

const compiledFig = (movieObject) => {
  const fig = createFigureTag();
  fig.appendChild(createVideoImg(movieObject));
  fig.appendChild(createBookmarkSvg(movieObject));
  fig.appendChild(createPlayButton(movieObject));
  fig.appendChild(compiledFigCaption(movieObject));
  return fig;
};

const fullyCompiledArticle = (movieObject) => {
  const article = createArticleTag(movieObject);
  article.appendChild(compiledFig(movieObject));
  return article;
};

const attachArticleToId = (movieObject, id) => {
  return document
    .getElementById(id)
    .appendChild(fullyCompiledArticle(movieObject));
};

const convertListToData = (list) => {
  let array = [];
  for (let i = 0; i < list.length; i++) {
    array.push(data[list[i]]);
  }
  return array;
};

export const addArticleTagsToId = (dataArray, id) => {
  for (let i = 0; i < dataArray.length; i++) {
    attachArticleToId(dataArray[i], id);
  }
};
const recommendedList = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const recommendedListToData = convertListToData(recommendedList);
const runVideosInRecommended = () => {
  return addArticleTagsToId(recommendedListToData, "recommended");
};

const findAllTrending = () => {
  const TrendingList = data.filter((movies) => movies.isTrending === true);
  return TrendingList;
};
const trendingList = findAllTrending();
const runVideosInTrending = () => {
  return addArticleTagsToId(trendingList, "trending");
};

/* search results */
const runVideosInSearchResults = () => {
  return addArticleTagsToId(filterData(), "search-results");
};
const runVideosInSearchResultsMovie = () => {
  return addArticleTagsToId(filterDataMovie(), "search-results-movies");
};
const runVideosInSearchResultsTv = () => {
  return addArticleTagsToId(filterDataTv(), "search-results-tv");
};
const runVideosInSearchResultsBookmarked = () => {
  console.log("from data.js", filterDataBookmarked());
  return addArticleTagsToId(
    filterDataBookmarked(),
    "search-results-bookmarked"
  );
};

/* movies filter */

const filterMoviesOnly = () => {
  const filteredArray = data.filter((movie) => movie.category === "Movie");
  return filteredArray;
};

const runVideosinMovies = () => {
  return addArticleTagsToId(filterMoviesOnly(), "movies");
};

const filterTvOnly = () => {
  const filteredArray = data.filter((movie) => movie.category === "TV Series");
  return filteredArray;
};

const runVideosinTv = () => {
  return addArticleTagsToId(filterTvOnly(), "tv");
};

const filterBookmarkedMoviesOnly = () => {
  const filteredArray = data.filter(
    (movie) => movie.category === "Movie" && movie.isBookmarked === "true"
  );
  return filteredArray;
};
const filterBookmarkedTvOnly = () => {
  const filteredArray = data.filter(
    (movie) => movie.category === "TV Series" && movie.isBookmarked === "true"
  );
  return filteredArray;
};

const runVideosInBookmarkedMovie = () => {
  return addArticleTagsToId(filterBookmarkedMoviesOnly(), "bookmarked-movies");
};
const runVideosInBookmarkedTv = () => {
  return addArticleTagsToId(filterBookmarkedTvOnly(), "bookmarked-tv");
};

/* adding the articles mainframe */

if (document.getElementById("recommended")) {
  runVideosInRecommended();
}
if (document.getElementById("trending")) {
  runVideosInTrending();
}

const switchBookmarkPhoto = (event) => {
  let movieName = event.target;

  const findMovieTitle = () => {
    return movieName.parentNode.previousElementSibling.alt;
  };

  const storageManipulationTrue = () => {
    if (localStorage.getItem(findMovieTitle()) === null) {
      localStorage.setItem(findMovieTitle(), true);
    } else if (localStorage.getItem(findMovieTitle()) === "false") {
      localStorage.removeItem(findMovieTitle());
      localStorage.setItem(findMovieTitle(), true);
    }
  };
  const storageManipulationFalse = () => {
    if (localStorage.getItem(findMovieTitle()) === null) {
      localStorage.setItem(findMovieTitle(), false);
    } else if (localStorage.getItem(findMovieTitle()) === "true") {
      localStorage.removeItem(findMovieTitle());
      localStorage.setItem(findMovieTitle(), false);
    }
  };

  if (movieName.alt === "empty bookmark") {
    movieName.removeAttribute("src");
    movieName.setAttribute("src", "./assets/icon-bookmark-full.svg");
    movieName.removeAttribute("alt");
    movieName.setAttribute("alt", "full bookmark");
    storageManipulationTrue();
  } else if (movieName.alt === "full bookmark") {
    movieName.removeAttribute("src");
    movieName.setAttribute("src", "./assets/icon-bookmark-empty.svg");
    movieName.removeAttribute("alt");
    movieName.setAttribute("alt", "empty bookmark");
    storageManipulationFalse();
  }
};
/* bookmark listeners */
const implementBookmarkSwitching = async () => {
  const bookmarkArray = await document.getElementsByClassName("bookmark");

  for (let i = 0; i < bookmarkArray.length; i++) {
    bookmarkArray.item(i).addEventListener("click", switchBookmarkPhoto);
  }
};
implementBookmarkSwitching();

/* search results */
if (document.getElementById("search-results")) {
  runVideosInSearchResults();
}
if (document.getElementById("search-results-tv")) {
  runVideosInSearchResultsTv();
}
if (document.getElementById("search-results-movies")) {
  runVideosInSearchResultsMovie();
}
if (document.getElementById("search-results-bookmarked")) {
  runVideosInSearchResultsBookmarked();
}

if (document.getElementById("movies")) {
  runVideosinMovies();
}
if (document.getElementById("tv")) {
  runVideosinTv();
}
if (document.getElementById("bookmarked-tv")) {
  runVideosInBookmarkedTv();
}
if (document.getElementById("bookmarked-movies")) {
  runVideosInBookmarkedMovie();
}
