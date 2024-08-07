var express = require("express");
var router = express.Router();
const secure = require("../middlewares/secure");
const parseQueryParams = require("../middlewares/parseQueryParams");
const fetchDogs = require("../middlewares/fetchDogs");

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
            return res.status(404).json({ error: "Breed not found" });
          }
          const { body, breedFromUrl, url } = result;
          console.log(body);
          const response = {
            status: body.status,
            data: {
              animal: animal,
              breed: breedFromUrl || breed,
              exampleImage: body.message,
              source: url,
            },
          };
          console.log(response);
          res.json(response);
        });
        break;

      case "cat":
        res.send({ message: "Cats are not supported yet." });
        break;
      case "fish":
        res.send({ message: "Fish are not supported yet." });
        break;
      default:
        res.status(404).send({ error: "No animal found" });
        break;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }

  console.log(animal, random, breed);
});

module.exports = router;
