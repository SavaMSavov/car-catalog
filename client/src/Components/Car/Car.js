import { Link } from "react-router-dom";

const Car = ({ id, model, description, imageURL, category, likes }) => {
  return (
    <li className="otherCar">
      <h3>Model: {model}</h3>
      <p>Category: {category}</p>
      <p className="img">
        <img src={imageURL} />
      </p>
      <p className="description">{description}</p>
      <div className="car-info">
        <Link to={`/cars/details/${id}`}>
          <button className="button">Details</button>
        </Link>
        <i className="fas fa-heart"></i> <span> {likes}</span>
      </div>
    </li>
  );
};

export default Car;
