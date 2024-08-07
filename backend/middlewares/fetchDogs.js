const fetchDogs = async (animal, random, breed, callback) => {
  if (animal && random) {
    try {
      const url = "https://dog.ceo/api/breeds/image/random";
      const req = await fetch(url);
      const body = await req.json();
      const urlResp = body.message;
      const breedFromUrl = urlResp.split("/")[4];

      callback(null, { body, breedFromUrl, url });
    } catch (err) {
      callback(err);
    }
  }

  if (animal && !random) {
    try {
      url = `https://dog.ceo/api/breed/${breed}/images/random`;
      const req = await fetch(url);
      const body = await req.json();
      callback(null, { body, url });
    } catch (err) {
      callback(err);
    }
  }
};

module.exports = fetchDogs;
