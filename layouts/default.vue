<template>
  <div :class="background ? 'hijau' : 'putih'">
    <Navbar />
    <Nuxt />
    <div class="spasi container d-flex justify-content-center pb-4">
      <p class="text-center">
        Made with️❤️in SMG © 2021. App icon by <span><a target="_blank" href="https://icons8.com">Icons8</a></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      background: true
    }
  },
  watch: {
    $route (to, from) {
      if (this.$route.path === '/masuk' || this.$route.path === '/guru' || this.$route.path === '/cita-cita') {
        this.background = false
      } else {
        this.background = true
      }
    }
  },
  created () {
    if (this.$route.path === '/masuk' || this.$route.path === '/guru' || this.$route.path === '/cita-cita') {
      this.background = false
    }
  }
}
</script>

<style>
.hijau {
  background: linear-gradient(180deg, #7ED6DF 81.77%, #FFFFFF 100%);
}
.putih {
  background: linear-gradient(180deg, #DFF9FB 78.65%, #7ED7DF 100%);
}
.spasi {
  margin-top: 7rem;
}
.spasi1 {
  margin-top: 100px;
}
.spasi2 {
    margin-top: 40px;
}
@media (max-width: 575.98px) {
  .spasi1 {
    margin-top: 40px;
  }
}
</style>
