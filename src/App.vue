<template>
  <div class="app__wrap">
    <main>
      <section v-if="this.city" class="location">
        <div class="city">{{ this.city }}, {{ this.country }}</div>
        <div class="date">{{ this.date }}</div>
      </section>
      <div v-if="this.city" class="main__temp">
        <div class="temp">{{ this.temp }}<span>°c</span></div>
        <div class="weather">{{ this.weather }}</div>
        <div class="hi__low">{{ this.hi__low }}</div>
      </div>
      <!-- Loader -->
      <div class="loader" v-else>
        <div class="loader loader--style6" title="5">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="24px"
            height="30px"
            viewBox="0 0 24 30"
            style="enable-background: new 0 0 50 50"
            xml:space="preserve"
          >
            <rect x="0" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="10" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="20" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
        <br>
        <h2>Loading...</h2>
      </div>
    </main>
    <header>
      <div class="content">
        <input
          type="text"
          autocomplete="off"
          class="search__box"
          placeholder="Search..."
          v-model.trim="searchValue"
          @keypress.enter="searchCity"
        />
      </div>
    </header>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      baseAPI: {
        key: '4960890c24a17f0caac1583e7334bfc3',
        baseurl: 'https://api.openweathermap.org/data/2.5/'
      },
      searchValue: '',
      city: '',
      country: '',
      date: '',
      temp: '',
      weather: '',
      hi__low: ''
    }
  },
  methods: {
    searchCity () {
      axios.get(`${this.baseAPI.baseurl}weather?q=${this.searchValue}&units=metric&APPID=${this.baseAPI.key}`)
        .then(response => {
          console.log(response.data)
          const { data } = response
          this.city = data.name
          this.country = data.sys.country
          const date = new Date()
          this.date = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
          this.temp = Math.round(data.main.temp)
          this.weather = data.weather[0].main
          this.hi__low = `${Math.round(data.main.temp_max)}°c / ${Math.round(data.main.temp_min)}°c`
        }).catch(e => {
          console.log(e)
        })
    }
  },
  async created () {
    const { data } = await this.$store.dispatch('getIpAddress')

    axios.get(`https://ipapi.co/${data.ip}/json/`)
      .then(res => {
        axios.get(`${this.baseAPI.baseurl}weather?q=${res.data.country_capital}&units=metric&APPID=${this.baseAPI.key}`)
          .then(response => {
            const { data } = response
            this.city = data.name
            this.country = data.sys.country
            const date = new Date()
            this.date = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
            this.temp = Math.round(data.main.temp)
            this.weather = data.weather[0].main
            this.hi__low = `${Math.round(data.main.temp_max)}°c / ${Math.round(data.main.temp_min)}°c`
          }).catch(e => {
            console.log(e)
          })
      }).catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
svg path,
svg rect{
  fill: #fff;
}

.loader{
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  margin: 0 auto;
  text-align: center;
  padding: 1em;
  vertical-align: top;
  color: #fff;
}

.loader h2{
  color: #fff;
  position: absolute;
  left: 22%
}
</style>
