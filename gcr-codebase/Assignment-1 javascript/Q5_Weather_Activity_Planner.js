// Q5. Weather Activity Planner
const temperature = 24; // degrees Celsius
const isRaining = false;
const windSpeed = 12; // km/h

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (temperature >= 15 && temperature <= 35 && !isRaining || windSpeed <= 20 && temperature >= 15) {
    // Combined logical conditions for suitable walking weather.
    console.log("Perfect day for a walk.");
} else {
    console.log("Consider staying indoors if the weather feels uncomfortable.");
}
