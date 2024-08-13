const db = require("../config/db");

const fetchCat = async (animal, random, breed, callback) => {
  try {
    let cat;
    console.log(random);
    if (random) {
      [cat] = await db.query(
        "SELECT * FROM animals WHERE type = ? ORDER BY RAND() LIMIT 1;",
        [animal]
      );
      // console.log(cat[0].type, cat[0].breed, cat[0].image);
    } else {
      [cat] = await db.query(
        "SELECT * FROM animals WHERE type = ? AND breed = ?;",
        [animal, breed]
      );
    }

    if (cat[0]) {
      callback(null, { cat: cat[0] });
    } else {
      console.log("Not found");
      callback(new Error("No cat found"), null);
    }
  } catch (err) {
    callback(err, null);
  }
};

module.exports = fetchCat;
