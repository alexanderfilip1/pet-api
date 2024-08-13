var express = require("express");
var router = express.Router();
const secure = require("../middlewares/secure");
const parseQueryParams = require("../middlewares/parseQueryParams");
const fetchDogs = require("../middlewares/fetchDogs");
const fetchCat = require("../middlewares/fetchCat");
const fetchFish = require("../middlewares/fetchFish");

router.use(parseQueryParams);

router.get("/", secure, async function (req, res) {
  const { animal, random, breed } = req.query;

  try {
    switch (animal) {
      case "dog":
        console.log("hello Dog");
        await fetchDogs(animal, random, breed, (err, result) => {
          if (err) {
            console.error(err);
            return res
              .status(404)
              .json({ status: "error", message: "Breed not found" });
          }
          const { body, breedFromUrl, url } = result;
          const response = {
            status: body.status,
            data: {
              animal: animal,
              breed: breedFromUrl || breed,
              exampleImage: body.message,
              source: url,
            },
          };
          return res.json(response);
        });
        break;

      case "cat":
        console.log("hello cat");
        await fetchCat(animal, random, breed, (err, result) => {
          if (err) {
            console.error(err);
            return res
              .status(404)
              .json({ status: "error", message: "Breed not found" });
          }

          const { type, breed, image } = result.cat;
          console.log(type, breed, image);

          if (result.cat) {
            const response = {
              status: "success",
              data: {
                animal: type,
                breed: breed,
                exampleImage: image,
                source: "own",
              },
            };
            return res.status(200).json(response);
          } else {
            return res
              .status(404)
              .json({ status: "error", message: "No cat found" });
          }
        });
        break;

      case "fish":
        await fetchFish(animal, random, breed, (err, result) => {
          if (err) {
            console.error(err);
            return res
              .status(404)
              .json({ status: "error", message: "Breed not found" });
          }

          const { type, breed, image } = result.fish;
          console.log(type, breed, image);

          if (result.fish) {
            const response = {
              status: "success",
              data: {
                animal: type,
                breed: breed,
                exampleImage: image,
                source: "own",
              },
            };
            return res.status(200).json(response);
          } else {
            return res
              .status(404)
              .json({ status: "error", message: "No fish found" });
          }
        });
        break;

      default:
        return res.status(404).send({ error: "No animal found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }

  console.log(animal, random, breed);
});

module.exports = router;
