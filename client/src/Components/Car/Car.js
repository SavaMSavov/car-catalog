import { Link } from "react-router-dom";

const Car = ({ id, model, description, imageURL, category, likes }) => {
  return (
    <li className="currentCar">
      <h3>Model: {model}</h3>
      <p>Category: {category}</p>

      <img src={imageURL} alt="" />

      <p className="description">{description}</p>
      <div className="car-info">
        <Link to={`/cars/details/${id}`}>
          <button className="button">Details</button>
        </Link>
        <i className="far fa-thumbs-up"></i> <span> {likes}</span>
      </div>
    </li>
  );
};

export default Car;
