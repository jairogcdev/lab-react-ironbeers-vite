import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: 0,
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });
  const handleInputChange = (event) => {
    const clone = JSON.parse(JSON.stringify(formValues));
    clone[event.target.name] = event.target.value;
    setFormValues(clone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        formValues
      );
      console.log(response);
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="tagline">Tagline</label>
      <input
        type="text"
        name="tagline"
        value={formValues.tagline}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        cols="30"
        rows="10"
        value={formValues.description}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <label htmlFor="first_brewed">First Brewed</label>
      <input
        type="text"
        name="first_brewed"
        value={formValues.first_brewed}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="brewers_tips">Brewers tips</label>
      <input
        type="text"
        name="brewers_tips"
        value={formValues.brewers_tips}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="attenuation_level">Attenuation Level</label>
      <input
        type="number"
        name="attenuation_level"
        value={formValues.attenuation_level}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="contributed_by">Contributed By</label>
      <input
        type="text"
        name="contributed_by"
        value={formValues.contributed_by}
        onChange={handleInputChange}
      />
      <br />
      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
