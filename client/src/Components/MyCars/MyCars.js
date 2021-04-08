import Car from "../Car/Car";

const MyCars = (props) => {
  const allCars = props.CarsDataContent;
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
