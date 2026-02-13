function convertTemp() {
  const tempInput = document.getElementById("temperature").value;
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");
  if (tempInput === "") {
    result.innerHTML = "Please enter a temperature value";
    return;
  }
  const temp = parseFloat(tempInput);
  let output = "";
  if (unit === "celsius") {
    output = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F <br> Kelvin: ${(temp + 273.15).toFixed(2)} K`;
  } 
  else if (unit === "fahrenheit") {
    output = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C <br> Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
  } 
  else if (unit === "kelvin") {
    output = `Celsius: ${(temp - 273.15).toFixed(2)} °C <br> Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
  }
  result.innerHTML = output;
}
