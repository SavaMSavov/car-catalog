//import { db } from "../../Utils/firebase";
import Car from "../Car/Car";
import getAll from "../Service/Service";

const MyCars = (props) => {
  // let allCars = [];
  // db.ref("cars/").on("value", (snapshot) => {
  //   snapshot.forEach((snap) => {
  //     const snapObj = snap.val();
  //     snapObj.id = snap.key;
  //     allCars.push(snapObj);
  //   });
  // });
  const allCars = getAll();
  // const allCars = props.CarsDataContent;
  const currUserID = props.authInfoo.userId;

  const currUserCars = allCars.filter((obj) => {
    return obj.uid === currUserID;
  });

  return (
    <section className="my-cars">
      <h1>My Cars</h1>
      <ul className="my-cars-list">
        {currUserCars.map((x) => (
          <Car key={x.id} {...x} />
        ))}
      </ul>
    </section>
  );
};

export default MyCars;
