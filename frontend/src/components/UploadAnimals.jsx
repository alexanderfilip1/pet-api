import { useState } from "react";
import Loader from "./Loader";
import "../assets/css/UploadAnimals.css";
import useAuthToken from "../components/AuthToken";

export default function UploadAnimals() {
  const [loader, setLoader] = useState(false);
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState(null);

  const { token } = useAuthToken();

  const sendData = async () => {
    console.log(animal, breed, image);
    const data = {
      animal: animal,
      breed: breed,
      image: image,
    };
    const req = await fetch("http://localhost:3000/api/uploadAnimals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const body = await req.json();
    console.log(body);
  };

  return (
    <>
      {loader && <Loader />}
      <section className="uploadAnimals container">
        <div className="uploadAnimals__wrapper">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              sendData();
            }}
          >
            <label htmlFor="animal">
              Animal Type
              <input
                type="text"
                id="animal"
                className="fullWidth field"
                onChange={(e) => {
                  setAnimal(e.target.value);
                }}
              />
            </label>
            <label htmlFor="animal__breed">
              Breed
              <input
                type="text"
                id="animal__breed"
                className="fullWidth field"
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
              />
            </label>
            <label htmlFor="animal__photo">
              <input
                type="file"
                name="animal__photo"
                id="animal__photo"
                className="fullWidth field"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </label>
            <button className="btn">Upload Animal</button>
          </form>
        </div>
      </section>
    </>
  );
}
