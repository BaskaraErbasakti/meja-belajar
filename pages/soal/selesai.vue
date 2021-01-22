<template>
  <div class="back container">
    <div class="d-flex flex-column align-items-center">
      <h2 class="template">
        Nilai yang kamu dapatkan
      </h2>
      <h1 class="angka">
        {{ nilai }}
      </h1>
      <p class="ket">
        "{{ keterangan }}"
      </p>
    </div>
    <div class="d-flex justify-content-between">
      <NuxtLink to="/" class="keluar d-flex justify-content-center align-items-center">
        Keluar
      </NuxtLink>
      <NuxtLink to="/latihan-soal" class="ulang d-flex justify-content-center align-items-center">
        Ulang
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nomor',
  data () {
    return {
      nilai: null,
      keterangan: null
    }
  },
  mounted () {
    this.nilai = Number(localStorage.benar) * 10
    if (this.nilai >= 80) {
      this.keterangan = 'Kamu sudah menguasai seluruh materi'
    } else if (this.nilai >= 60) {
      this.keterangan = 'Kamu hampir menguasai materi'
    } else if (this.nilai >= 30) {
      this.keterangan = 'Kamu perlu mengulang materi'
    } else {
      this.keterangan = 'Kamu harus belajar dari awal'
    }
  }
}
</script>

<style scoped>
.back {
  margin-top: 20px;
  background-color: #DFF9FB;
}
.template {
  font-family: Caveat Brush;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  color:  #1F95A1;
}
.angka {
  font-family: Delius;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  color:  #1F95A1;
}
.ket {
  font-family: Delius;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
}
.keluar {
  margin-top: 100px;
  margin-left: 100px;
  margin-bottom: 50px;
  width: 181px;
  height: 67px;
  background-color: #1F95A1;
  color: white;
  border-radius: 15px;
  font-family: Delius;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
}
.ulang {
  margin-top: 100px;
  margin-right: 100px;
  margin-bottom: 50px;
  width: 181px;
  height: 67px;
  background-color: #1F95A1;
  color: white;
  border-radius: 15px;
  font-family: Delius;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
}
.ulang:hover {
  text-decoration: none;
  background-color: #62b4bd;
}
.keluar:hover {
  text-decoration: none;
  background-color: #62b4bd;
}
@media (max-width: 575.98px) {
  .template {
    font-size: 35px;
    text-align: center;
  }
  .back {
    margin-top: 0px;
    padding-top: 50px;
  }
  .angka {
    font-size: 100px;
  }
  .ket {
    font-size: 20px;
    text-align: center;
  }
  .keluar {
    font-size: 20px;
    height: 50px;
    width: 100px;
    margin-left: 0px;
  }
  .ulang {
    font-size: 20px;
    height: 50px;
    width: 100px;
    margin-right: 0px;
  }
}
</style>
