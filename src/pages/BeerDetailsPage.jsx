import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const params = useParams();
  const [beerDetails, setBeerDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getBeersData();
  }, []);
  const getBeersData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
      );
      setBeerDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
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
        src={beerDetails.image_url}
        alt="Beer"
        style={{ maxWidth: "200px", maxHeight: "400px" }}
      />
      <div style={infoBeer}>
        <div style={infoCard}>
          <h1>{beerDetails.name}</h1>
          <span>{beerDetails.attenuation_level}</span>
        </div>
        <div style={infoCard}>
          <h3>{beerDetails.tagline}</h3>
          <span>{beerDetails.first_brewed}</span>
        </div>
      </div>
      <p style={{ maxWidth: "400px" }}>{beerDetails.description}</p>
      <span style={{ color: "gray" }}>{beerDetails.contributed_by}</span>
    </div>
  );
}

export default BeerDetailsPage;
