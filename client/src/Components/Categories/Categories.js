import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import Car from "../Car/Car";
import * as carsServices from "../Services/carsService";
import { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      currentCategory: "all",
    };
  }

  componentDidMount() {
    console.log(this.props);
    carsServices.getAll().then((res) => this.setState({ cars: res }));
  }

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.category;

    if (prevProps.match.params.category === category) {
      return;
    }

    carsServices.getAll(category).then((res) => {
      this.setState({ cars: res, currentCategory: category });
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1> Models</h1>
        <CategoryNavigation />

        <ul className="other-cars-list">
          {this.state.cars.map((x) => (
            <Car key={x.id} {...x} />
          ))}
        </ul>
      </section>
    );
  }
}

export default Categories;
