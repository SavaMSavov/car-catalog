import Car from "../Car/Car";
import getAll from "../Service/Service";

const MostLiked = () => {
  const allCars = getAll();

  const topCars = allCars.filter((obj) => {
    return obj.likes >= 50;
  });

  const sortedCarsByLikes = topCars.sort((a, b) =>
    a.likes > b.likes ? -1 : 1
  );

  return (
    <section className="my-cars">
      <h1>Cars with more than 50 likes</h1>
      <ul className="my-cars-list">
        {sortedCarsByLikes.map((x) => (
          <Car key={x.id} {...x} />
        ))}
      </ul>
    </section>
  );
};

export default MostLiked;
