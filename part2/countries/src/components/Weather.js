import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
	const api_key = process.env.REACT_APP_WEATHER_API_KEY

	const [weather, setWeather] = useState({})

	const getWeatherData = () => {
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`)
			.then(response => {
				console.log(response.data)
				setWeather(response.data)
			})
	}
	
	useEffect(getWeatherData, [])

	if (Object.keys(weather).length !== 0) {
		return (
			<div>
				<h2>Weather in {country.capital}</h2>
				<div>temperature {weather.main.temp} Celsius</div>
				<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width='150' height='150' />
				<div>wind {weather.wind.speed} m/s</div>
			</div>
		)
	}
}

export default Weather
