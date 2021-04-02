import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as carsService from "../../Services/carsService";

const CarDetails = ({ match }) => {
  let [car, setCar] = useState({});

  useEffect(() => {
    carsService.getOne(match.params.carId).then((res) => setCar(res));
  }, []);

  const onLikeClickHandler = () => {
    let incrementedLikes = +car.likes + 1;

    carsService.car(match.params.carId, incrementedLikes).then((updatedCar) => {
      setCar((state) => ({ ...state, likes: Number(updatedCar.likes) }));
    });
  };

  return (
    <section className="detailsOtherCar">
      <h3>{car.model}</h3>
      <p>
        Car likes: {car.likes}{" "}
        <button className="button" onClick={onLikeClickHandler}>
          <i class="far fa-thumbs-up"></i>
          Like
        </button>
      </p>
      <p className="img">
        <img src={car.imageURL} />
      </p>
      <p className="description">{car.description}</p>{" "}
      <div className="car-info">
        <Link to={`/cars/details/${car.id}/edit`}>
          <button className="button">Edit</button>
        </Link>
        <Link to="#">
          <button className="button">Delete</button>
        </Link>
      </div>
    </section>
  );
};

export default CarDetails;
