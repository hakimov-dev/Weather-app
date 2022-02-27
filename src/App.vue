<template>
  <div class="app__wrap">
    <main>
      <section class="location">
        <div class="city">Tashkent, UZ</div>
        <div class="date">Monday, 22 September 2021</div>
      </section>
      <div class="main__temp">
        <div class="temp">8<span>°c</span></div>
        <div class="weather">Fog</div>
        <div class="hi__low">19°c / 24°c</div>
      </div>
    </main>
    <header>
      <div class="content">
        <input
          type="text"
          autocomplete="off"
          class="search__box"
          placeholder="Search..."
        />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'App'
}
  // created() {
    // const api = {
    // key: '4960890c24a17f0caac1583e7334bfc3',
    // baseurl: 'https://api.openweathermap.org/data/2.5/',
// }

// const searchBox = document.querySelector('.search__box');

// searchBox.addEventListener('keypress', setQuery)

// function setQuery(e) {
    // if (e.keyCode === 13) {
        // getResults(searchBox.value)
    // }
// }

// function getResults(query) {
    // fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        // .then(weather => {
            // return weather.json();
        // }).then(displayResult);
}

// function displayResult(weather) {
 
    // let city = document.querySelector(".location .city")
    // city.innerHTML = `${weather.name}, ${weather.sys.country}`


    // let now = new Date();
    // let date = document.querySelector('.location .date')
    // date.innerHTML = dateBuilder(now)

    // let temp = document.querySelector('.temp')
    // temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

    // let weatherEl = document.querySelector('.weather')
    // weatherEl.innerHTML = weather.weather[0].main

//  let hiLow = document.querySelector('.hi__low')
//  hiLow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

// }

// function dateBuilder(s) {
    // let months = [
        // 'January',
        // 'February',
        // 'March',
        // 'April',
        // 'May',
        // 'June',
        // 'July',
        // 'August',
        // 'September',
        // 'October',
        // 'November',
        // 'December'
    // ],
    // let days = [
        // 'Sunday',
        // 'Monday',
        // 'Tuesday',
        // 'Wednesday',
        // 'Thursday',
        // 'Friday',
        // 'Saturday'
    // ]
    // let day = days[s.getDay()]
    // let date = s.getDate()
    // let month = months[s.getMonth()]
    // let year = s.getFullYear()

    // return `${day} ${date} ${month} ${year}`
// }
  // },

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
  background-image: url(@/assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.app__wrap {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 6));
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 15px 15px;
}

header input {
  width: 100%;
  max-width: 280px;
  padding: 10px 15px;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px 0;
  border-bottom: 3px solid #df8e00;
  color: #333;
  font-size: 20px;
  font-weight: 300;
  transition: 0.2s ease-out;
}

header input:focus {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0 16px;
}

main {
  margin-top: 20vh;
  padding: 25px 25px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.location .city {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 5px;
}

.location .date {
  color: #fff;
  font-size: 16px;
}

.main__temp .temp {
  color: #fff;
  font-size: 100px;
  font-weight: 900;
  margin: 30px 0;
  text-shadow: 2px 10px rgba(0, 0, 0, 6);
}

.main__temp span {
  font-weight: 500;
}

.main__temp .weather {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 15px;
  text-shadow: 0px 3px rgba(0, 0, 0, 6);
}

.main__temp .hi__low {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  text-shadow: 0px 4px rgba(0, 0, 0, 6);
}

.input__content {
  font-size: 18px;
  line-height: 25px;
  margin-top: 10px;
  color: #fff;
  width: 100%;
  max-width: 260px;
  text-align: center;
}

.input__content strong {
  color: #0ff;
}

.admin {
  width: 100%;
  max-width: 160px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  align-items: center;
  color: #0ff;
  text-decoration: none;
  background: #000;
  padding: 10px;
  border-radius: 0 16px;
  border: 2px solid #0ff;
}

@media (max-width: 900px) {
  .app__wrap {
    grid-template-columns: 100%;
  }

  main {
    margin-top: 50px;
  }
}
</style>
