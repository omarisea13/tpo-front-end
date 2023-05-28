const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('error');
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        emailInput.classList.add('error');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email';
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter your message';
        messageInput.classList.add('error');
        isValid = false;
    } else {
        messageError.textContent = '';
        messageInput.classList.remove('error');
    }

    if (isValid) {
        contactForm.submit();
    }
});

function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

const API_KEY = '167b418dd1a20b20a88ec2c179ca8550';

// Function to fetch weather data from the API
function fetchWeatherData(city) {
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={-34.603683}&lon={-58.381557}&appid={167b418dd1a20b20a88ec2c179ca8550}';

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      // Update the weather information on the webpage
      updateWeatherInfo(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

// Function to update the weather information on the webpage
function updateWeatherInfo(data) {
  const cityNameElement = document.querySelector('.city-name');
  const temperatureElement = document.querySelector('.temperature');
  const descriptionElement = document.querySelector('.description');

  cityNameElement.textContent = data.name;
  temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
  descriptionElement.textContent = `Description: ${data.weather[0].description}`;
}

const city = 'Ciudad Autónoma de Buenos Aires';
fetchWeatherData(city);
