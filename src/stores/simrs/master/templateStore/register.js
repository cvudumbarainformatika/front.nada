import { createTemplateMasterStore } from "./useTemplateMasterStore.js";

export const useMasterJabatanStore = createTemplateMasterStore('jabatan', {
  baseUrl: '/v1/simrs/master/pegawai/jabatan',
  columns: ['jabatan'], // ini isi column table (untuk pertama kali)
  persist: false
})
