<template>
  <q-dialog persistent>
    <q-card class="lebar column">
      <q-bar class="col-auto bg-primary text-white q-py-xs">
        <div>Form Karyawan Baru</div>
        <q-space />
        <q-btn dense flat icon="icon-mat-close" v-close-popup>
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>

      <!-- FORM -->

      <q-form class="col full-height column" @submit="handleSubmit" @reset="handleReset">
        <q-card-section class="col full-height scroll" :class="dark ? 'bg-dark' : 'bg-grey-3'">


          <!-- <div class="row q-col-gutter-md">
            <div class="col-xs-6 col-sm-6 col-md-3">
              <div class="column flex-center full-width">

                <div v-if="store?.item">
                  <app-avatar-pasien width="100%" :pasien="store?.item" />
                </div>
                <div v-else>
                  <q-img src="~assets/images/nouser.png" spinner-color="white" />
                </div>

                <div>Ubah Berkas</div>
              </div>
            </div>

            <div>aaa</div>
          </div> -->

          <app-grid :cols="{ default: 1, sm: 3 }" :gap="16">
            <div class="col-span-1">
              <div v-if="store?.item">
                <app-avatar-pasien width="100%" :pasien="store?.item" />
              </div>
              <div v-else>
                <q-img src="~assets/images/nouser.png" spinner-color="white" />
              </div>
              <div class="text-center q-mt-md font-bold text-primary cursor-pointer">Ubah Berkas</div>
            </div>

            <div class="col-span-1">
              <div class="full-width q-gutter-md">
                <div class="text-bold">Biodata Diri</div>
                <q-separator class="q-my-xs"></q-separator>
                <app-input-simrs v-model="form.nip" label="NIP" :error-message="errorMessage('nip')"
                  :is-error="isError('nip')" />
                <app-input-simrs v-model="form.nik" label="NIK" :error-message="errorMessage('nik')"
                  :is-error="isError('nik')" />
                <app-input-simrs v-model="form.nama" label="Nama" :error-message="errorMessage('nama')"
                  class="col-span-2" :is-error="isError('nama')" />

                <app-input-simrs type="textarea" v-model="form.alamat" label="Alamat"
                  :error-message="errorMessage('alamat')" :is-error="isError('alamat')" class="col-span-2" />
                <app-input-simrs v-model="form.kelamin" label="Kelamin" :error-message="errorMessage('kelamin')"
                  :is-error="isError('kelamin')" class="col-span-2" />

                <app-input-simrs v-model="form.templahir" label="Tempat Lahir"
                  :error-message="errorMessage('templahir')" :is-error="isError('templahir')" class="col-span-2" />
                <app-input-simrs v-model="form.tgllahir" label="tgllahir" :error-message="errorMessage('tgllahir')"
                  :is-error="isError('tgllahir')" class="col-span-2" />

              </div>
            </div>

            <div class="col-span-1 q-gutter-md">
              <app-input-simrs v-model="form.jenispegawai" label="jenispegawai"
                :error-message="errorMessage('jenispegawai')" :is-error="isError('jenispegawai')" class="col-span-2" />
              <app-input-simrs v-model="form.flag" label="flag" :error-message="errorMessage('flag')"
                :is-error="isError('flag')" class="col-span-2" />
              <app-input-simrs v-model="form.jabatan" label="jabatan" :error-message="errorMessage('jabatan')"
                :is-error="isError('jabatan')" class="col-span-2" />
              <app-input-simrs v-model="form.profesi" label="profesi" :error-message="errorMessage('profesi')"
                :is-error="isError('profesi')" class="col-span-2" />
              <app-input-simrs v-model="form.golruang" label="golruang" :error-message="errorMessage('golruang')"
                :is-error="isError('golruang')" class="col-span-2" />

              <app-input-simrs v-model="form.pendidikan" label="pendidikan" :error-message="errorMessage('pendidikan')"
                :is-error="isError('pendidikan')" class="col-span-2" />

              <app-input-simrs v-model="form.aktif" label="aktif" :error-message="errorMessage('aktif')"
                :is-error="isError('aktif')" class="col-span-2" />
              <app-input-simrs v-model="form.bagian" label="bagian" :error-message="errorMessage('bagian')"
                :is-error="isError('bagian')" class="col-span-2" />
            </div>
          </app-grid>




          <!-- INPUT DI BAWAHNYA -->
          <app-grid :cols="{ default: 1, sm: 4 }" :gap="12" class="q-mt-md">

            <app-input-simrs v-model="form.ruang" label="ruang" :error-message="errorMessage('ruang')"
              :is-error="isError('ruang')" />
            <app-input-simrs v-model="form.tglmasuk" label="tglmasuk" :error-message="errorMessage('tglmasuk')"
              :is-error="isError('tglmasuk')" />

            <app-input-simrs v-model="form.tgltmt" label="tgltmt" :error-message="errorMessage('tgltmt')"
              :is-error="isError('tgltmt')" />
            <app-input-simrs v-model="form.kategoripegawai" label="kategoripegawai"
              :error-message="errorMessage('kategoripegawai')" :is-error="isError('kategoripegawai')" />

            <app-input-simrs v-model="form.alamatdetil" label="alamatdetil" :error-message="errorMessage('alamatdetil')"
              :is-error="isError('alamatdetil')" />
            <app-input-simrs v-model="form.rt" label="rt" :error-message="errorMessage('rt')"
              :is-error="isError('rt')" />
            <app-input-simrs v-model="form.rw" label="rw" :error-message="errorMessage('rw')"
              :is-error="isError('rw')" />

            <app-input-simrs v-model="form.kelurahan" label="kelurahan" :error-message="errorMessage('kelurahan')"
              :is-error="isError('kelurahan')" />
            <app-input-simrs v-model="form.kecamatan" label="kecamatan" :error-message="errorMessage('kecamatan')"
              :is-error="isError('kecamatan')" />
            <app-input-simrs v-model="form.kota" label="kota" :error-message="errorMessage('kota')"
              :is-error="isError('kota')" />
            <app-input-simrs v-model="form.agama" label="agama" :error-message="errorMessage('agama')"
              :is-error="isError('agama')" />
            <app-input-simrs v-model="form.tmt_cpns" label="tmt_cpns" :error-message="errorMessage('tmt_cpns')"
              :is-error="isError('tmt_cpns')" />
            <app-input-simrs v-model="form.gaji_total" label="gaji_total" :error-message="errorMessage('gaji_total')"
              :is-error="isError('gaji_total')" />
            <app-input-simrs v-model="form.gaji_pokok" label="gaji_pokok" :error-message="errorMessage('gaji_pokok')"
              :is-error="isError('gaji_pokok')" />
            <app-input-simrs v-model="form.kel_ttg" label="kel_ttg" :error-message="errorMessage('kel_ttg')"
              :is-error="isError('kel_ttg')" />
            <app-input-simrs v-model="form.th_mk_tmb" label="th_mk_tmb" :error-message="errorMessage('th_mk_tmb')"
              :is-error="isError('th_mk_tmb')" />
            <app-input-simrs v-model="form.bln_mk_tmb" label="bln_mk_tmb" :error-message="errorMessage('bln_mk_tmb')"
              :is-error="isError('bln_mk_tmb')" />
            <app-input-simrs v-model="form.jurusan" label="jurusan" :error-message="errorMessage('jurusan')"
              :is-error="isError('jurusan')" />
            <app-input-simrs v-model="form.telp" label="telp" :error-message="errorMessage('telp')"
              :is-error="isError('telp')" />
            <app-input-simrs v-model="form.email" label="email" :error-message="errorMessage('email')"
              :is-error="isError('email')" />
            <app-input-simrs v-model="form.kode_ruang" label="kode_ruang" :error-message="errorMessage('kode_ruang')"
              :is-error="isError('kode_ruang')" />
            <app-input-simrs v-model="form.statusspesialis" label="statusspesialis"
              :error-message="errorMessage('statusspesialis')" :is-error="isError('statusspesialis')" />
            <app-input-simrs v-model="form.kdgroupnakes" label="kdgroupnakes"
              :error-message="errorMessage('kdgroupnakes')" :is-error="isError('kdgroupnakes')" />
            <app-input-simrs v-model="form.kddpjp" label="kddpjp" :error-message="errorMessage('kddpjp')"
              :is-error="isError('kddpjp')" />
            <app-input-simrs v-model="form.satset_uuid" label="satset_uuid" :error-message="errorMessage('satset_uuid')"
              :is-error="isError('satset_uuid')" />




          </app-grid>
          <!-- </div> -->
        </q-card-section>
        <q-card-actions align="right" class="col-auto">

          <app-btn label="Cancel" flat type="reset" />
          <app-btn label="Simpan Data" :loading="store.loadingSave" color="primary" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  },
  store: {
    type: Object,
    default: null
  }
})

const form = ref(
  {
    "nip": "",
    // "nip_baru": "",
    "nik": "",
    "nama": "",
    "alamat": "",
    "kelamin": "",
    "templahir": "",
    "tgllahir": "",
    "jenispegawai": "",
    "flag": "",
    "jabatan": "",
    "profesi": "",
    // "jabatan_tmb": "",
    "golruang": "",
    "pendidikan": "",
    "aktif": "",

    "foto": "",

    "bagian": "",
    "ruang": "",
    "tgl_masuk": "",
    "tgl_tmt": "",
    // "id_simrs": "",
    "kategoripegawai": "",
    // "pass": "",
    "alamat_detil": "",
    "rt": "",
    "rw": "",
    "kelurahan": "",
    "kecamatan": "",
    "kota": "",
    "agama": "",
    "tmt_cpns": "",
    "gaji_total": "",
    "gaji_pokok": "",
    "kel_ttg": "",
    "th_mk_tmb": "",
    "bln_mk_tmb": "",
    "jurusan": "",
    // "flagpas": "",
    "telp": "",
    "email": "",
    // "id_absen": "",
    // "jadwalkerja": "",
    // "account_pass": "",
    // "role_id": "",
    "kode_ruang": "",
    // "kdpegsimrs": "",
    "statusspesialis": "",
    "kdgroupnakes": "",
    "kddpjp": "",
    // "kdruangansim": "",
    "satset_uuid": "",
    "ttdpegawai": "",
    // "kdarteri": "",
    "created_at": "",
    "updated_at": ""
  }

)

const error = computed(() => {
  const err = props.store.error
  const status = err?.status === 422
  if (status) {
    return err?.response?.data?.errors
  }
  return null
})

function errorMessage(field) {
  return error.value?.[field]?.[0] ?? null
}

function isError(field) {
  return !!error.value?.[field]
}


watch(() => (form.value), (newForm, oldForm) => {
  // console.log('🔥 watch form', newForm, oldForm);

  for (const key in newForm) {
    props.store.clearFieldError(key)
  }

}, { deep: true })

watch(() => (props.store.item), (newForm, oldForm) => {
  // console.log('🔥 watch form', newForm, oldForm);
  const excludedKeys = ['created_at', 'updated_at']

  if (newForm) {
    form.value = Object.fromEntries(
      Object.entries(newForm).filter(([key]) => !excludedKeys.includes(key))
    )
  }

  console.log('🔥 watch form', form.value);


}, { deep: true })


const handleSubmit = () => {
  props.store.create(form.value)
}

const handleReset = () => {
  form.value = {
    jabatan: null
  }

  props.store.clearAllError()
  props.store.setEdit(null)
  props.store.modalFormOpen = false
}


</script>
<style lang="scss" scoped>
.lebar {
  max-width: 90vw;
  width: 90vw;
  height: 90vh;
}
</style>
