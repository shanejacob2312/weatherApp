# Weather App

A modern, responsive weather application built with HTML, CSS, and JavaScript that allows users to check real-time weather conditions for any location worldwide.

## 🌟 Features

- **Real-time Weather Data**: Get current weather information for any city
- **Beautiful UI/UX**: Modern, responsive design with smooth animations
- **Comprehensive Weather Details**: Temperature, humidity, wind speed, visibility, and more
- **Weather Icons**: Visual representation of current weather conditions
- **Error Handling**: User-friendly error messages for invalid locations or network issues
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Keyboard Navigation**: Support for Enter key and Escape key
- **Loading States**: Smooth loading animations and visual feedback
- **Auto-focus**: Input field automatically focused on page load

## 🚀 Live Demo

Open `index.html` in your web browser to see the app in action!
Right Click on `index.html` and select open with live server if using VS Code.

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- OpenWeatherMap API key (free tier available)

## ⚙️ Setup Instructions

### 1. Get Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Go to your API keys section
4. Copy your API key

### 2. Configure the API Key

1. Open `script.js` in your code editor
2. Find line 4: `this.apiKey = 'YOUR_API_KEY_HERE';`
3. Replace `'YOUR_API_KEY_HERE'` with your actual API key
4. Save the file

Example:
```javascript
this.apiKey = 'abc123def456ghi789'; // Your actual API key here
```

### 3. Run the Application

1. Open `index.html` in your web browser
2. Enter a city name in the search field
3. Click "Search" or press Enter
4. View the weather information!

## 🎯 How to Use

1. **Enter Location**: Type a city name in the search field (e.g., "London", "New York", "Tokyo")
2. **Search**: Click the search button or press Enter
3. **View Results**: The app will display:
   - Current temperature in Celsius
   - Weather description and icon
   - Location details (city, country, date/time)
   - Additional weather details (humidity, wind speed, visibility, feels like temperature)

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Async/await, classes, and modern JavaScript features
- **OpenWeatherMap API**: Real-time weather data
- **Font Awesome**: Icons for better visual experience
- **Google Fonts**: Poppins font family for modern typography

### API Integration
- Uses OpenWeatherMap's Current Weather Data API
- Fetches data in metric units (Celsius)
- Includes comprehensive error handling
- Supports international city names

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Touch-friendly interface

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #28a745;
    --error-color: #dc3545;
}
```

### Adding New Weather Details
1. Add new elements to the HTML
2. Update the JavaScript `displayWeather` method
3. Style the new elements in CSS

### Modifying API Settings
In `script.js`, you can modify:
- Units (metric/imperial)
- Language settings
- API endpoint

## 🐛 Troubleshooting

### Common Issues

1. **"API key is invalid" error**
   - Check that you've correctly replaced the API key in `script.js`
   - Ensure your API key is active and has the necessary permissions

2. **"City not found" error**
   - Check the spelling of the city name
   - Try adding the country code (e.g., "London, UK")
   - Some cities may have different names in the API

3. **Network errors**
   - Check your internet connection
   - Ensure the OpenWeatherMap API is accessible
   - Try refreshing the page

4. **Weather data not displaying**
   - Check the browser console for JavaScript errors
   - Ensure all files are in the same directory
   - Verify that the API key is correctly configured

### Debug Mode
Open the browser's developer tools (F12) to see:
- Network requests to the API
- JavaScript console errors
- API response data

## 📄 API Documentation

For more information about the OpenWeatherMap API:
- [Current Weather Data API](https://openweathermap.org/api)
- [API Documentation](https://openweathermap.org/api/one-call-api)
- [Weather Icons](https://openweathermap.org/weather-conditions)

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the typography

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the browser console for errors
3. Verify your API key configuration
4. Ensure all files are properly loaded

---

**Happy Weather Checking! ☀️🌧️❄️** 