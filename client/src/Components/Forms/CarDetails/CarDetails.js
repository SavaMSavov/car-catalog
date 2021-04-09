import { Link } from "react-router-dom";
import { db } from "../../../Utils/firebase";

const CarDetails = (props) => {
  const allCars = props.CarsDataContent;
  const currentLoggedUserId = props.currentLoggedUser;
  const currentCarId = props.match.params.carId;

  const currentCar = allCars.find((obj) => {
    return obj.id === currentCarId;
  });

  function deleteFunc() {
    db.ref(`/cars/${currentCarId}`).remove();
    props.history.push("/categories");
  }

  function onLikeClick() {
    db.ref(`/cars/${currentCarId}`).update({
      likes: currentCar.likes + 1,
    });
  }

  return (
    <section className="detailsOtherCar">
      <h3>{currentCar.model}</h3>
      {currentLoggedUserId !== currentCar.uid ? (
        <p>
          Car likes: {currentCar.likes}
          <button className="button" onClick={onLikeClick}>
            <i className="far fa-thumbs-up"></i>
            Like
          </button>
        </p>
      ) : (
        <></>
      )}
      <img className="img " alt="" src={currentCar.imageURL} />
      <p className="description">{currentCar.description}</p>
      {currentLoggedUserId === currentCar.uid ? (
        <div className="car-info">
          <Link to={`/cars/details/${currentCar.id}/edit`}>
            <button className="button">Edit</button>
          </Link>

          <button onClick={deleteFunc} className="button">
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default CarDetails;
