import { Link } from "react-router-dom";

const MyCars = () => {
  return (
    <section className="my-cars">
      <h1>My cars</h1>
      <ul className="my-cars-list">
        <section className="myCar">
          <h3>Name: Pesho</h3>
          <p>Category: Cat</p>
          <p className="img">
            <img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" />
          </p>
          <p className="description">This is my cat Pesho</p>
          <div className="car-info">
            <Link to="car-info">
              <button className="button">Details</button>
            </Link>
            <Link to="car-info">
              <button className="button">Delete</button>
            </Link>
            <i className="fas fa-heart"></i> <span>5</span>
          </div>
        </section>
        <section className="myCar">
          <h3>Name: Pesho</h3>
          <p>Category: Cat</p>
          <p className="img">
            <img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" />
          </p>
          <p className="description">This is my cat Pesho</p>
          <div className="car-info">
            <Link to="car-info">
              <button className="button">Details</button>
            </Link>
            <Link to="car-info">
              <button className="button">Delete</button>
            </Link>
            <i className="fas fa-heart"></i> <span>5</span>
          </div>
        </section>
      </ul>
    </section>
  );
};

export default MyCars;
