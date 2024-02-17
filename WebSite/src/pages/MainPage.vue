<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      style="max-height: 100%; position: relative"
      height="500px"
    >
      <q-carousel-slide :name="1">
        <img
          src="icons/slider1.jpeg"
          alt="Slide 1"
          style="width: 100%; height: 100%"
        />
        <div class="button-container">
          <button class="explore-button">Keşfet!</button>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2">
        <img
          src="icons/slider2.jpeg"
          alt="Slide 2"
          style="width: 100%; height: 100%"
        />
        <div class="button-container">
          <button class="explore-button">Keşfet!</button>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3">
        <img
          src="icons/slider3.jpeg"
          alt="Slide 3"
          style="width: 100%; height: 100%"
        />
        <div class="button-container">
          <button class="explore-button">Keşfet!</button>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4">
        <img
          src="icons/slider4.jpeg"
          alt="Slide 4"
          style="width: 100%; height: 100%"
        />
        <div class="button-container">
          <button class="explore-button">Keşfet!</button>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="banner-container">
      <img src="icons/banner1.png" alt="Banner" class="banner-image" />
    </div>

    <div class="popular-categories">
      <h2 style="margin-left: 3%">POPÜLER KATEGORİLER</h2>
      <div class="category">
        <img src="icons/termos-ve-mataralar.jpg" alt="Kategori 1" />
        <p>TERMOS VE MATARALAR</p>
      </div>
      <div class="category">
        <img src="icons/sandalyeler.jpg" alt="Kategori 2" />
        <p>SANDALYELER</p>
      </div>
      <div class="category">
        <img src="icons/spor-ayakkabilar.jpg" alt="Kategori 3" />
        <p>SPOR AYAKKABILAR</p>
      </div>
      <div class="category">
        <img src="icons/toplar.jpg" alt="Kategori 4" />
        <p>TOPLAR</p>
      </div>
      <div class="category">
        <img src="icons/cantalar.jpg" alt="Kategori 5" />
        <p>ÇANTALAR</p>
      </div>
      <div class="category">
        <img src="icons/taytlar.jpg" alt="Kategori 6" />
        <p>TAYTLAR</p>
      </div>
    </div>

    <div
      class="container"
      style="margin-left: 10%; margin-right: 10%; margin-top: 70px"
    >
      <div class="indirim" style="width: 500px; height: 500px">
        <img
          src="icons/indirim.jpeg"
          alt="Büyük Resim"
          class="buyuk-resim"
          style="width: 500px; height: 500px"
        />
        <div class="overlay">
          <div class="discover">Keşfet!</div>
        </div>
      </div>
      <div class="indirim" style="width: 500px; height: 500px">
        <img
          src="icons/indirim2.jpeg"
          alt="Büyük Resim"
          class="buyuk-resim"
          style="width: 500px; height: 500px"
        />
        <div class="overlay">
          <div class="discover">Keşfet!</div>
        </div>
      </div>
    </div>
  </div>

  <div class="firsat-urunler-container"></div>
  <h2 class="firsat-urunler-baslik">FIRSAT ÜRÜNLER</h2>

  <div class="urun-karti-container">
    <div class="urun-karti" v-for="urun in urunler" :key="urun.urun">
      <div class="resim-alani">
        <img :src="urun.urunResim" alt="Ürün Resmi 1" />
      </div>
      <div class="detaylar-alani">
        <div class="fiyat-bilgisi">
          <div class="indirimli-fiyat">{{ urun.indirimliFiyat }}</div>
          <div class="normal-fiyat">{{ urun.normalFiyat }}</div>
          <div class="indirim-orani">{{ indirimMiktari }}</div>
        </div>
        <div class="urun-bilgisi">
          <div class="ad">{{ urun.urunIsim }}</div>
        </div>

        <div class="sepete-ekle">SEPETE EKLE</div>
      </div>
    </div>
  </div>
</template>

<style>
.indirim {
  position: relative;
}

.indirim .overlay {
  position: absolute;
  bottom: 20px;
  left: 10px;
  background-color: yellow;
  padding: 5px 10px;
}

.indirim .overlay .discover {
  color: black;
  font-weight: bold;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.row {
  display: flex;
  flex-basis: 100%;
  justify-content: flex-end; /* Yatayda sağa hizalama */
}

.col .product-container {
  position: relative;
}

.col img {
  width: 200px;
  height: 200px;
}

.special,
.discount {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  background-color: #fff;
  color: #f00;
  font-weight: bold;
}

.special {
  border: 2px solid #f00;
}

.discount {
  border: 2px solid #00f;
}

.slider-slide img {
  width: 100%;
  height: 100%;
  border-radius: 500px;
}

.button-container {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.explore-button {
  background-color: yellow;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
}

.banner-container {
  width: 100%;
  overflow: hidden;
}

.banner-image {
  width: 100vw;
  height: auto;
}

.popular-categories {
  text-align: center;
  margin-top: 20px;
}

.popular-categories h2 {
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
}

.category {
  display: inline-block;
  text-align: center;
  margin: 10px;
}

.category img {
  width: 214px;
  height: 304px;
  border-radius: 7px;
  object-fit: cover;
  object-position: center;
}
.category p {
  margin-top: 10px;
}
.indirim {
  justify-content: space-between;
}

.firsat-urunler-container {
  text-align: center;
  margin-bottom: 10px;
}

.firsat-urunler-baslik {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.urun-karti-container {
  display: flex;
  justify-content: center; /* Sayfayı ortalamak için */
  gap: 20px; /* Ürün kartları arasındaki boşluk */
  margin-top: 20px;
  flex-wrap: wrap;
  margin-left: 15%;
  margin-right: 15%;
}

.urun-karti {
  width: 300px;
  border: 1px solid #ccc;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 10px; /* İkinci ürünün sol tarafında bir boşluk bırakmak için */
}

.resim-alani img {
  width: 100%;
  height: auto;
}

.fiyat-bilgisi {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.indirimli-fiyat {
  font-size: 18px;
  color: red;
}

.normal-fiyat,
.indirim-orani {
  font-size: 14px;
  color: red;
}

.urun-bilgisi {
  margin-top: 10px;
  text-align: center;
}

.marka,
.ad {
  font-weight: bold;
}

.puan-bilgisi {
  margin-top: 10px;
  text-align: center;
}

.yildiz-puani {
  font-size: 16px;
}

.puan-orani {
  color: gray;
}

.sepete-ekle {
  margin-top: 10px;
  background-color: #ffe928;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
}
</style>

<script>
import { ref } from "vue";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
  data() {
    return {
      urunler: [],
      urunlerColRef: "urunler",
    };
  },

  async created() {
    await this.geturunler();
  },
  methods: {
    async geturunler() {
      this.loading = true;
      this.urunler = [];
      const q = query(collection(this.$db, "urunler"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((urun) => {
        this.urunler.push({ ...urun.data(), id: urun.id });
      });

      this.loading = false;
    },
  },
};
</script>
