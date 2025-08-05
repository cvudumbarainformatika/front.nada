<template>
  <q-page class="fit relative-position">
    <div class="fit absolute-top q-pa-sm">
      <q-card class="rounded-lg fit column">

        <q-card-section class="col full-height q-pa-none">
          <q-table :rows="rows" :columns="columns" row-key="id" flat bordered class="rounded-xl shadow-sm"
            table-class="text-sm" hide-bottom table-header-class="bg-grey-3">
            <template v-slot:top>
              <div class="row full-width q-pt-sm">
                <div class="col-auto">
                  <q-input v-model="search" outlined class="search-big" borderless :debounce="300" clearable dense
                    placeholder="Cari Enter ..." @keydown.enter.prevent="handleSearch">
                    <template #prepend>
                      <q-icon name="icon-mat-search" size="20px" />
                    </template>
                  </q-input>
                </div>
                <div class="col full-width justify-end bg-red-5 row items-center">
                  ddd
                </div>
              </div>
            </template>
          </q-table>
        </q-card-section>
        <q-card-section class="col-auto full-width bg-fifth">
          <div class="f-14 text-weight-bold">
            Bawah
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
const handleSearch = () => {
  console.log('search', search.value);

}


const columns = [
  { name: 'name', label: 'Nama', field: 'name', align: 'left' },
  { name: 'email', label: 'Email', field: 'email', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left' }
]

const rows = [
  { id: 1, name: 'Dina', email: 'dina@example.com', status: 'Aktif' },
  { id: 2, name: 'Riko', email: 'riko@example.com', status: 'Nonaktif' },
  { id: 3, name: 'Tina', email: 'tina@example.com', status: 'Aktif' }
]
</script>