import Car from "../Car/Car";
import { Component } from "react";
// import { db } from "../../Utils/firebase";
import getAll from "../Service/Service";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
    this.filter = this.filter.bind(this);
    this.allCars = [];
  }

  componentDidMount() {
    // db.ref("cars/").on("value", (snapshot) => {
    //   let allCars = [];
    //   snapshot.forEach((snap) => {
    //     const snapObj = snap.val();
    //     snapObj.id = snap.key;
    //     allCars.push(snapObj);
    //     this.allDataCars.push(snapObj);
    //   });

    const allCarsFromData = getAll();
    this.allCars = allCarsFromData;
    this.setState({ cars: allCarsFromData });
    // });
  }

  filter(e) {
    const clickedCategory = e.target.value;

    if (clickedCategory === "all") {
      this.setState({ cars: this.allCars });
    } else {
      const filteredArray = this.allCars.filter((obj) => {
        return obj.category === clickedCategory;
      });
      this.setState({ cars: filteredArray });
    }
  }

  render() {
    return (
      <section className="dashboard">
        <h1> Models</h1>

        <nav className="navbar">
          <ul>
            <li>
              <button onClick={this.filter} className="button" value="all">
                All
              </button>
            </li>
            <li>
              <button onClick={this.filter} className="button" value="3-Series">
                3 Series
              </button>
            </li>
            <li>
              <button onClick={this.filter} className="button" value="5-Series">
                5 Series
              </button>
            </li>
            <li>
              <button onClick={this.filter} className="button" value="6-Series">
                6 Series
              </button>
            </li>
            <li>
              <button onClick={this.filter} className="button" value="7-Series">
                7 Series
              </button>
            </li>
            <li>
              <button onClick={this.filter} className="button" value="Other">
                Other
              </button>
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
