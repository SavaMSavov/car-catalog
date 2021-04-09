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
import MyCars from "./Components/MyCars/MyCars";

import { auth, db } from "./Utils/firebase";
import { useEffect, useMemo, useState } from "react";
import { useList } from "react-firebase-hooks/database";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
    userId: user?.uid,
  };

  const [snapshots] = useList(db.ref("cars/"));

  const CarsData = useMemo(
    () =>
      snapshots.map((item) => {
        const itemObj = item.val();
        itemObj.id = item.key;
        return itemObj;
      }),
    [snapshots]
  );

  return (
    <div className="container">
      <Header {...authInfo} />
      <Switch>
        {authInfo.isAuthenticated ? (
          <>
            <Route
              path="/categories"
              exact
              render={(props) => (
                <Categories {...props} CarsDataContent={CarsData} />
              )}
            />
            <Route
              path="/cars/details/:carId"
              exact
              render={(props) => (
                <CarDetails
                  {...props}
                  CarsDataContent={CarsData}
                  currentLoggedUser={authInfo.userId}
                />
              )}
            />

            <Route
              path="/my-cars"
              render={(props) => (
                <MyCars
                  {...props}
                  CarsDataContent={CarsData}
                  authInfoo={authInfo}
                />
              )}
            />
            <Route path="/add-car" component={AddCar} />

            <Route
              path="/cars/details/:carId/edit"
              exact
              render={(props) => (
                <EditCarDetails
                  {...props}
                  CarsDataContent={CarsData}
                  currentLoggedUser={authInfo.userId}
                />
              )}
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
