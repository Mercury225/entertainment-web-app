import data from "./data.json" assert { type: "json" };
import { filterData } from "./search-results.js";

/*recommended list is 5 - 28 */

/* creating tags for videos */
const createArticleTag = () => {
  return document.createElement("article");
};
const createFigureTag = () => {
  return document.createElement("figure");
};

/*tag variables */

const createVideoImg = (movieObject) => {
  const createImgTag = document.createElement("img");
  createImgTag.setAttribute("src", movieObject.thumbnail.regular.small);
  createImgTag.setAttribute("alt", movieObject.title);
  createImgTag.setAttribute("width", "200");
  createImgTag.setAttribute("height", "200");
  return createImgTag;
};
const createBookmarkSvg = (movieObject) => {
  const createImgTag = document.createElement("img");
  if (movieObject.isBookmarked === true) {
    createImgTag.setAttribute("src", "./assets/icon-bookmark-full.svg");
    createImgTag.setAttribute("alt", "full bookmark");
  }
  if (movieObject.isBookmarked === false) {
    createImgTag.setAttribute("src", "./assets/icon-bookmark-empty.svg");
    createImgTag.setAttribute("alt", "empty bookmark");
  }

  createImgTag.setAttribute("width", "20");
  createImgTag.setAttribute("height", "20");

  return createImgTag;
};

const createFigCaptionTag = () => {
  return document.createElement("figcaption");
};

const yearTag = (movieObject) => {
  const createSpanTag = document.createElement("span");
  createSpanTag.innerHTML = movieObject.year;
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
  createImgTag.setAttribute("width", "20");
  createImgTag.setAttribute("height", "20");
  return createImgTag;
};

const compiledFigCaption = (movieObject) => {
  const figCaption = createFigCaptionTag();
  figCaption.appendChild(yearTag(movieObject));
  figCaption.appendChild(categoryImgTag(movieObject));
  figCaption.appendChild(categoryTag(movieObject));
  figCaption.appendChild(ratingTag(movieObject));
  figCaption.appendChild(titleTag(movieObject));
  return figCaption;
};

const compiledFig = (movieObject) => {
  const fig = createFigureTag();
  fig.appendChild(createVideoImg(movieObject));
  fig.appendChild(createBookmarkSvg(movieObject));
  fig.appendChild(compiledFigCaption(movieObject));
  return fig;
};

const fullyCompiledArticle = (movieObject) => {
  const article = createArticleTag();
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

const runVideosInSearchResults = () => {
  return addArticleTagsToId(filterData(), "search-results");
};

/* movies filter */

const filterMoviesOnly = () => {
  const filteredArray = data.filter((movie) => movie.category === "Movie");
  return filteredArray;
};

const runVideosinMovies = () => {
  return addArticleTagsToId(filterMoviesOnly(), "movies");
};
/* adding the articles mainframe */

if (document.getElementById("recommended")) {
  runVideosInRecommended();
}
if (document.getElementById("trending")) {
  runVideosInTrending();
}
if (document.getElementById("search-results")) {
  runVideosInSearchResults();
}

if (document.getElementById("movies")) {
  runVideosinMovies();
}
