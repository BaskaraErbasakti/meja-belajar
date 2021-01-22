<template>
  <div class="mt-4">
    <div class="judul container">
      <h1 class="title d-flex align-items-center">
        Tentang Kami
      </h1>
      <img class="mr-4" src="../assets/undraw_teacher_35j2.svg" alt="teacher" width="291px" height="158px">
    </div>
    <div class="lengkung kotak1 container pt-3">
      <div>
        <p class="par1 text-justify">
          Melihat situasi ditengah Pandemi, dimana tidak memungkinkan untuk belajar secara tatap muka, kami berniat memberikan model pembelajaran jarak jauh yang dapat diakses dengan mudah oleh siapa saja. Dibentuknya Meja Belajar ini, merupakan bentuk inovasi bari dalam belajar.
        </p>
        <p class="par2 text-justify">
          Kami berupaya mewujudkan satu tujuan : tetap dapat bersekolah dan belajar dimanapun dan kapanpun.
        </p>
      </div>
      <div>
        <p class="par1 text-justify mb-0">
          Kami berharap dengan adanya Meja Belajar ini dapat ikut berkontribusi secara positif bagi fokus pemerintah dibidang pendidikan, untuk mengembangkan kualitas sember daya manusia Indonesai, merdeka belajar, dan memberikan kesempatan yang sama kepada siapaun dan dimanapun untuk mendapatkan ilmu pengetahuan. Kami akan terus berusaha untuk mengembangkan dan meningkatkan kualitas materi kami demi mewujudkan
        </p>
        <p class="par2">
          #Indonesiaterusbelajar
        </p>
      </div>
    </div>
    <div class="lengkung kotak2 container mt-4 pt-3">
      <div class="pl-3 text-white par3">
        <h4>Yang Kamu dapatkan dengan belajar menggunakan Meja Belajar</h4>
      </div>
      <div class="lis mt-4">
        <div class="par1">
          <p>
            Mengenalkan konsep dan materi belajar dari setiap bab dengan lebih mudah.
          </p>
        </div>
        <div class="par1">
          <p>
            Memperdalam pemahaman materi di setiap babnya dan pengimplemantasiannya di kehidupan sehari-hari.
          </p>
        </div>
        <div class="par1">
          <p>
            Meningkatkan kemampuan berpikir kritis.
          </p>
        </div>
        <div class="par1">
          <p>
            Mempermudah dalam memahami materi dengan cara yang lebih menyenangkan.
          </p>
        </div>
      </div>
    </div>
    <div class="lengkung kotak3 container my-4 py-3 ">
      <h2 class="end text-center text-white">
        Mengembantumu Dalam Belajar Dapat Mengakses Materi, Dan Latihan Soal Sesuai Dengan Kurikulum Pendidikan Di Indonesia
      </h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
  font-family: Caveat Brush;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  color: #22A6B3;
}
.lengkung {
  border-radius: 30px;
}
.kotak1 {
  background-color: #F7F1E3;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;
}
.kotak2 {
  background-color: #60A3BC;
}
.kotak3 {
  background-color: #22A6B3;
}
.end {
  font-family: Caveat Brush;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
}
.lis {
  display: grid;
  grid-template-columns: 24% 24% 23% 24%;
  grid-column-gap: 2%;
}
.par1 {
  font-family: Delius;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #1E3799;
}
.par2 {
  font-family: Delius;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #1F95A1;
}
.par3 {
  font-family: Delius;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
}
.judul {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 575.98px) {
  .title {
    font-size: 60px;
    margin-left: 20px;
  }
  .kotak1 {
    display: flex;
    flex-wrap: wrap;
  }
  .lis {
    display: flex;
    flex-wrap: wrap;
  }
  .par1 {
    margin-left: 10px;
  }
  .judul {
    flex-direction: column;
    align-items: center;
  }
}
</style>
