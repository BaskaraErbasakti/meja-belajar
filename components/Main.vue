<template>
  <div>
    <div class="bendera" />
    <div class="kartu col d-flex flex-wrap justify-content-around">
      <div class="card">
        <img class="rounded" src="../assets/Upacara.jpg" alt="Upacara">
        <div class="p-1 card-body text-center">
          <p class="card-text">
            Dikibarkanya Bendera Merah Putih di Gedung PBB
          </p>
          <p>
            Pada tanggal 28 September 1950
          </p>
        </div>
      </div>
      <div class="card">
        <img class="rounded" src="../assets/Rapat.jpg" alt="Rapat">
        <div class="pt-4 card-body text-center">
          <p class="card-text">
            Dibentuknya ASEAN dalam Deklarasi Bangkok
          </p>
          <p>
            Pada tanggal 08 Agustus 1967
          </p>
        </div>
      </div>
      <div class="card">
        <img class="rounded" src="../assets/GNB.jpg" alt="GNB">
        <div class="pt-4 card-body text-center">
          <p class="card-text">
            Para pemrakarsa GNB dalam Konferensi Beograd
          </p>
          <p>
            Pada September 1961
          </p>
        </div>
      </div>
    </div>
    <div class="karti col flex-wrap justify-content-around ">
      <div class="card">
        <img class="rounded" src="../assets/Jokowi.jpg" alt="Jokowi">
        <div class="pt-4 card-body text-center">
          <p class="pt-2 card-text">
            Pengeriman Pasukan Garuda Sebagai Misi Pedamaian PBB
          </p>
          <p>
            Pada tanggal 31 Agustus 2018
          </p>
        </div>
      </div>
      <div class="card">
        <img class="rounded" src="../assets/Asean.jpg" alt="Asean">
        <div class="pt-4 card-body text-center">
          <p class="pt-2 card-text">
            Kerjasama Indonesia dalam ASEAN SUMMIT
          </p>
          <p>
            Pada tanggal 23 Juni 2019
          </p>
        </div>
      </div>
      <div class="card">
        <img class="rounded" src="../assets/KTT.jpg" alt="KTT">
        <div class="pt-4 card-body text-center">
          <p class="pt-2 card-text">
            Pertemuan Tingkat Mentri Persiapan KTT GNB
          </p>
          <p>
            Pada tanggal 23-24 Oktober 2019
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bendera {
    background: url("../assets/bendera.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(4px);
    height: 55rem;
}
.kartu {
    position: absolute;
    top: 23%;
}
.karti {
    display: flex;
    position: absolute;
    top: 83%;
    height: 342px;
}
p {
    margin: 0px;
}
.card {
    width: 20rem;
    background: rgba(255, 255, 255, 0.6)
}
@media (max-width: 575.98px) {
  .bendera {
    height: 80rem;
  }
  .kartu {
    top: 15%;
  }
  .karti {
    display: none;
  }
  .card {
    margin-bottom: 50px;
  }
}
</style>
