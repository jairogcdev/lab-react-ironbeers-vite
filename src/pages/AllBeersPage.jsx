import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getBeersData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );

      setAllBeers(response.data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getBeersData();
  }, []);
  if (isLoading === true) {
    return "...Loading";
  }
  const AllBeersStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
  };
  const infoCard = {
    display: "flex",
    flexDirection: "row",
    width: "25%",
  };
  const infoBeer = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
  };
  const blackText = "Created by:";
  return (
    <div>
      {allBeers.map((eachBeer) => {
        return (
          <div key={eachBeer._id} style={AllBeersStyles}>
            <div style={infoCard}>
              <img
                src={eachBeer.image_url}
                alt={eachBeer.name}
                style={{ maxWidth: "100px", maxHeight: "200px" }}
              />

              <div style={infoBeer}>
                <h1>
                  <NavLink
                    to={"/beers/" + eachBeer._id}
                    style={{ textDecoration: "none" }}
                  >
                    {eachBeer.name}
                  </NavLink>
                </h1>

                <span style={{ color: "gray", fontSize: "1.5em" }}>
                  {eachBeer.tagline}
                </span>
                <span>
                  {blackText} {eachBeer.contributed_by}
                </span>
              </div>
            </div>

            <hr
              style={{
                backgroundColor: "gray",
                width: "100%",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
