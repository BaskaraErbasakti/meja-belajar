<template>
  <div class="container p-2">
    <div class="top p-2">
      <h1 class="ijo">
        Soal no 1
      </h1>
    </div>
    <div class="mt-3">
      <p>Hubungan yang bersifat global yang mencakup semua hubungan yang terjadi dengan melampaui batas ketatanegaraan adalah pengertian dari …</p>
    </div>
    <div class="mt-4">
      <button class="pilih d-flex align-items-center container" :disabled="isDisabled" :style="{backgroundColor : warna.a}" @click="salah('a')">
        <h1 class="abjad d-flex justify-content-center align-items-center">
          A
        </h1>
        <p class="kalimat d-flex align-items-center" :style="{color : warni.a}">
          Kerjasama Internasional
        </p>
      </button>
    </div>
    <div class="mt-4">
      <button class="pilih d-flex align-items-center container" :disabled="isDisabled" :style="{backgroundColor : warna.b}" @click="benar('b')">
        <h1 class="abjad d-flex justify-content-center align-items-center">
          B
        </h1>
        <p class="kalimat d-flex align-items-center" :style="{color : warni.b}">
          Hubungan Internasional
        </p>
      </button>
    </div>
    <div class="mt-4">
      <button class="pilih d-flex align-items-center container" :disabled="isDisabled" :style="{backgroundColor : warna.c}" @click="salah('c')">
        <h1 class="abjad d-flex justify-content-center align-items-center">
          C
        </h1>
        <p class="kalimat d-flex align-items-center" :style="{color : warni.c}">
          Hubungan Diplomatik
        </p>
      </button>
    </div>
    <div class="mt-4">
      <button class="pilih d-flex align-items-center container" :disabled="isDisabled" :style="{backgroundColor : warna.d}" @click="salah('d')">
        <h1 class="abjad d-flex justify-content-center align-items-center">
          D
        </h1>
        <p class="kalimat d-flex align-items-center" :style="{color : warni.d}">
          Hubungan Luar Negeri
        </p>
      </button>
    </div>
    <div class="mt-4">
      <button class="pilih d-flex align-items-center container" :style="{backgroundColor : warna.e}" :disabled="isDisabled" @click="salah('e')">
        <h1 class="abjad d-flex justify-content-center align-items-center">
          E
        </h1>
        <p class="kalimat d-flex align-items-center" :style="{color : warni.e}">
          Politik Luar Negeri
        </p>
      </button>
    </div>
    <div class="hilang justify-content-end mt-4 mb-4" :style="{display : lanjut}">
      <NuxtLink to="/soal/2" class="next">
        <h2 class="neks">
          Selanjutnya
        </h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nomor',
  data () {
    return {
      lanjut: 'none',
      pilih: true,
      warna: {
        a: '#DFF9FB',
        b: '#DFF9FB',
        c: '#DFF9FB',
        d: '#DFF9FB',
        e: '#DFF9FB'
      },
      warni: {
        a: '#000000',
        b: '#000000',
        c: '#000000',
        d: '#000000',
        e: '#000000'
      }
    }
  },
  computed: {
    isDisabled () {
      return !this.pilih
    }
  },
  mounted () {
    const benar = Number(localStorage.benar)
    const salah = Number(localStorage.salah)
    if (benar + salah >= 1) {
      alert('Maaf terjadi error')
      this.$router.push('/latihan-soal')
    }
  },
  methods: {
    salah (x) {
      this.warna[x] = '#FB4646'
      this.warni[x] = '#FFFFFF'
      this.pilih = false
      this.lanjut = 'flex'
      localStorage.salah = Number(localStorage.salah) + 1
    },
    benar (x) {
      this.warna[x] = '#1FA18A'
      this.warni[x] = '#FFFFFF'
      this.pilih = false
      this.lanjut = 'flex'
      localStorage.benar = Number(localStorage.benar) + 1
    }
  }
}
</script>

<style scoped>
.top {
    background-color: #DFF9FB;
}
.ijo {
    color: #22A6B3;
}
p {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
}
.pilih {
  background-color: #DFF9FB;
  border: transparent;
  border-radius: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
}
.abjad {
  background-color: #BBF4FA;
  color: #1F95A1;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  margin: 10px
}
.kalimat {
  margin: 0px 20px
}
.hilang {
  display: none;
}
.next {
  background-color: #22A6B3;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 10px;
}
.neks {
  color: white;
}
@media (max-width: 575.98px) {
  p {
    font-size: 20px;
  }
  h1 {
    font-size: 35px;
  }
  .abjad {
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 50%;
  }
  h2 {
    font-size: 20px;
  }
  .hilang {
    margin-right: 20px;
  }
}
</style>
