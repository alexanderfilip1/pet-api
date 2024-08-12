import React, { useState } from "react";
import "../assets/css/FetchAnimals.css";
import Loader from "./Loader";
import useAuthToken from "../components/AuthToken";

export default function FetchAnimals() {
  const [animal, setAnimal] = useState("");
  const [random, setRandom] = useState("");
  const [breed, setBreed] = useState("");
  const [animalInformation, setAnimalInformation] = useState(null);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const { token } = useAuthToken();

  const hideLoader = () => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const fetchAnimalData = async () => {
    setLoader(true);
    try {
      const url = `http://localhost:3000/api/animal/?animal=${animal}&random=${random}&breed=${breed}`;
      const req = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use token from custom hook
        },
      });

      const body = await req.json();
      console.log(body);
      if (body.status === "success") {
        setAnimalInformation(body);
        setError("");
      } else {
        setError(body.message || "An error occurred.");
        setAnimalInformation(null);
      }
      hideLoader();
    } catch (err) {
      setError("An error occurred while fetching animal data.");
      setAnimalInformation(null);
      hideLoader();
    }
  };

  return (
    <>
      {loader && <Loader />}
      <section className="fetchAnimals container">
        <div className="fetchAnimals__wrapper">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              fetchAnimalData();
            }}
          >
            <label htmlFor="animals">Choose an option:</label>
            Animal:
            <select
              id="animals"
              name="options"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              className="fullWidth"
            >
              <option value="" disabled>
                Select an animal
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="fish">Fish</option>
            </select>
            <label htmlFor="random">
              Random
              <select
                name="options"
                id="random"
                value={random}
                onChange={(e) => setRandom(e.target.value)}
                className="fullWidth"
              >
                <option value="" disabled>
                  Select random option
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </label>
            <label htmlFor="breed">
              Breed:
              <input
                type="text"
                id="breed"
                className="fullWidth"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </label>
            <button id="fetchAnimalBtn" className="btn" type="submit">
              Fetch
            </button>
          </form>
          {animalInformation && animalInformation.status === "success" && (
            <div className="animal fullWidth">
              <h1 className="animal__type">
                Type: {animalInformation.data.animal}
              </h1>
              <p className="animal__breed">
                Breed: {animalInformation.data.breed}
              </p>
              <img
                className="animal__image fullWidth"
                src={animalInformation.data.exampleImage}
                alt={animalInformation.data.breed}
              />
              <h4 className="animal__source">
                Source: {animalInformation.data.source}
              </h4>
            </div>
          )}
          {error && <div className="error">{error}</div>}
        </div>
      </section>
    </>
  );
}
