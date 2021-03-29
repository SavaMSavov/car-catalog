import { Route, Switch, Redirect } from "react-router-dom";

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
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <PrivateRoute path="/" exact component={Categories} />
        <PrivateRoute path="/categories/:category" component={Categories} />
        <PrivateRoute
          path="/cars/details/:carId"
          exact
          component={CarDetails}
        />
        <PrivateRoute path="/add-car" component={AddCar} />
        <PrivateRoute
          path="/cars/details/:carId/edit"
          component={EditCarDetails}
        />
        
        <Route path="/home" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
