import { useState } from "react";
import { db } from "../../../Utils/firebase";
import InputError from "../../InputError/InputError";
import getAll from "../../Service/Service";

const EditCarDetails = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const allCars = getAll();
  const currentCarId = props.match.params.carId;

  const currentCar = allCars.find((obj) => {
    return obj.id === currentCarId;
  });
  function onDescriptionSaveSubmit(e) {
    db.ref(`/cars/${currentCarId}`).update({
      description: e.target.description.value,
    });

    props.history.push(`/cars/details/${currentCarId}`);
  }
  const onDescriptionChangeHandler = (e) => {
    if (e.target.value.length < 10) {
      setErrorMessage("Description too short");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <section className="detailsMyCar">
      <h3>{currentCar.model}</h3>
      <p>
        Likes counter: <i className="far fa-thumbs-up"></i> {currentCar.likes}
      </p>
      <img className="img" alt="" src={currentCar.imageURL} />
      <form onSubmit={onDescriptionSaveSubmit}>
        <textarea
          type="text"
          name="description"
          defaultValue={currentCar.description}
          onBlur={onDescriptionChangeHandler}
        ></textarea>{" "}
        <InputError>{errorMessage}</InputError>
        <button className="button">Save</button>
      </form>
    </section>
  );
};

export default EditCarDetails;
