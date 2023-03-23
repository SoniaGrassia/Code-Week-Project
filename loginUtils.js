import { qS, cE, qsA, cardPopulator } from "./utils.js";
import { promiseGet } from "./loginScript.js";

const userName = qS("input[name='username']");
const userPassword = qS("input[name='password']");
const loginForm = qS(".loginForm");
const errorMsg = qS(".modal-error");
const seriesContainer = qS(".disabled");

const myList = qS(".mylist");
const bestSeries = qS(".best-series-auth");
const best70 = qS(".best70-auth");
const best80 = qS(".best80-auth");
const best90 = qS(".best90-auth");
const best00 = qS(".best00-auth");

const list = [];

const listPopulator = (data) => {
  const newObj = {
    id: data.id,
    class: "serie",
    img: data.poster_path,
  };
};

const myLogin = {
  username: "sonia",
  password: "1111",
};

window.onload = init();

function init() {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    userLogin();
  });
}

function userLogin() {
  let nameVal = userName.value,
    passwordVal = userPassword.value;

  if (nameVal === myLogin.username && passwordVal === myLogin.password) {
    loginForm.remove();
    seriesContainer.classList.add("enabled");
    seriesContainer.classList.remove("disabled");
    myList.classList.remove("disabled");
    bestSeries.classList.remove("disabled");
    best70.classList.remove("disabled");
    best80.classList.remove("disabled");
    best90.classList.remove("disabled");
    best00.classList.remove("disabled");
  } else {
    errorMsg.classList.add("activated");
    loginForm.append(errorMsg);

    setTimeout(function () {
      errorMsg.classList.remove("activated");
      loginForm.reset();
    }, 2000);
  }
}

export const modalGenLogin = (data) => {
  const modalEl = cE("div");
  const imgEl = cE("img");
  const wrapperTextEl = cE("div");
  const titleEl = cE("h2");
  const overviewEl = cE("p");
  const releaseDateEl = cE("p");
  const voteAverageEl = cE("p");
  const starEl = cE("div");
  const btnAdd = cE("button");

  modalEl.className = "serie-modal";
  modalEl.setAttribute("id", data.id);
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
  btnAdd.textContent = "+ MyList";
  btnAdd.className = "add-btn";

  wrapperTextEl.append(
    titleEl,
    overviewEl,
    releaseDateEl,
    voteAverageEl,
    starEl,
    btnAdd
  );
  modalEl.append(imgEl, wrapperTextEl);

  btnAdd.addEventListener("click", () => {
    const serieAdd = cE("div");
    const imgEl = cE("img");
    serieAdd.setAttribute("id", data.id);
    serieAdd.className = "serie";
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );

    listPopulator(data);
    list.push(data);
    console.log(list);
    serieAdd.append(imgEl);
    myList.append(serieAdd);
  });
  return modalEl;
};
