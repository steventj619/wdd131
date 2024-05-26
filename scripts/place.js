const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;
const footerFirst = document.querySelector('footer p:first-of-type');
footerFirst.textContent = `© ${currentYear} 🙏🏼 Steven Tran 🙏🏼 California, US`;
const footerSecond = document.querySelector('footer p:nth-of-type(2)');
footerSecond.textContent = `Last modified: ${lastModifiedDate} MDT`; 

const temperature = 10;
const wind_speed = 5;

function calculateWindChill(temperature, wind_speed) {
  if ((temperature <= 10 && wind_speed > 4.8) || (temperature <= 50 && wind_speed > 3)) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind_speed, 0.16) + 0.3965 * temperature * Math.pow(wind_speed, 0.16);
  } else {
    return "N/A";
  }
}

function displayWindChill() {
  const windchillElement = document.getElementById("wind_chill");
  const wind_chill = calculateWindChill(temperature, wind_speed);
  windchillElement.textContent = wind_chill !== "N/A" ? `${wind_chill.toFixed(2)}°C` : "N/A";
}

window.onload = function () {
  displayWindChill();
  updateFooter();
};