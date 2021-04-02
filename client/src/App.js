import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import Login from "./Components/Forms/Login/Login";
import Register from "./Components/Forms/Register/Register";
import AddCar from "./Components/Forms/AddCar/AddCar";
import Home from "./Components/Home/Home";
import CarDetails from "./Components/Forms/CarDetails/CarDetails";
import EditCarDetails from "./Components/Forms/EditCarDetails/EditCarDetails";

import { auth } from "./Utils/firebase";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="container">
      <Header {...authInfo} />
      <Switch>
        {authInfo.isAuthenticated ? (
          <>
            <Route path="/" exact component={Categories} />
            <Route path="/categories/:category" component={Categories} />
            <Route path="/cars/details/:carId" exact component={CarDetails} />
            <Route path="/add-car" component={AddCar} />
            <Route
              path="/cars/details/:carId/edit"
              component={EditCarDetails}
            />
            <Route
              path="/logout"
              render={() => {
                auth.signOut();
                return <Redirect to="/home" />;
              }}
            />
          </>
        ) : (
          <>
            <Route path="/home" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        )}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
