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
  name: 'App',
  data () {
    return {
      baseAPI: {
        key: '4960890c24a17f0caac1583e7334bfc3',
        baseurl: 'https://api.openweathermap.org/data/2.5/'
      },
      searchValue: ''
    }
  },
  created () {

  }
}
</script>

<style scoped>
</style>
