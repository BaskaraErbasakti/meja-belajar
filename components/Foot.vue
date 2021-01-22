<template>
  <div>
    <div class="footer">
      <div class="mli d-flex flex-column justify-content-center align-items-center">
        <h3 class="cita">
          Kejar Mimpimu dan
        </h3>
        <h3 class="cita">
          Railah Cita-cita Mu
        </h3>
        <p>tulisakan cita-cita yang ingin kamu capai</p>
        <NuxtLink to="/cita-cita">
          <button class="rounded-pill mt-4 border-0">
            <h2 class="mx-4 green ">
              Tulis di sini
            </h2>
          </button>
        </NuxtLink>
      </div>
      <div>
        <img class="winners" src="../assets/undraw_winners_ao2o.svg" alt="winners" width="769px" height="440px">
      </div>
    </div>
    <div class="spirit container text-center">
      <h2 class="quote">
        Belajar lebih mudah
      </h2>
      <h2 class="quote">
        Dapat dilakukan, kapan saja dan dimana saja
      </h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
button {
  background: #DEE9EF;
}

.winners {
  margin-top: 80px;
  margin-left: 80px;
}
.spirit{
  margin-top: 100px;
}
.quote {
  font-family: Caveat Brush;
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  color: #1F95A1;
}
.cita {
  font-family: Delius;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  color: #FBC661;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.mli {
  margin-right: 30px;
  margin-left: 160px;
}
.green {
  color: #22A6B3;
}
.footer {
  display: flex;
}
@media (max-width: 575.98px) {
  .mli {
    margin-left: 40px;
    margin-top: 30px;
  }
  .cita {
    font-size: 30px;
  }
  .winners {
    margin-top: 20px;
    margin-left: 25px;
    width: 320px;
    height: 190px;
  }
  .quote {
    font-size: 40px;
  }
  .spirit {
    margin-top: 20px;
  }
  .footer {
    flex-direction: column;
    text-align: center;
  }
}
</style>
