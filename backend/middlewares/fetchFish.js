const db = require("../config/db");

const fetchFish = async (animal, random, breed, callback) => {
  try {
    let fish;
    console.log(random);
    if (random) {
      [fish] = await db.query(
        "SELECT * FROM animals WHERE type = ? ORDER BY RAND() LIMIT 1;",
        [animal]
      );
    } else {
      [fish] = await db.query(
        "SELECT * FROM animals WHERE type = ? AND breed = ?;",
        [animal, breed]
      );
    }

    if (fish[0]) {
      callback(null, { fish: fish[0] });
    } else {
      console.log("Not found");
      callback(new Error("No fish found"), null);
    }
  } catch (err) {
    callback(err, null);
  }
};

module.exports = fetchFish;
