<template>
  <div class="kotak">
    <div class="garis">
      <h1 class="judul">
        Peran Indonesia Dalam Menciptakan Perdamaian Dunia Melalui Hubungan Internasional
      </h1>
    </div>
    <div class="d-flex justify-content-center">
      <img class="gambar img-fluid" src="../../assets/Hubungan-internasional.jpg" alt="Hubungan-internasional">
    </div>
    <div>
      <h3>Makna Hubungan Internasional</h3>
      <p>Hubungan internasional merupakan solusi bagi persoalan yang dialami oleh suatu negara. Ketika suatu negara mengalami kekurangan dalam suatu bidang, misalnya kekurangan tenaga ahli untuk membangun negerinya maka melalui hubungan internasional negara tersebut mampu mengatasi persoalan dengan meminta bantuan dari negara lain. Oleh karena itu hubungan internasional mempunyai kedudukan yang sangat penting dalam kehidupan suatu negara yang beradab.</p>
      <div>
        <b-button v-b-toggle.collapse-1 class="colep">
          Bentuk-bentuk Hubungan Internasional
        </b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p><span class="tebel">Politik luar negeri </span>adalah seperangkat cara/kebijakan yang dilakukan oleh suatu negara untuk mengadakan hubungan dengan negara lain dengan tujuan untuk tercapainya tujuan negara serta kepentingan nasional negara yang bersangkutan.</p>
            <p><span class="tebel">Hubungan luar negeri </span>adalah keseluruhan hubungan yang dijalankan oleh suatu negara dengan semua pihak yang tidak tunduk pada kedaulatannya.</p>
            <p><span class="tebel">Politik internasional </span>adalah politik antarnegara yang mencakup kepentingan dan tindakan beberapa atau semua negara serta proses interaksi antarnegara maupun antarnegara dengan organisasi internasional.</p>
          </b-card>
        </b-collapse>
      </div>
    </div>
    <div class="mt-4">
      <h3>Pentingnya Hubungan Internasional</h3>
      <p>
        Suatu bangsa yang merdeka tidak dapat hidup sendiri tanpa bantuan dari negara lain. Untuk menjaga kelangsungan hidup dan mempertahankan kemerdekaannya, negara tersebut membutuhkan dukungan dari negara lain. Nah, untuk mendapatkan dukungan tersebut, suatu negara harus mengadakan hubungan yang baik dengan negara lain.
        Misalnya, ketika awal kemerdekaan, bangsa Indonesia membutuhkan pengakuan dan dukungan dari negara lain.
      </p>
      <div>
        <b-button v-b-toggle.collapse-2 class="colep">
          Faktor terjadinya Hubungan Internasional
        </b-button>
        <b-collapse id="collapse-2" class="mt-2">
          <b-card>
            <p><span class="tebel">Faktor internal, </span>yaitu adanya kepentingan nasional, keinginan untuk bisa meningkatkan kesejahteraan nasional, keinginan untuk bisa menjalin hubungan politik dan memperoleh dukungan dari negara lain.</P>
            <p><span class="tebel">Faktor eksternal, </span>yaitu adanya perbedaan kemampuan dalam pemahaman ilmu pengetahuan diberbagai bidang, adanya perbedaan keadaan seperti sumber daya alam, iklim, budaya, dan jumlah penduduk yang menyebabkan perbedaan pendapatan negara.</p>
          </b-card>
        </b-collapse>
      </div>
    </div>
    <div class="mt-4">
      <h3>Politik Luar Negeri Indonesia</h3>
      <p>
        Hubungan yang dijalin oleh suatu negara dengan negara lain, tentu saja tidak dapat dilepaskan dari tata pergaulan antarnegara. Jika dalam pergaulan manusia dalam lingkungan tetangga ada yang dinamakan tata krama pergaulan, maka dalam pergaulan antarnegara pun terdapat hal yang sama. Setiap negara mempunyai kebijakan politiknya masing-masing. Kebijakan politik masing-masing negara dalam pergaulan internasional dinamakan politik luar negeri.
      </p>
      <div>
        <b-button v-b-toggle.collapse-3 class="colep">
          Tujuan politik luar negeri Indonesia
        </b-button>
        <b-collapse id="collapse-3" class="mt-2">
          <b-card>
            <ol>
              <li>Mempertahankan kemerdekaan bangsa dan menjaga keselamatan negara.</li>
              <li>Memperoleh barang-barang yang diperlukan dari luar untuk memperbesar kemakmuran rakyat.</li>
              <li>Meningkatkan perdamaian internasional.</li>
              <li>Meningkatkan persaudaraan segala bangsa sebagai pelaksanaan cita-cita yang tersimpul dalam Pancasila, dasar dan filsafah negara kita.</li>
            </ol>
          </b-card>
        </b-collapse>
      </div>
      <div class="mt-3">
        <b-button v-b-toggle.collapse-3 class="colep">
          Bentuk kerjasama Indonesia
        </b-button>
        <b-collapse id="collapse-3" class="mt-2">
          <b-card>
            <ol>
              <li>Indonesia menjadi anggota Perserikatan Bangsa-bangsa (PBB) yang ke-60 pada tanggal 28 September 1950.</li>
              <li>Memprakarsai penyelenggaraan Konferensi Asia-Afrika (KAA) pada tahun 1955.</li>
              <li>Indonesia sebagai salah satu pendiri Gerakan Non-Blok (GNB) pada tahun 1961.</li>
              <li>Indonesia menjadi salah satu pendiri ASEAN (Assosiaciation of South-East Asian Nation).</li>
              <li>Terlibat langsung dalam misi perdamaian Dewan Keamanan PBB dengan mengirimkan Pasukan Garuda ke negara-negara yang dilanda konflik.</li>
            </ol>
          </b-card>
        </b-collapse>
      </div>
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
  }
}
</style>
