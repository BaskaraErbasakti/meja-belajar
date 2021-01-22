<template>
  <div class="kotak">
    <div class="garis">
      <h1>PPKn</h1>
    </div>
    <div>
      <p>
        Pada pelajaran PPKn kelas IX untuk kurikulum 2013 Revisi ini,terdapat pembahasan materi PPKn yang lebih simpel mengenai materi Dinamika Peran Indonesia Dalam Perdamian Dunia.
        Bagi kalian yang mungkin berminat untuk memasuki jurusan Hubungan Internasional, harus bisa mengusai bab ini.
      </p>
    </div>
    <div>
      <h3>
        Peran Indonesia Dalam Menciptakan Perdamaian Dunia Melalui Hubungan Internasional
      </h3>
      <p>Salah satu tujuan nasional Indonesia sebagaimana tercantum dalam alinea ke-4 Pembukaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 adalah ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi, dan keadilan sosial. Salah satu konsekuensi dari tujuan tersebut adalah bangsa Indonesia harus senantiasa berperan serta dalam menciptakan perdamaian dunia. Hal tersebut dikarenakan bangsa Indonesia merupakan bagian dari seluruh umat manusia di dunia sehingga sudah seharusnya bangsa Indonesia berada pada barisan terdepan dalam upaya menciptakan perdamaian dunia.</p>
      <NuxtLink to="/materi-ajar/melalui-hubungan-internasional">
        <div class="lanjut d-flex justify-content-end">
          <button class="tombol px-3 py-1 border-0">
            Selanjutnya
          </button>
        </div>
      </NuxtLink>
    </div>
    <div class="bag-2">
      <h3>Peran Indonesia Dalam Menciptakan Perdamaian Dunia Melalui Organisasi Internasional</h3>
      <p>Secara umum organisasi internasional dapat diartikan sebagai organisasi yang berkedudukan sebagai subjek hukum internasional dan mempunyai kapasitas untuk membuat perjanjian internasional. Karena merupakan subjek hukum internasional, organisasi internasional mempunyai hak dan kewajiban yang ditetapkan dalam konvensi-konvensi internasional. Organisasi internasional pada umumnya beranggotakan negara-negara. Indonesia terlibat dalam berbagai organisasi internasional. Hal tersebut sebagai perwujudan dari komitmen bangsa Indonesia dalam menciptakan perdamaian dunia.</p>
      <NuxtLink to="/materi-ajar/melalui-organisasi-internasional">
        <div class="lanjut d-flex justify-content-end">
          <button class="tombol px-3 py-1 border-0">
            Selanjutnya
          </button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.kotak {
    background-color: white;
    margin-left: 2rem;
    margin-top: 3rem;
    margin-right: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
}
.garis {
    border-bottom: 5px solid #22A6B3;
    color: #1F95A1;
}
.lanjut {
    margin-right: 2rem;
}
h3 {
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #1F95A1;
}
.tombol {
    background-color: teal;
    color: white;
    border-radius: 25px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
p {
    font-size: 20px;
    text-align: justify;
    text-justify: inter-word;
}
@media (max-width: 575.98px) {
  .bag-2 {
    margin-top: 30px;
  }
  .kotak {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
  }
}
</style>
