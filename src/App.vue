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
        }).catch(e => {
          console.log(e)
        })
    }
  },
  created () {

  }
}
</script>

<style scoped>
</style>
