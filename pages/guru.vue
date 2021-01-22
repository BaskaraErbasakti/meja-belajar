<template>
  <div class="kotak d-flex">
    <div>
      <h1 class="hai">
        Hai,
      </h1>
      <h2 class="sub">
        Bagaimana pembelajaran menggunakan Meja Belajar?
      </h2>
      <p class="parap">
        Perkenalkan nama saya <span class="name">Eva Dwi Anitasari</span>, saya adalah mahasiwa semester akhir di Universitas Ivet Semarang. Saya adalah mahasiswa jurusan program studi PPKn yang berusaha mengembangkan media pembelajaran yang baru dan lebih menarik khususnya pada mata pelajaran PPKn.
      </p>
      <p class="parap">
        Dengan berkembangnya teknologi pada masa ini, saya berharap pendidikan juga turut berkembang bersama teknologi. Dengan kemudahan yang diberikan suatu teknologi tentunya memberikan peluang besar bagi siapapun untuk dapat mengakses pendidikan yang layak dengan mudah.
      </p>
    </div>
    <div>
      <img class="eva" src="../assets/guru-eva.png" alt="eva" width=" 363px;" height="537px;">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.kotak {
    margin-left: 4rem;
    margin-top: 3rem;
    margin-right: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
}
.hai {
    font-family: Ramabhadra;
    font-style: normal;
    font-weight: normal;
    font-size: 6rem;
    color: #1F95A1;
}
.sub {
    font-family: Ramabhadra;
    font-style: normal;
    font-weight: normal;
    font-size: 2.25rem;
}
.parap{
    font-family: Ramabhadra;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
}
.name{
    color: teal;
}
@media (max-width: 575.98px) {
  .kotak {
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
    margin-top: 10px;
    margin-right: 0px;
  }
  .hai {
    font-size: 3rem;
  }
  .sub {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  .parap {
    text-align: center;
    font-size: 1.25rem;
  }
  .eva {
    width: 250px;
    height: auto;
  }
}
</style>
