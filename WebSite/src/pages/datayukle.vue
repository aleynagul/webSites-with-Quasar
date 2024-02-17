<template>
  <q-page class="flex flex-center">
    <div v-if="loading"><q-spinner /> Fetching data...</div>

    <div v-else>
      <q-list>
        <q-item-label header>urunler/Production</q-item-label>
        <q-item v-for="(urun, index) in urunler" :key="index">
          <q-item-label>
            {{ urun.title }}
          </q-item-label>
        </q-item>
      </q-list>
    </div>

    <q-btn
      v-if="!urunler.length && !loading"
      label="Seed Data"
      class="q-mt-md"
      @click="seedData()"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import seedData from "../data/urunler.json";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      loading: true,
      urunler: [],
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      this.loading = true;
      this.urunler = [];

      const q = query(
        collection(this.$db, "urunler"),
        where("completed", "==", true)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((urun) => {
        this.urunler.push(urun.data());
      });

      this.loading = false;
    },

    async seedData() {
      for (const urun of seedData) {
        await addDoc(collection(this.$db, "urunler"), urun);
      }

      this.getData();
    },
  },
});
</script>
