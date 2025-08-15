// Weather App Configuration
// Replace the API key below with your OpenWeatherMap API key

const CONFIG = {
    // OpenWeatherMap API Configuration
    API_KEY: '5bf744cd6ebdffe5c589c56e2a963da9',
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    ICON_BASE_URL: 'https://openweathermap.org/img/wn/',
    
    // API Settings
    UNITS: 'metric',
    LANGUAGE: 'en',
    
    // App Settings
    DEFAULT_CITY: '', // Leave empty for no default city
    AUTO_FOCUS: true, // Auto-focus on input field
    ANIMATIONS: true, // Enable/disable animations
    
    // UI Settings
    THEME: {
        PRIMARY_COLOR: '#667eea',
        SECONDARY_COLOR: '#764ba2',
        SUCCESS_COLOR: '#28a745',
        ERROR_COLOR: '#dc3545'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 