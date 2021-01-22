<template>
  <div class="container spasi2">
    <div class="d-flex justify-content-center">
      <h1 class="judul">
        Petunjuk Mengerjakan Latihan Soal
      </h1>
    </div>
    <div class="spasi2 poin container">
      <div>
        <h3 class="my-3">
          1. Pilihlah jawaban yang paling benar dengan cara klik jawaban yang kamu pilih.
        </h3>
        <h3 class="my-3">
          2. Baca dengan cermat pernyataan yang diberikan sebelum menjawab.
        </h3>
        <h3 class="my-3">
          3.  Sebelum melanjutkan ke pertanyaan selanjutnya, kamu masih bisa mengubah pilihanmu.
        </h3>
        <h3 class="my-3">
          4. Selamat mengerjakan.
        </h3>
        <NuxtLink to="/soal/1">
          <div class="d-flex justify-content-center mt-4" @click="reset">
            <button class="tombol border-0 mt-4">
              Mulai
            </button>
          </div>
        </NuxtLink>
      </div>
      <div>
        <img class="exam" src="../assets/undraw_exams_g4ow.svg" alt="exams" width="520px;" height="425px;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reset () {
      localStorage.clear()
      localStorage.setItem('benar', 0)
      localStorage.setItem('salah', 0)
    }
  }
}
</script>

<style scoped>
.judul {
  font-family: Caveat Brush;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  color: #22A6B3;
}
.tombol {
  width: 250px;
  height: 69px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #1F95A1;
  border-radius: 15px;
  font-family: Ramabhadra;
  font-size: 30px;
  color: #FFFFFF;
}
.poin {
  display: flex;
}
@media (max-width: 575.98px) {
  .poin {
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .exam {
    width: 315px;
  }
  .judul {
    font-size: 40px;
  }
  h3 {
    font-size: 20px;
  }
}
</style>
