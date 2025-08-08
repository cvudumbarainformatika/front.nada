import { createTemplateMasterStore } from "./useTemplateMasterStore.js";

export const useMasterJabatanStore = createTemplateMasterStore('jabatan', {
  baseUrl: '/v1/simrs/master/pegawai/jabatan',
  columns: ['kode_jabatan', 'jabatan'], // ini isi column table (untuk pertama kali)
  columnHide: [],
  persist: false
})
export const useMasterPegawaiStore = createTemplateMasterStore('pegawai', {
  baseUrl: '/v1/simrs/master/pegawai/pegawai',
  columns: ['nip', 'nik', 'nama', 'alamat', 'kelamin', 'templahir', 'tgllahir', 'jenispegawai', 'flag', 'jabatan', 'profesi', 'golruang', 'pendidikan', 'aktif', 'foto', 'bagian', 'ruang', 'tgl_masuk', 'tgl_tmt', 'kategoripegawai', 'alamat_detil', 'rt', 'rw', 'kelurahan', 'kecamatan', 'kota', 'agama', 'tmt_cpns', 'gaji_total', 'gaji_pokok', 'kel_ttg', 'th_mk_tmb', 'bln_mk_tmb', 'jurusan', 'telp', 'email', 'kode_ruang', 'statusspesialis', 'kdgroupnakes', 'kddpjp', 'satset_uuid', 'ttdpegawai', 'created_at', 'updated_at'],
  // ini isi column table (untuk pertama kali), 
  columnHide: ['id', 'created_at', 'updated_at', 'deleted_at'],
  persist: false
})

export const useMasterObatStore = createTemplateMasterStore('obat', {
  baseUrl: '/v1/simrs/master/farmasi',
  columns: [
    // 'kd_obat',
    'barcode',
    'nama_obat',
    'merk',
    'kandungan',
    'jenis_perbekalan',
    'bentuk_sediaan',
    'kode108',
    // 'uraian108',
    'kode50',
    // 'uraian50',
    'satuan_b',
    'satuan_k',
    'kelompok_psikotropika',
    'kelompok_rko',
    'status_generik',
    'status_forkid',
    'status_fornas',
    'status_kronis',
    'status_prb',
    'status_konsinyasi',
    'keterangan_kronis',
    'kekuatan_dosis',
    'volumesediaan',
    'kelas_terapi',
    'obat_program',
    'obat_donasi',
    'obat_kebijakan',
    'sistembayar'
  ],
  columnHide: [],
  persist: false
})
