<template>
  <div class="spasi1 wadah container ">
    <div class="confirm">
      <img src="../assets/undraw_confirmed_81ex.svg" alt="confirmed" height="518px" width="494px">
    </div>
    <div>
      <h1 class="title">
        Masukkan Identitasmu
      </h1>
      <form class="spasi2">
        <div class="form-group d-flex flex-column">
          <label class="labeling" for="nama">Nama mu</label>
          <input id="nama" class="kotak border-0 pl-3" type="text">
        </div>
        <div class="form-group d-flex flex-column">
          <label class="labeling" for="umur">Umur mu</label>
          <input id="umur" class="kotak border-0 pl-3" type="text">
        </div>
        <div class="form-group d-flex flex-column">
          <label class="labeling" for="kelamin">Jenis Kelamin</label>
          <div class="d-flex justify-content-around">
            <label class="containers">Laki-laki
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark" />
            </label>
            <label class="containers">Perempuan
              <input type="radio" name="radio">
              <span class="checkmark" />
            </label>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button class="tombol border-0">
            Masuk
          </button>
        </div>
      </form>
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
    font-size: 64px;
    color: #22A6B3;
}
.labeling{
    font-family: Delius;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #F9CA24;
}
.kotak {
    background-color: #BBF4FA;
    border-radius: 25px;
    height: 56px;
    font-size: 20px;
}

.containers {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.containers input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #BBF4FA;
  border-radius: 50%;

}
.containers:hover input ~ .checkmark {
  background-color: #22A6B3;
}
.containers input:checked ~ .checkmark {
  background-color: #2196F3;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.containers input:checked ~ .checkmark:after {
  display: block;
}
.containers .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
}
.tombol{
    width: 173px;
    height: 64px;
    background-color: #BBF4FA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-family: Delius;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #F9CA24;
}
.wadah {
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;
}
@media (max-width: 575.98px) {
  .confirm {
    display: none;
  }
  .wadah {
    display: flex;
  }
  .title {
    font-size: 40px;
  }
  .labeling {
    font-size: 25px;
  }
}
</style>
