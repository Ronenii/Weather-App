# Weather App

## Features

- **Search Functionality**: Users can input a city name and fetch its weather.
- **Current Weather Display**: Shows current temperature, humidity, wind speed, and weather conditions.
- **Forecast Display**: Shows a 5-day weather forecast.
- **Error Handling**: Handles invalid city names and network errors gracefully.
- **Responsive Design**: Ensures usability on both desktop and mobile devices.

## Steps to Build the Weather App

### 1. Setup Your Project

- Initialize a new React TypeScript project using Vite.
- Set up the project structure with necessary folders like `components`, `services`, and `assets` for styling.

### 2. Create Components

#### SearchBar

- Create a text input for entering the city name and a button to trigger the search.
- Handle the input state and button click event to call a parent function.

#### CurrentWeather

- Create a component to display the current weather data.
- Structure the data display with temperature, humidity, wind speed, and weather description.

#### Forecast

- Create a component to display the 5-day weather forecast.
- Use a map function to iterate over the forecast data and render individual day components.

#### WeatherCard

- Make a reusable component for displaying weather information for a single day.

### 3. Fetch Weather Data

- **API Setup**: Sign up for a weather API (e.g., OpenWeatherMap) and obtain an API key.
- **Service File**: Create a service file to handle API requests.
  - Define functions to fetch current weather and forecast data.

### 4. Manage State

- Use React’s hooks (`useState` and `useEffect`) to manage the state of the weather data.
- Create TypeScript interfaces to type your state and props.

### 5. Implement Error Handling

- Display error messages when the API call fails or the user enters an invalid city name.
- Use try-catch blocks or promise handling to catch and set errors in the state.

### 6. Style Your App

- Apply CSS or a CSS framework to make your app visually appealing and responsive.
- Organize your styles in a way that makes them easy to maintain (e.g., using CSS modules or styled-components).

## Learning Goals

- **TypeScript with React**: Practice typing props, state, and API responses.
- **API Integration**: Learn to make API calls and handle asynchronous data.
- **State Management**: Use React’s hooks for managing state and side effects.
- **Component Design**: Develop reusable and composable components.
- **Error Handling**: Implement user-friendly error handling.
- **Styling**: Ensure the app is aesthetically pleasing and responsive.
