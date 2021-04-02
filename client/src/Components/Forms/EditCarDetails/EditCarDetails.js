import { useEffect, useState } from "react";
import * as carsService from "../../Services/carsService";

import InputError from "../../Shared/InputError/InputError";

const EditCarDetails = ({ match, history }) => {
  const [car, setCar] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    carsService.getOne(match.params.carId).then((res) => setCar(res));
  }, []);

  const onDescriptionSaveSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    let carId = match.params.carId;
    let updatedCar = { ...car, description: e.target.description.value };

    carsService
      .update(carId, updatedCar)
      .then(() => {
        history.push(`/cars/details/${carId}`);
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDescriptionChangeHandler = (e) => {
    if (e.target.value.length < 10) {
      setErrorMessage("Description too short");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <section className="detailsMyCar">
      <h3>{car.model}</h3>
      <p>
        Car counter: <i className="fas fa-heart"></i> {car.likes}
      </p>
      <p className="img">
        <img src={car.imageURL} />
      </p>
      <form onSubmit={onDescriptionSaveSubmit}>
        <textarea
          type="text"
          name="description"
          onBlur={onDescriptionChangeHandler}
          defaultValue={car.description}
        ></textarea>
        <InputError>{errorMessage}</InputError>
        <button className="button">Save</button>
      </form>
    </section>
  );
};

export default EditCarDetails;
