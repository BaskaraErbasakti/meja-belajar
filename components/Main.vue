<template>
  <div class="relatif">
    <img class="bendera" src="../assets/bendera.png" alt="flags">
    <div class="kartu">
      <div class="card">
        <img class="rounded" src="../assets/Upacara.jpg" alt="Upacara" width="340px" height="100%">
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
        <img class="rounded" src="../assets/Rapat.jpg" alt="Rapat" width="340px" height="100%">
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
        <img class="rounded" src="../assets/GNB.jpg" alt="GNB" width="340px" height="100%">
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
    <div class="karti">
      <div class="card">
        <img class="rounded" src="../assets/Jokowi.jpg" alt="Jokowi" width="340px" height="100%">
        <div class="pt-3 card-body text-center">
          <p class="pt-2 card-text">
            Pengeriman Pasukan Garuda Sebagai Misi Pedamaian PBB
          </p>
          <p>
            Pada tanggal 31 Agustus 2018
          </p>
        </div>
      </div>
      <div class="card">
        <img class="rounded" src="../assets/Asean.jpg" alt="Asean" width="340px" height="100%">
        <div class="pt-3 card-body text-center">
          <p class="pt-2 card-text">
            Kerjasama Indonesia dalam ASEAN SUMMIT
          </p>
          <p>
            Pada tanggal 23 Juni 2019
          </p>
        </div>
      </div>
      <div class="card">
        <img class="rounded" src="../assets/KTT.jpg" alt="KTT" width="340px" height="100%">
        <div class="pt-3 card-body text-center">
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
.relatif{
  position: relative;
}
.bendera {
  width: 100%;
  height: 890px;
  filter: blur(4px);
}
.kartu {
  display: flex;
  position: absolute;
  top: 5%;
  width: 90%;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
}
.karti {
  display: flex;
  position: absolute;
  top: 55%;
  width: 90%;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
}
p {
    margin: 0px;
}
.card {
    width: 340px;
    height: 100%;
    background: rgba(255, 255, 255, 0.6)
}
@media (max-width: 575.98px) {
  .bendera {
    height: 1300px;
  }
  .kartu {
    flex-direction: column;
    align-items: center;
  }
  .karti {
    display: none;
  }
  .card {
    margin-bottom: 50px;
  }
}
</style>
