import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Utils/firebase";
import getAll from "../Service/Service";

const CarDetails = (props) => {
  const allCars = getAll();
  const currentLoggedUserId = props.currentLoggedUser;
  const currentCarId = props.match.params.carId;

  const currentCar = allCars.find((obj) => {
    return obj.id === currentCarId;
  });

  const deleteFunc = () => {
    db.ref(`/cars/${currentCarId}`).remove();
    props.history.push("/my-cars");
  };

  const [likes, setLikes] = useState(currentCar.likes);
  const onLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
    db.ref(`/cars/${currentCarId}`).update({
      likes: likes + 1,
    });
  };

  return (
    <section className="detailsOtherCar">
      <h3>{currentCar.model}</h3>
      {currentLoggedUserId !== currentCar.uid ? (
        <p>
          Car likes: {likes}
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
