import React from "react";
import "../assets/css/DocumentationSection.css";

export default function DocumentationSection() {
  const sections = [
    {
      title: "Project Overview",
      content:
        "This project is a full-stack application that includes a backend server built with Node.js, Express.js, React and a MySQL database for data storage. The server is designed to handle authentication, manage animal data, and serve images associated with different animals. A front-end interface is provided to interact with the server and demonstrate its functionalities.",
    },
    {
      title: "Authentication",
      content:
        "The application requires user authentication for accessing various routes. The `/api/signin` endpoint is used for signing in users. Additionally, a login page can be loaded via a `GET` request, where users can enter their credentials.",
    },
    {
      title: "Animal Data API",
      content:
        "The server provides an API to retrieve information about different animals, including `dogs`, `cats`, and `fish`. Depending on the request, the server either fetches data from an external API or from the local database:\n\n" +
        "- For `dogs`, data is fetched from the external `Dog CEO API`.\n" +
        "- For `cats` and `fish`, data is retrieved from the local database.\n\n" +
        "The endpoint `/api/animal/:animal` allows users to specify the type of animal and optionally retrieve a specific breed or a random one.\n\n" +
        "- If `random=1`, the `breed` parameter provided by the user will be ignored, and a random breed will be returned instead.",
    },
    {
      title: "Adding New Animals",
      content:
        "Users can add new entries for `cats` and `fish` to the database using the `POST /api/animal` endpoint. This includes uploading images, which are stored on the server. The application automatically generates the URL for the uploaded image and saves it along with the animal data.",
    },
    {
      title: "Input Validation",
      content:
        "All data provided by users is thoroughly validated to ensure consistency and security before being processed by the server.",
    },
    {
      title: "Database Configuration",
      content:
        "The project includes a SQL file that initializes the database, creates the necessary tables, and populates them with sample data. This ensures that the application can be easily set up and tested.",
    },
    {
      title: "Easy Setup",
      content:
        "The project is designed for easy deployment. After setting up the `MySQL` database using the provided SQL file, users only need to install dependencies and configure the database connection settings to get the application running.",
    },
    {
      title: "Frontend Documentation",
      content:
        "A React-based frontend is included to provide documentation and demonstrate how to interact with the server. The frontend includes a login form, buttons to fetch and display animal data, and a form for adding new animal entries. It also explains the server’s functionality, data sources, and system architecture.",
    },
  ];

  return (
    <section className="documentation__section">
      {sections.map((section, index) => (
        <article className="documentation__article" key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </article>
      ))}
    </section>
  );
}
