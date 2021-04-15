import { db } from "../../Utils/firebase";

const getAll = () => {
  let allCars = [];
  db.ref("cars/").on("value", (snapshot) => {
    snapshot.forEach((snap) => {
      const snapObj = snap.val();
      snapObj.id = snap.key;
      allCars.push(snapObj);
    });
  });
  return allCars;
};

export default getAll;
