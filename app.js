const celsiusToFahrenheit = (celsius) => {
    return celsius * (9/5) + 32;
}
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * (5/9);
}

const tempInput = process.argv[2];
const unit = process.argv[3].toLowerCase();

const convert = (temperature, unitInput) => {
    const tempFahrenheitResult = celsiusToFahrenheit(tempInput);
    const tempCelsiusResult = fahrenheitToCelsius(tempInput);

    if (unitInput === 'c' || unitInput === 'celsius') {
        console.log(`${temperature} degrees Celsius is ${tempFahrenheitResult} degrees Fahrenheit`);
    } else if (unitInput === 'f' || unitInput === 'fahrenheit') {
        console.log(`${temperature} degrees Fahrenheit is ${tempCelsiusResult} degrees Celsius`);
    } else {
        console.log('Please us syntax: temperature(number) unit(celsius or fahrenheit)');
    }
}

convert(tempInput, unit);


