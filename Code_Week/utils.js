export const qS = (type) => document.querySelector(type);
export const qsA = (type) => document.querySelectorAll(type);
export const cE = (element) => document.createElement(element);

//Creazione delle card
export const cardPopulator = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");

  cardEl.setAttribute("id", data.id);
  cardEl.className = "serie";

  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  } else {
    imgEl.setAttribute(
      "src",
      "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
    );
  }
  imgEl.setAttribute("alt", data.name);
  cardEl.appendChild(imgEl);
  return cardEl;
};

//creazione della modal
export const modalGen = (data) => {
  const modalEl = cE("div");
  const imgEl = cE("img");
  const wrapperTextEl = cE("div");
  const titleEl = cE("h2");
  const overviewEl = cE("p");
  const releaseDateEl = cE("p");

  const voteAverageEl = cE("p");
  const starEl = cE("div");

  modalEl.className = "serie-modal";
  imgEl.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  imgEl.alt = data.titleEl;
  wrapperTextEl.className = "description";
  titleEl.textContent = data.name;
  overviewEl.textContent = data.overview;
  releaseDateEl.textContent = `Release year: ${data.first_air_date}`;

  voteAverageEl.className = "vote";
  voteAverageEl.textContent = `Vote average: ${data.vote_average.toFixed(1)}`;
  starEl.className = "Stars";
  starEl.setAttribute("style", `--rating: ${data.vote_average}`);

  wrapperTextEl.append(
    titleEl,
    overviewEl,
    releaseDateEl,
    voteAverageEl,
    starEl
  );
  modalEl.append(imgEl, wrapperTextEl);
  return modalEl;
};
