import React from "react";
import Header from "../components/Header";
import FetchAnimals from "../components/FetchAnimals";
import "../assets/css/HomePage.css";
import UploadAnimals from "../components/UploadAnimals";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <main className="main" style={{ width: "100%", position: "initial" }}>
          <FetchAnimals />
          <UploadAnimals />
        </main>
      </div>
    </>
  );
}
