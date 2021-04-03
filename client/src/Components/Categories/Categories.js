import Car from "../Car/Car";
import * as carsServices from "../Services/carsService";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../Utils/firebase";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }
  componentDidMount() {
    db.ref("cars/").on("value", (snapshot) => {
      let allCars = [];
      snapshot.forEach((snap) => {
        allCars.push(snap.val());
      });
      this.setState({ cars: allCars });
    });
  }

  // componentDidUpdate(e) {
  //   db.ref("cars/")
  //     .orderByChild("category")
  //     .equalTo("3-Series")
  //     .on("child_added", (snap) => {
  //       console.log(snap.val());
  //     });
  //}

  // componentDidMount() {
  //   carsServices.getAll().then((res) => this.setState({ cars: res }));
  // }

  componentDidUpdate(е) {
    const category = this.props.match.params.category;

    if (е.match.params.category === category) {
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
        <button onSubmit={this.componentDidUpdate} className="button" value="">
          EEE
        </button>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/categories/all">All</NavLink>
            </li>
            <li>
              <NavLink to="/categories/3-Series">3 Series</NavLink>
            </li>
            <li>
              <NavLink to="/categories/5-Series">5 Series</NavLink>
            </li>
            <li>
              <NavLink to="/categories/6-Series">6 Series</NavLink>
            </li>
            <li>
              <NavLink to="/categories/7-Series">7 Series</NavLink>
            </li>
            <li>
              <NavLink to="/categories/Other">Other</NavLink>
            </li>
          </ul>
        </nav>

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
