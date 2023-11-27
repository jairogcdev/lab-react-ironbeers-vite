import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getRandomData = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
    setRandomBeer(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getRandomData();
  }, []);

  if (isLoading === true) {
    return "...Loading";
  }
  const datailsStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
  };
  const infoCard = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const infoBeer = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
  };
  if (isLoading === true) {
    return "...Loading";
  }

  return (
    <div style={datailsStyles}>
      <img
        src={randomBeer.image_url}
        alt="Beer"
        style={{ maxWidth: "200px", maxHeight: "400px" }}
      />
      <div style={infoBeer}>
        <div style={infoCard}>
          <h1>{randomBeer.name}</h1>
          <span>{randomBeer.attenuation_level}</span>
        </div>
        <div style={infoCard}>
          <h3>{randomBeer.tagline}</h3>
          <span>{randomBeer.first_brewed}</span>
        </div>
      </div>
      <p style={{ maxWidth: "400px" }}>{randomBeer.description}</p>
      <span style={{ color: "gray" }}>{randomBeer.contributed_by}</span>
    </div>
  );
}

export default RandomBeerPage;
