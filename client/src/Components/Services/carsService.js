const url = "http://localhost:5000/cars";

export const getAll = (category = "") => {
  let carURL =
    url + (category && category !== "all" ? `?category=${category}` : "");

  return fetch(carURL)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getOne = (carId) => {
  return fetch(`${url}/${carId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const create = (model, description, imageURL, category) => {
  let car = {
    model: model,
    description,
    imageURL,
    category,
    likes: 0,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
};

export const update = (carId, car) => {
  return fetch(`${url}/${carId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
};

export const car = (carId, likes) => {
  return fetch(`${url}/${carId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes }),
  }).then((res) => res.json());
};
