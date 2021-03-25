import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Categories from "./Components/Categories/Categories";
import PetDetails from "./Components/PetDetails/PetDetails";

import "./App.css";
import Login from "./Components/Forms/Login/Login";
import Register from "./Components/Forms/Register/Register";
import AddPet from "./Components/Forms/AddPet/AddPet";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/pets/details/:petId" component={PetDetails} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add-pet" component={AddPet} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
