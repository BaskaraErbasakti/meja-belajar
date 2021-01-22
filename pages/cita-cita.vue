<template>
  <div class="kotak d-flex flex-column">
    <div class="kotak-1 d-flex">
      <div>
        <h1 class="cita d-flex justify-content-center">
          Cita-Cita
        </h1>
        <p class="parap">
          Cita-cita atau harapan adalah kunci yang akan kamu capai di masa depan. Cita-cita mu dapat memberikan motifasi diri sehingga setiap sikap, perilaku dan tindakanmu dapat diusahakan demi mencapai cita-citamu di kemudian hari <span class="kuning">#JanganTakutBermimipi.</span>
        </p>
        <p class="parap">
          Tetap fokus pada tujuan mu dan raihlah cita-cita terbesarmu, motifasi terbesar adalah dirimu sendiri. <span class="kuning">Aku bisa, Pasti Bisa, Selalu Bisa.</span>
        </p>
      </div>
      <div>
        <img class="finish" src="../assets/undraw_finish_line_katerina_limpitsouni_xy20.svg" alt="finish-line" width="539px;" height="359px;">
      </div>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h3 class="isian">
        Tulislah cita-cita mu dan raihlah mimpimu
      </h3>
      <div>
        <textarea
          id="cita"
          class="kolom border-0"
          cols="30"
          rows="10"
          maxlength="100"
        />
      </div>
      <button class="kirim border-0">
        Kirim
      </button>
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
.kuning {
    color: #F6D03E;
}
.cita {
    font-family: Caveat Brush;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    color: #1F95A1;
}
.parap {
    font-family: Delius;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #1E3799;
}
.isian {
    font-family: Delius;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #1F95A1;
    margin-top: 5rem;
}
.kolom {
    width: 573px;
    height: 241px;
    background-color: #FFFCF4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 12px 20px;
    font-size: 1.5rem;
}
.kirim {
    background-color: #1F95A1;
    color: #FFFCF4;
    width: 173px;
    height: 64px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-family: Delius;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    margin-top: 2.5rem;
}
@media (max-width: 575.98px) {
  .kotak-1 {
    flex-wrap: wrap;
  }
  .kotak {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .cita {
    font-size: 50px;
  }
  .parap {
    font-size: 20px;
  }
  .finish {
    height: auto;
    width: 300px;
  }
  .kolom {
    height: 230px;
    width: 300px;
  }
  .kirim {
    font-size: 25px;
    height: 50px;
    width: 150px;
  }
}
</style>
