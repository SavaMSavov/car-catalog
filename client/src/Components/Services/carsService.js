const url = "http://localhost:5000/cars";

export const getAll = (category = "") => {
  let carURL =
    url + (category && category != "all" ? `?category=${category}` : "");

  return fetch(carURL)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getOne = (carId) => {
  return fetch(`${url}/${carId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
