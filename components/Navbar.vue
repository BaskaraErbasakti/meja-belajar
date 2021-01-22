<template>
  <div class="ijo">
    <div class="d-flex justify-content-between align-items-end pt-2 garis">
      <h1 class="title">
        Meja Belajar
      </h1>
      <div class="d-flex m-0">
        <NuxtLink class="masuk" to="/masuk">
          <div>
            <h2>Masuk</h2>
          </div>
        </NuxtLink>
        <button class="menu" @click="sidebar_open()">
          <img src="../assets/menu.png" alt="menu" width="30px" height="30px">
        </button>
      </div>
    </div>
    <div class="ilang">
      <NuxtLink to="/" class="text-white">
        <h3>Awal</h3>
      </NuxtLink>
      <NuxtLink to="/tentang-kami" class="text-white">
        <h3>Tentang Kami</h3>
      </NuxtLink>
      <NuxtLink to="/materi-ajar" class="text-white">
        <h3>Materi Ajar</h3>
      </NuxtLink>
      <NuxtLink to="/latihan-soal" class="text-white">
        <h3>Latihan Soal</h3>
      </NuxtLink>
      <NuxtLink to="/guru" class="text-white">
        <h3>Guru</h3>
      </NuxtLink>
    </div>

    <div class="sidenav" :style="{width : (display ? '0' : '100%')}">
      <a href="javascript:void(0)" class="closebtn" @click="sidebar_open()">&times;</a>
      <div class="d-flex flex-column align-items-center">
        <button class="side-a" @click="menuju('/')">
          <h3>Awal</h3>
        </button>
        <button class="side-a" @click="menuju('/tentang-kami')">
          <h3>Tentang Kami</h3>
        </button>
        <button class="side-a" @click="menuju('/materi-ajar')">
          <h3>Materi Ajar</h3>
        </button>
        <button class="side-a" @click="menuju('/latihan-soal')">
          <h3>Latihan Soal</h3>
        </button>
        <button class="side-a" @click="menuju('/guru')">
          <h3>Guru</h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      display: true
    }
  },
  methods: {
    sidebar_open () {
      this.display = !this.display
    },
    menuju (x) {
      this.display = true
      this.$router.push(x)
    }
  }
}
</script>

<style scoped>
.ijo {
  background-color: #22A6B3;
}
.garis {
  border-bottom: 5px solid #F9CA24;
}

.menu {
  display: none;
}
.title {
  font-family: Ramabhadra;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 0%;
  color: white;
}
.masuk{
  margin-right: 90px;
  margin-bottom: 0%;
  color: #F9CA24;
}
.ilang {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  margin-bottom: 15px;
}
.kanan {
  background-color: #22A6B3;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #22A6B3;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #F9CA24;
}
a:hover{
  text-decoration: none;
}
.side-a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #F9CA24;
  display: block;
  transition: 0.3s;
  background-color: transparent;
  border-style: none;
}

@media (max-width: 575.98px) {
  .ilang {
    display: none;
  }
  .title {
    margin-bottom: 4px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 25px;
    margin-bottom: 5%;
  }
  .masuk {
    margin: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    background-color: transparent;
    border-style: none;
  }
}
</style>
