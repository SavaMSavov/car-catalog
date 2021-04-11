import { Link } from "react-router-dom";
import { db } from "../../../Utils/firebase";

const CarDetails = (props) => {
  // const allCars = props.CarsDataContent;
  let allCars = [];
  db.ref("cars/").on("value", (snapshot) => {
    snapshot.forEach((snap) => {
      const snapObj = snap.val();
      snapObj.id = snap.key;
      allCars.push(snapObj);
    });
  });

  const currentLoggedUserId = props.currentLoggedUser;
  const currentCarId = props.match.params.carId;

  const currentCar = allCars.find((obj) => {
    // console.log(currentCarId);
    return obj.id === currentCarId;
  });

  function deleteFunc() {
    db.ref(`/cars/${currentCarId}`).remove();
    props.history.push("/my-cars");
  }

  function onLikeClick() {
    db.ref(`/cars/${currentCarId}`).update({
      likes: currentCar.likes + 1,
    });
    props.history.push(`/cars/details/${currentCarId}`);
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
