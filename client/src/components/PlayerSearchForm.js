import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function PlayerSearchForm({ players }) {
  const [selectedCountry, setSelectedCountry] = useState({
    country: "",
  });

  //Make an array of Just countries
  const countryData = players.map((player) => player.country);
  //Remove all duplicate countries from countryData array
  const parsedCountryData = new Set(countryData);
  const cleanedCountryData = [...parsedCountryData];

  //Map through cleaned array and pass those values to the options form
  const selectData = cleanedCountryData.map((countries) => {
    return {
      key: Math.random(),
      text: countries,
      value: countries.toLowerCase(),
      name: countries,
    };
  });

  //Grab user Country Selection and update state with that choice
  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedCountry({ country: value });
  };

  //Update state on app to only show players from selected country form.
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(selectedCountry);
  };

  //map through optoins in, creat a new Select Form, don't use Semantic UI see if that works.

  return (
    <Form style={{ margin: "50px 0 20px" }} onSubmit={submitHandler}>
      <label style={{ fontWeight: "bolder", fontSize: "18px" }}>
        Select Country:
      </label>
      <select
        style={{ width: "300px", height: "35px", marginBottom: "15px" }}
        value={selectedCountry.country}
        onChange={handleChange}
      >
        {selectData.map((option) => {
          return (
            <option value={option.value} key={option.key}>
              {option.text}
            </option>
          );
        })}
      </select>
      <Button type="submit" color="teal">
        Choose Country
      </Button>
    </Form>
  );
}

export default PlayerSearchForm;
