const temperatureInput = document.getElementById("temperatureInput");
const tempUnit = document.getElementById("tempUnit");
const convertButton = document.getElementById("convertButton");
const convertedTemp = document.getElementById("convertedTemp");

convertButton.addEventListener("click", () => {
  const tempValue = parseFloat(temperatureInput.value);
  const fromUnit = tempUnit.value;

  if (isNaN(tempValue)) {
    alert("Please enter a valid number for the temperature.");
    return;
  }

  let convertedValue;

  if (fromUnit === "celsius") {
    convertedValue = celsiusToFahrenheit(tempValue);
  } else if (fromUnit === "fahrenheit") {
    convertedValue = fahrenheitToCelsius(tempValue);
  } else if (fromUnit === "kelvin") {
    convertedValue = kelvinToCelsius(tempValue);
  }

  // Display the converted temperature with its unit
  convertedTemp.textContent = `${convertedValue.toFixed(2)} °${
    fromUnit === "celsius" ? "F" : fromUnit === "fahrenheit" ? "C" : "K"
  }`;
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}
