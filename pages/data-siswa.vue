<template>
  <div class="container spasi1">
    <div>
      <button>
        <NuxtLink to="/">
          Keluar
        </NuxtLink>
      </button>
    </div>
    <table class="table">
      <thead>
        <tr class="table-primary">
          <th scope="col">
            Nomor
          </th>
          <th scope="col">
            Nama
          </th>
          <th scope="col">
            Umur
          </th>
          <th scope="col">
            Jenis Kelamin
          </th>
          <th scope="col">
            Waktu
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in siswa" :key="data.nama">
          <th scope="row">
            {{ index+1 }}
          </th>
          <td>{{ data.nama }}</td>
          <td>{{ data.umur }}</td>
          <td>{{ data.jenis }}</td>
          <td>{{ data.waktu }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  layout: 'nomor',
  data () {
    return {
      siswa: []
    }
  },
  mounted () {
    this.$fire.firestore.collection('data').onSnapshot(
      (res) => {
        const rei = []
        res.forEach((element) => {
          rei.push(element.data())
        })
        rei.forEach((index) => {
          index.waktu = Date.parse(index.waktu)
        })
        this.siswa = rei
        this.siswa.sort((a, b) => (a.waktu > b.waktu) ? -1 : 1)
        this.siswa.forEach((index) => {
          const tanggal = new Date(index.waktu)
          index.waktu = tanggal.toString()
        })
      // eslint-disable-next-line no-console
      }, (err) => { console.log(err) }
    )
  }
}
</script>

<style scoped>

</style>
