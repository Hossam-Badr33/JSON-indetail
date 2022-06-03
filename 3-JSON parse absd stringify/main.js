let text = '{"name": "hossam","age":38}';
console.log(typeof text);
let json = JSON.parse(text); //convert JSON-string =>  to object
console.log(typeof json);
json.name = "Ahmed";
json["age"] = 30;
text = JSON.stringify(json); //convert => js-value to object
console.log(text);
console.log(typeof text);
