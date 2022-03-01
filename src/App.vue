<template>
  <div class="app__wrap">
    <main>
      <section class="location">
        <div class="city">{{this.city}}, {{this.country}}</div>
        <div class="date">{{this.date}}</div>
      </section>
      <div class="main__temp">
        <div class="temp">{{this.temp}}<span>°c</span></div>
        <div class="weather">{{this.weather}}</div>
        <div class="hi__low">{{this.hi__low}}</div>
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

    axios.get('url')
      .then(res => {

      }).catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
</style>
