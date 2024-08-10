import React, { useState } from "react";
import "../assets/css/FetchAnimals.css";

export default function FetchAnimals() {
  const [animal, setAnimal] = useState("");
  const [random, setRandom] = useState();
  const [breed, setBreed] = useState();

  const authToken = localStorage.getItem("authToken");

  const fetchAnimalData = async () => {
    const url = `http://localhost:3000/api/animal/?animal=${animal}&random=${random}&breed=${breed}`;
    const req = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const body = await req.json();
    console.log(body);
  };

  return (
    <>
      <section className="fetchAnimals">
        <form className="fetchAnimals__form">
          <label htmlFor="animals">Choose an option:</label>
          Animal:
          <select
            id="animals"
            name="options"
            onChange={(e) => setAnimal(e.target.value)}
            className="fullWidth"
          >
            <option disabled selected value=""></option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="fish">Fish</option>
          </select>
          <label htmlFor="random">
            Random
            <select
              name="options"
              id="random"
              onChange={(e) => setRandom(e.target.value)}
              className="fullWidth"
            >
              <option disabled selected value=""></option>
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </label>
          <label htmlFor="breed">
            Breed:
            <input
              type="text"
              className="fullWidth"
              onChange={(e) => {
                setBreed(e.target.value);
              }}
            />
          </label>
          <button
            id="fetchAnimalBtn"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              fetchAnimalData();
            }}
          >
            Fetch
          </button>
        </form>
      </section>
    </>
  );
}
