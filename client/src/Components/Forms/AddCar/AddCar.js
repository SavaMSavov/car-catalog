import { Component } from "react";
import "../Forms.css";
class AddCar extends Component {
  render() {
    return (
      <section className="create">
        <form action="#" method="post">
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
                  <option>3-Series</option>
                  <option>5-Series</option>
                  <option>6-Series</option>
                  <option>7-Series</option>
                  <option>Other</option>
                </select>
                <span className="actions"></span>
              </span>
            </p>
            <input
              className="button"
              type="submit"
              className="submit"
              value="Add Pet"
            />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default AddCar;
