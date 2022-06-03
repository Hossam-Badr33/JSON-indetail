/*fetch("url to github file.json") */
fetch("https://hossam-badr33.github.io/JSON-API/data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("hey");
