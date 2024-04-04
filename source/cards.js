let apiUrlFlowers = "http://localhost:3000/plants";
let apiUrlFestivities = "http://localhost:3000/festivities";
let apiUrlBirthday = "http://localhost:3000/birthday";

async function callApi(url) {
  const response = await fetch(url).then((response) => response.json());
  response.map((index) => {
    console.log(index);
  });
}

callApi(apiUrlFlowers);
callApi(apiUrlFestivities);
callApi(apiUrlBirthday);
