import { GET1, GET2 } from "./api.js";

import { qS, qsA, cardPopulator, modalGen } from "./utils.js";

const bestSeries = qS(".best-series");
const best70 = qS(".best70");
const best80 = qS(".best80");
const best90 = qS(".best90");
const best00 = qS(".best00");

const modalEl = qS(".modal");
const modalOverlay = qS(".overlay");

export const promiseGet = Promise.all([
  GET1("1970", "2009"),
  GET1("1970", "1979"),
  GET1("1980", "1989"),
  GET1("1990", "1999"),
  GET1("2000", "2009"),
])
  .then((data) => {
    data[0].results.map((serie) => bestSeries.append(cardPopulator(serie)));
    data[1].results.map((serie) => best70.append(cardPopulator(serie)));
    data[2].results.map((serie) => best80.append(cardPopulator(serie)));
    data[3].results.map((serie) => best90.append(cardPopulator(serie)));
    data[4].results.map((serie) => best00.append(cardPopulator(serie)));
  })
  .then(() => {
    const serieEls = qsA(".serie");

    serieEls.forEach((serie) =>
      serie.addEventListener("click", () =>
        GET2("tv", serie.id).then((selectedSerie) => {
          modalEl.appendChild(modalGen(selectedSerie));
          modalEl.style.display = "flex";
        })
      )
    );
  });

//Chiude la modale
modalOverlay.addEventListener("click", () => {
  const modalSerieEl = qS(".serie-modal");

  modalEl.style.display = "none";
  modalSerieEl.remove();
});
