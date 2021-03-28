import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Categories from "./Components/Categories/Categories";

import "./App.css";
import Login from "./Components/Forms/Login/Login";
import Register from "./Components/Forms/Register/Register";
import AddCar from "./Components/Forms/AddCar/AddCar";
import Home from "./Components/Home/Home";
import CarDetails from "./Components/Forms/CarDetails/CarDetails";
import EditCarDetails from "./Components/Forms/EditCarDetails/EditCarDetails";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/cars/details/:carId" exact component={CarDetails} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add-car" component={AddCar} />
        <Route path="/cars/details/:carId/edit" component={EditCarDetails} />;
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
