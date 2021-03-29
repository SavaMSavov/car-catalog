import "../Forms.css";
import * as carsServices from "..//..//Services/carsService";

const AddCar = ({ history }) => {
  const onCreateCarSubmitHandler = (e) => {
    e.preventDefault();

    const { model, description, imageURL, category } = e.target;

    carsServices
      .create(model.value, description.value, imageURL.value, category.value)
      .then(() => {
        history.push("/");
      });
  };
  return (
    <section className="create">
      <form onSubmit={onCreateCarSubmitHandler}>
        <fieldset>
          <legend>Add new Car</legend>
          <p className="field">
            <label htmlFor="model">Model</label>
            <span className="input">
              <input type="text" name="model" id="model" placeholder="Model " />
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea
                rows="4"
                cols="45"
                type="text"
                name="description"
                id="description"
                placeholder="Description"
              ></textarea>
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input
                type="text"
                name="imageURL"
                id="image"
                placeholder="Image"
              />
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="category">Category</label>
            <span className="input">
              <select type="text" name="category">
                <option value="3-Series">3-Series</option>
                <option value="5-Series"> 5-Series</option>
                <option value="6-Series">6-Series</option>
                <option value="7-Series">7-Series</option>
                <option value="Other">Other</option>
              </select>
              <span className="actions"></span>
            </span>
          </p>
          <input className="button submit" type="submit" value="Add Car" />
        </fieldset>
      </form>
    </section>
  );
};

export default AddCar;
