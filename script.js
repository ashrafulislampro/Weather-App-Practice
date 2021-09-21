document.getElementById("search_btn").addEventListener("click", function () {
          const searchInput = document.getElementById("text_input").value;
          getWeatherData(searchInput);
})

// set value in the webpage
function getWeatherData(searchInput) {
          const apiKey = "22367c2bc90359d01d9dbb41e533596e";
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`)
                    .then(res => res.json())
                    .then(data => {
                              console.log(data);
                              const { main, weather, wind, name, sys } = data;
                              const temperature = Math.round(main.temp);

                              

                              document.getElementById("city_name").innerText = name;
                              document.getElementById("country_name").innerText = sys.country;
                              document.getElementById("temperature").innerText = temperature;
                              document.getElementById("min_temp").innerText = main.temp_min;
                              document.getElementById("max_temp").innerText = main.temp_max;
                              document.getElementById("description").innerText = weather[0].description;
                              
                    });
          document.getElementById("text_input").value = "";
}