import Car from "../Car/Car";
import { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.allCars = this.props.CarsDataContent;
    this.state = {
      cars: props.CarsDataContent,
    };
    this.filter = this.filter.bind(this);
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
