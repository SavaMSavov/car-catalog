import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import Pet from "../Pet/Pet";
import * as petsServices from "../Services/petsService";
import { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      currentCategory: "all",
    };
  }

  componentDidMount() {
    console.log(this.props);
    petsServices.getAll().then((res) => this.setState({ pets: res }));
  }

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.category;

    if (prevProps.match.params.category === category) {
      return;
    }

    petsServices.getAll(category).then((res) => {
      this.setState({ pets: res, currentCategory: category });
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>Dashboard</h1>
        <CategoryNavigation />

        <ul className="other-pets-list">
          {this.state.pets.map((x) => (
            <Pet key={x.id} {...x} />
          ))}
        </ul>
      </section>
    );
  }
}

export default Categories;
