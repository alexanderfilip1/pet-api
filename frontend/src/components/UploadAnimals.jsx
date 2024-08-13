import { useState } from "react";
import Loader from "./Loader";
import "../assets/css/UploadAnimals.css";
import useAuthToken from "../components/AuthToken";

export default function UploadAnimals() {
  const [loader, setLoader] = useState(false);
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  const { token } = useAuthToken();

  const hideLoader = () => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const sendData = async () => {
    setLoader(true);
    try {
      if (!token) {
        hideLoader();
        setError("You are not authorized to do that. Firstly log in");
        return;
      }
      setError();
      const formData = new FormData();
      formData.append("animal", animal);
      formData.append("breed", breed);
      formData.append("image", image);
      const req = await fetch("http://localhost:3000/api/uploadanimals", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const body = await req.json();
      hideLoader();
      setNotification(body.message);

      console.log(body);
    } catch (err) {
      console.log(err);
    }
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
              <select
                id="animals"
                name="options"
                className="field fullWidth"
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
              >
                <option value="" disabled>
                  Select an animal
                </option>
                <option value="cat">Cat</option>
                <option value="fish">Fish</option>
              </select>
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
            <p className="error">{error}</p>
            <p className="notification">{notification}</p>
            <button className="btn">Upload Animal</button>
          </form>
        </div>
      </section>
    </>
  );
}
