import { useEffect, useState } from "react";
import * as carsService from "../Services/carsService";

const CarDetails = ({ match }) => {
  let [car, setCar] = useState({});

  useEffect(() => {
    carsService.getOne(match.params.carId).then((res) => setCar(res));
  }, []);

  return (
    <section className="detailsOtherCar">
      <h3>{car.name}</h3>
      <p>
        Car likes: {car.likes}{" "}
        <a href="#">
          <button className="button">
            <i className="fas fa-heart"></i>
            Like
          </button>
        </a>
      </p>
      <p className="img">
        <img src={car.imageURL} />
      </p>
      <p className="description">{car.description}</p>
    </section>
  );
};

export default CarDetails;
