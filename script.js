
const WMOCodes = {
	"0":{
		"day":{
			"description":"Sunny",
			"image":"http://openweathermap.org/img/wn/01d@2x.png"
		},
		"night":{
			"description":"Clear",
			"image":"http://openweathermap.org/img/wn/01n@2x.png"
		}
	},
	"1":{
		"day":{
			"description":"Mainly Sunny",
			"image":"http://openweathermap.org/img/wn/01d@2x.png"
		},
		"night":{
			"description":"Mainly Clear",
			"image":"http://openweathermap.org/img/wn/01n@2x.png"
		}
	},
	"2":{
		"day":{
			"description":"Partly Cloudy",
			"image":"http://openweathermap.org/img/wn/02d@2x.png"
		},
		"night":{
			"description":"Partly Cloudy",
			"image":"http://openweathermap.org/img/wn/02n@2x.png"
		}
	},
	"3":{
		"day":{
			"description":"Cloudy",
			"image":"http://openweathermap.org/img/wn/03d@2x.png"
		},
		"night":{
			"description":"Cloudy",
			"image":"http://openweathermap.org/img/wn/03n@2x.png"
		}
	},
	"45":{
		"day":{
			"description":"Foggy",
			"image":"http://openweathermap.org/img/wn/50d@2x.png"
		},
		"night":{
			"description":"Foggy",
			"image":"http://openweathermap.org/img/wn/50n@2x.png"
		}
	},
	"48":{
		"day":{
			"description":"Rime Fog",
			"image":"http://openweathermap.org/img/wn/50d@2x.png"
		},
		"night":{
			"description":"Rime Fog",
			"image":"http://openweathermap.org/img/wn/50n@2x.png"
		}
	},
	"51":{
		"day":{
			"description":"Light Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"53":{
		"day":{
			"description":"Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"55":{
		"day":{
			"description":"Heavy Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Heavy Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"56":{
		"day":{
			"description":"Light Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"57":{
		"day":{
			"description":"Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"61":{
		"day":{
			"description":"Light Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Light Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"63":{
		"day":{
			"description":"Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"65":{
		"day":{
			"description":"Heavy Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Heavy Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"66":{
		"day":{
			"description":"Light Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Light Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"67":{
		"day":{
			"description":"Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"71":{
		"day":{
			"description":"Light Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Light Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"73":{
		"day":{
			"description":"Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"75":{
		"day":{
			"description":"Heavy Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Heavy Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"77":{
		"day":{
			"description":"Snow Grains",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow Grains",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"80":{
		"day":{
			"description":"Light Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"81":{
		"day":{
			"description":"Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"82":{
		"day":{
			"description":"Heavy Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Heavy Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"85":{
		"day":{
			"description":"Light Snow Showers",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Light Snow Showers",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"86":{
		"day":{
			"description":"Snow Showers",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow Showers",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"95":{
		"day":{
			"description":"Thunderstorm",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Thunderstorm",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	},
	"96":{
		"day":{
			"description":"Light Thunderstorms With Hail",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Light Thunderstorms With Hail",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	},
	"99":{
		"day":{
			"description":"Thunderstorm With Hail",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Thunderstorm With Hail",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	}
}

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const userCityInput = document.getElementById("user-city-input")

async function getGeoData(inputData){
	const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name="+inputData+"&count=10&language=en&format=json")
	const city = await response.json()

	return city.results[0]

}

async function getWeatherData(longitude, latitude){
	const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&current=temperature_2m,weather_code&hourly=temperature_2m,rain,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum")
	const weatherData = await response.json()
	console.log(weatherData);

	return weatherData
}

async function startWeatherApp(){
	const userInput = document.getElementById("user-city").value
	const geoData = await getGeoData(userInput)
	const weatherData = await getWeatherData(geoData.longitude, geoData.latitude)
	
	createCardElements(weatherData)
}

async function createCardElements(weather){
	let arrayList = 0
	const mainDiv = document.createElement("div")
	mainDiv.id = "main_div"
	
	for (let i = 0; i <= 6; i++) {
		const selectedDiv = document.createElement("div")
		const escapeButton = document.createElement("button")
		const article = document.createElement("article")
		const date = document.createElement("h4")
		const image = document.createElement("img")
		const weatherName = document.createElement("p")
		const maxTemp = document.createElement("p")
		const minTemp = document.createElement("p")
		for (let j = 0; j <= 23 ; j++) {
			const hourArticle = document.createElement("article")
			const hourlyRain = document.createElement("p")
			const hourlyTemp = document.createElement("p")
			const hourlyWeatherCode = document.createElement("img")
			const hour = document.createElement("h5")
			hourlyRain.innerHTML = "rain: "+weather.hourly.rain[arrayList] + weather.hourly_units.rain
			hourlyTemp.innerHTML = weather.hourly.temperature_2m[arrayList] + weather.hourly_units.temperature_2m
			if (j > 5 || j < 18 ) {
				hourlyWeatherCode.src = WMOCodes[weather.hourly.weather_code[arrayList]].day.image
			} else {
				hourlyWeatherCode.src = WMOCodes[weather.hourly.weather_code[arrayList]].night.image
			}
			hour.textContent = j+ ":00"
			hourArticle.append(hour, hourlyWeatherCode,hourlyTemp,hourlyRain)
			selectedDiv.append(hourArticle)
			arrayList++ 
		}
		if (i===0) {
			date.textContent = "Today"
			selectedDiv.className = "selected_div Today"
		}else{
			const day = new Date(weather.daily.time[i])
			date.textContent = daysOfTheWeek[day.getDay()]
			selectedDiv.className = "selected_div "+daysOfTheWeek[day.getDay()]
		}
		escapeButton.textContent = "X"
		date.className = "date"
		image.src = WMOCodes[weather.daily.weather_code[i]].day.image
		weatherName.textContent = WMOCodes[weather.daily.weather_code[i]].day.description
		weatherName.className = "weather-name"
		maxTemp.className = minTemp.className = "temperature"
		maxTemp.innerHTML = "max<br>" + weather.daily.temperature_2m_max[i] + "°C"
		minTemp.innerHTML = "min<br>" + weather.daily.temperature_2m_min[i] + "°C"
		article.append(date, image, weatherName, maxTemp, minTemp)
		article.addEventListener("click", (event) =>{
			mainDiv.style.display = "none"
			selectedDiv.style.display = "flex"
		})
		escapeButton.addEventListener("click", (event) =>{
			mainDiv.style.display = "flex"
			selectedDiv.style.display = "none"
		})
		selectedDiv.append(escapeButton)
		mainDiv.append(article)
		document.body.children[1].children[1].append(selectedDiv)
	}
	document.body.children[1].children[1].append(mainDiv)
}

async function displayCityName(){
	const userInput = document.getElementById("user-city").value
	const geo = await getGeoData(userInput)
	const cityName = document.createElement("h2")
    cityName.textContent = geo.name + ", " + geo.country
    document.body.children[1].children[1].append(cityName)
}

async function tempNow(){
	const userInput = document.getElementById("user-city").value
	const geo = await getGeoData(userInput)
	const weather = await getWeatherData(geo.longitude, geo.latitude)

	const currentTempCard = document.createElement("div")
	const currentTempWeatherData = document.createElement("img")
	const currentTemp = document.createElement("section")
	currentTempWeatherData.src = WMOCodes[weather.current.weather_code].day.image
	currentTemp.innerHTML = "<p>Current temperature in "+geo.name+":</p><h3>"+weather.current.temperature_2m + weather.current_units.temperature_2m+"</h3>"
	currentTempCard.id = "current_temp_card"
	currentTempCard.append(currentTempWeatherData)
	currentTempCard.append(currentTemp)
	document.body.children[1].children[1].append(currentTempCard)
}
async function clearCity(){
	const toBeCleared = document.body.children[1].children[1]

	while (toBeCleared.lastChild) {
		toBeCleared.removeChild(toBeCleared.lastChild)
	}
}


userCityInput.addEventListener("submit", (event) => {
	event.preventDefault()
	clearCity()
	displayCityName()
	tempNow()
	startWeatherApp()
})

userCityInput.addEventListener("keyup", (event)=>{
	if (event.target.value) {
		document.querySelector("label").style.display = "none"
	} else{
		document.querySelector("label").style.display = "inline"
	}
})