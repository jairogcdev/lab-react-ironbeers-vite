import { NavLink } from "react-router-dom";

function HomePage() {
  const homeStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
  };
  return (
    <div>
      <NavLink to={"/beers"} style={homeStyles}>
        <img src="./src/assets/beers.png" alt="beers" />
        <h3>All Beers</h3>
        <p style={{ width: "30%" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          praesentium, mollitia quia, animi placeat tempore cupiditate vel
          architecto possimus voluptatum molestiae impedit, quis atque natus
          quibusdam modi quasi dolor magni!
        </p>
      </NavLink>

      <NavLink to={"/random-beer"} style={homeStyles}>
        <img src="./src/assets/random-beer.png" alt="random-beers" />
        <h3>Random Beer</h3>
        <p style={{ width: "30%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          numquam. Eveniet, doloremque pariatur. Doloremque quae temporibus,
          ducimus mollitia ex aperiam officia ea harum optio necessitatibus
          nihil deserunt laudantium culpa dolor?
        </p>
      </NavLink>

      <NavLink to={"/new-beer"} style={homeStyles}>
        <img src="./src/assets/new-beer.png" alt="new-beer" />
        <h3>New Beer</h3>
        <p style={{ width: "30%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a
          cupiditate eveniet sapiente eligendi autem tempore totam quidem
          aperiam incidunt perspiciatis aut pariatur quis veritatis vel fugiat
          ex itaque eum.
        </p>
      </NavLink>
    </div>
  );
}

export default HomePage;
