import { db } from "../../../Utils/firebase";

const EditCarDetails = (props) => {
  const allCars = props.CarsDataContent;
  const currentCarId = props.match.params.carId;

  const currentCar = allCars.find((obj) => {
    return obj.id === currentCarId;
  });

  function onDescriptionSaveSubmit(e) {
    db.ref(`/cars/${currentCarId}`).update({
      description: e.target.description.value,
    });
    props.history.push("/categories");
  }

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
        ></textarea>
        <button className="button">Save</button>
      </form>
    </section>
  );
};

export default EditCarDetails;
