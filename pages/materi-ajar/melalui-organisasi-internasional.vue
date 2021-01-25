<template>
  <div>
    <div class="lanjutan">
      <NuxtLink to="/materi-ajar">
        <h2 class="back">
          Kembali > PPKn
        </h2>
      </NuxtLink>
    </div>
    <div class="kotak">
      <div class="garis">
        <h1 class="judul">
          Peran Indonesia Dalam Menciptakan Perdamaian Dunia Melalui Organisasi Internasional
        </h1>
      </div>
      <div class="d-flex justify-content-center">
        <img class="gambar img-fluid" src="../../assets/Organisasi-internasional.jpg" alt="Organisasi-internasional">
      </div>
      <div>
        <h3>Peran Indonesia dalam PBB</h3>
        <p>Indonesia resmi menjadi anggota PBB ke-60 pada tanggal 28 September 1950 dengan suara bulat dari para negara anggota. Hal tersebut terjadi kurang dari setahun setelah pengakuan kedaulatan oleh Belanda melalui Konferensi Meja Bundar. Indonesia dan PBB memiliki keterikatan sejarah yang kuat mengingat kemerdekaan Indonesia diproklamasikan pada tahun 1945, tahun yang sama ketika PBB didirikan. Sejak tahun itu pula PBB secara konsisten mendukung Indonesia untuk menjadi negara yang merdeka, berdaulat, dan mandiri.</p>
        <div>
          <b-button v-b-toggle.collapse-1 class="colep">
            Dalam mewujudkan perdamaian dunia
          </b-button>
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <ol>
                <li>Sebagai salah satu anggota PBB, Indonesia berhasil menyelenggarakan sebuah Konferensi Asia Afrika.</li>
                <li>Indonesia menjadi salah satu pemprakarsa berdirinya ASEAN serta Gerakan Non-Blok.</li>
                <li>Indonesia menjadi pelopor pencetusan ZOFTAN dengan SEANWFZ.</li>
                <li>Indonesia mengirimkan Pasukan Garuda untuk mengemban misi perdamaian PBB di berbagai negara yang mengalami konflik.</li>
              </ol>
            </b-card>
          </b-collapse>
        </div>
        <div class="mt-3">
          <b-button v-b-toggle.collapse-1 class="colep">
            Sebagai pemimpin dan angota tetap di PBB
          </b-button>
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <ol>
                <li>Tahun 1971, Indonesia ditunjuk menjadi presiden di Majelis Umum PBB.</li>
                <li>Indonesia tiga kali terpilih menjadi anggota tetap Dewan Keamanan PBB,pada periode tahun 1974 – 1975, periode tahun 1995-1996, serta periode tahun 2007-2008.</li>
                <li>Indonesia juga terpilih sebanyak tiga kali menjadi anggota Dewan Hak Asasi Manusia (HAM) PBB serta satu kali ditunjuk sebagai wakil presiden dari dewan tersebut, dimana pada periode tahun 2009 hingga 2010.</li>
              </ol>
            </b-card>
          </b-collapse>
        </div>
      </div>
      <div class="mt-4">
        <h3>Peran Indonesia dalam ASEAN</h3>
        <p>
          Indonesia sebagai bagian dari Asia Tenggara khususnya dan dunia umumnya, menyadari pentingnya hubungan kerja sama dengan negara-negara lain di berbagai belahan bumi. Hal ini sesuai dengan yang tertuang dalam tujuan negara sebagaimana yang tercantum dalam Pembukaan UUD 1945, yaitu ikut melaksanakan ketertiban dunia, perdamaian abadi, dan keadilan sosial. Untuk mewujudkan tujuan tersebut, Indonesia banyak berperan aktif dalam berbagai organisasi internasional, terutama di kawasan Asia Tenggara.
        </p>
        <div>
          <b-button v-b-toggle.collapse-2 class="colep">
            Peran Indonesia
          </b-button>
          <b-collapse id="collapse-2" class="mt-2">
            <b-card>
              <ol>
                <li>Sebagai penggagas lahirnya ASEAN.</li>
                <li>Meluncurkan gagasan pembentukan komunitas keamanan ASEAN.</li>
                <li>Menjadi penengah konflik dan perang.</li>
                <li>Kerja sama produksi makanan halal.</li>
                <li>Menganjurkan adanya pentas seni antar negara.</li>
                <li>Indonesia sering menjadi tuan rumah dalam acara-acara penting ASEAN.</li>
              </ol>
            </b-card>
          </b-collapse>
        </div>
      </div>
      <div class="mt-4">
        <h3>Peran Indonesia dalam GNB</h3>
        <p>
          Bagi Indonesia, Gerakan Non-Blok (GNB) merupakan wadah yang tepat bagi negara berkembang untuk memperjuangkan cita-citanya dan untuk itu Indonesia senantiasa berusaha secara konsisten dan aktif membantu berbagai upaya kearah pencapaian tujuan dan prinsip-prinsip GNB. GNB mempunyai arti yang khusus bagi bangsa Indonesia yang dapat dikatakan lahir sebagai negara netral, yang tidak memihak. Hal tersebut tercermin dalam Pembukaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.
        </p>
        <div>
          <b-button v-b-toggle.collapse-3 class="colep">
            Peran Indonesia
          </b-button>
          <b-collapse id="collapse-3" class="mt-2">
            <b-card>
              <ol>
                <li>Indonesia jadi salah satu negara yang memprakarsai pendirian Gerakan Non-Blok.</li>
                <li>Sejak tahun 1991-1995, Indonesia mendapat kepercayaan memimpin organisasi GNB.</li>
                <li>Indonesia berhasil menyelenggarakan KTT X GNB.</li>
                <li>Negara Indonesia menjadi negara yang juga ikut memecahkan masalah-masalah dunia berdasarkan perdamaian dunia.</li>
              </ol>
            </b-card>
          </b-collapse>
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
a {
  text-decoration: none;
}
.lanjutan {
    margin-top: 2%;
    margin-left: 2rem;
    margin-right: 1%;
    padding-right: 2%;
    display: flex;
    justify-content: flex-end;
}
.back {
  font-size: 24px;
  margin-bottom: 0;
}
.kotak {
    background-color: white;
    margin-left: 2rem;
    margin-right: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
}
.garis {
    border-bottom: 5px solid #22A6B3;
}
.judul{
    color: #1F95A1;
    font-size: 27px;
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
.gambar {
    width: 1126px;
    height: 391px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    border-radius: 100px;
    margin-top: 50px;
    margin-bottom: 40px;
}
.colep {
  background-color: transparent;
  color: black;
  width: 100%;
  display: flex;
  justify-items: start;
  font-size: 20px;
}
.tebel {
  font-weight: 650;
}
li {
    font-size: 20px;
    text-align: justify;
    text-justify: inter-word;
}
@media (max-width: 575.98px) {
  .gambar {
    height: 70%;
    margin-top: 25px;
    margin-bottom: 30px;
  }
  .kotak {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
  }
  h3 {
    font-size: 22px;
  }
  p {
    font-size: 18px;
  }
  .colep {
    font-size: 18px;
  }
  li {
    font-size: 18px;
    text-align: left;
  }
}
</style>
