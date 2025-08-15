// Weather App JavaScript
class WeatherApp {
    constructor() {
        this.apiKey = CONFIG.API_KEY;
        this.baseUrl = CONFIG.BASE_URL;
        this.iconBaseUrl = CONFIG.ICON_BASE_URL;
        this.units = CONFIG.UNITS;
        this.language = CONFIG.LANGUAGE;
        
        this.initializeElements();
        this.bindEvents();
        this.setupEnterKey();
    }

    initializeElements() {
        this.locationInput = document.getElementById('locationInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.weatherSection = document.getElementById('weatherSection');
        this.loading = document.getElementById('loading');
        this.weatherCard = document.getElementById('weatherCard');
        this.errorMessage = document.getElementById('errorMessage');
        this.errorText = document.getElementById('errorText');
        
        // Weather data elements
        this.cityName = document.getElementById('cityName');
        this.countryName = document.getElementById('countryName');
        this.dateTime = document.getElementById('dateTime');
        this.temperature = document.getElementById('temperature');
        this.weatherIcon = document.getElementById('weatherIcon');
        this.weatherDesc = document.getElementById('weatherDesc');
        this.feelsLike = document.getElementById('feelsLike');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.visibility = document.getElementById('visibility');
    }

    bindEvents() {
        this.searchBtn.addEventListener('click', () => this.getWeather());
        this.locationInput.addEventListener('input', () => this.clearError());
    }

    setupEnterKey() {
        this.locationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.getWeather();
            }
        });
    }

    async getWeather() {
        const location = this.locationInput.value.trim();
        
        if (!location) {
            this.showError('Please enter a city name');
            return;
        }

        this.showLoading();
        this.clearError();

        try {
            const weatherData = await this.fetchWeatherData(location);
            this.displayWeather(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.handleError(error);
        }
    }

    async fetchWeatherData(location) {
        const url = `${this.baseUrl}?q=${encodeURIComponent(location)}&appid=${this.apiKey}&units=${this.units}&lang=${this.language}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('API key is invalid. Please check your configuration.');
            } else {
                throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
            }
        }

        return await response.json();
    }

    displayWeather(data) {
        this.hideLoading();
        
        // Update location information
        this.cityName.textContent = data.name;
        this.countryName.textContent = data.sys.country;
        this.dateTime.textContent = this.formatDateTime(new Date());

        // Update main weather information
        this.temperature.textContent = Math.round(data.main.temp);
        this.weatherDesc.textContent = data.weather[0].description;
        
        // Update weather icon
        const iconCode = data.weather[0].icon;
        this.weatherIcon.src = `${this.iconBaseUrl}${iconCode}@2x.png`;
        this.weatherIcon.alt = data.weather[0].description;

        // Update weather details
        this.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
        this.humidity.textContent = `${data.main.humidity}%`;
        this.windSpeed.textContent = `${data.wind.speed} m/s`;
        
        // Convert visibility from meters to kilometers
        const visibilityKm = (data.visibility / 1000).toFixed(1);
        this.visibility.textContent = `${visibilityKm} km`;

        this.showWeatherCard();
    }

    formatDateTime(date) {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
    }

    showLoading() {
        this.loading.style.display = 'flex';
        this.weatherCard.style.display = 'none';
        this.errorMessage.style.display = 'none';
        this.searchBtn.disabled = true;
        this.searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    }

    hideLoading() {
        this.loading.style.display = 'none';
        this.searchBtn.disabled = false;
        this.searchBtn.innerHTML = '<i class="fas fa-search"></i> Search';
    }

    showWeatherCard() {
        this.weatherCard.style.display = 'block';
        this.weatherCard.classList.add('fade-in');
    }

    showError(message) {
        this.hideLoading();
        this.errorText.textContent = message;
        this.errorMessage.style.display = 'block';
        this.weatherCard.style.display = 'none';
    }

    clearError() {
        this.errorMessage.style.display = 'none';
    }

    handleError(error) {
        let errorMessage = 'An unexpected error occurred. Please try again.';
        
        if (error.message.includes('City not found')) {
            errorMessage = error.message;
        } else if (error.message.includes('API key')) {
            errorMessage = error.message;
        } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMessage = 'Network error. Please check your internet connection and try again.';
        } else if (error.message.includes('Failed to fetch')) {
            errorMessage = 'Unable to fetch weather data. Please try again later.';
        }
        
        this.showError(errorMessage);
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const weatherApp = new WeatherApp();
    
    // Add some nice touches
    const locationInput = document.getElementById('locationInput');
    
    // Auto-focus on input
    locationInput.focus();
    
    // Add placeholder animation
    const placeholders = [
        'Enter city name...',
        'e.g., London, UK',
        'e.g., New York, US',
        'e.g., Tokyo, Japan',
        'e.g., Paris, France'
    ];
    
    let placeholderIndex = 0;
    setInterval(() => {
        locationInput.placeholder = placeholders[placeholderIndex];
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
    }, 3000);
    
    // Add some visual feedback for successful searches
    const searchBtn = document.getElementById('searchBtn');
    const originalBtnText = searchBtn.innerHTML;
    
    // Add success animation
    function showSuccessAnimation() {
        searchBtn.innerHTML = '<i class="fas fa-check"></i> Found!';
        searchBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        
        setTimeout(() => {
            searchBtn.innerHTML = originalBtnText;
            searchBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }, 2000);
    }
    
    // Override the displayWeather method to show success animation
    const originalDisplayWeather = weatherApp.displayWeather;
    weatherApp.displayWeather = function(data) {
        originalDisplayWeather.call(this, data);
        showSuccessAnimation();
    };
    
    // Add smooth scrolling for better mobile experience
    const weatherSection = document.getElementById('weatherSection');
    
    // Scroll to weather section when data is displayed
    const originalShowWeatherCard = weatherApp.showWeatherCard;
    weatherApp.showWeatherCard = function() {
        originalShowWeatherCard.call(this);
        weatherSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    };
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('locationInput').blur();
        }
    });
    
    // Add touch feedback for mobile
    searchBtn.addEventListener('touchstart', () => {
        searchBtn.style.transform = 'scale(0.95)';
    });
    
    searchBtn.addEventListener('touchend', () => {
        searchBtn.style.transform = 'scale(1)';
    });
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WeatherApp;
} 