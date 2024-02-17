<template>
  <q-layout view="lHh Lpr lFf"
    ><header>
      <div class="container">
        <nav>
          <ul class="menu">
            <div class="logo-container">
              <div class="logo">
                <router-link to="/">
                  <img class="logo" src="icons\logo.png" alt="Logo" />
                </router-link>
              </div>
            </div>

            <li class="search-item">
              <div class="search">
                <input
                  type="text"
                  placeholder="Bir Ürün, Spor Veya Marka Arayın"
                />
                <button>Ara</button>
              </div>
            </li>
            <li class="divider"></li>
            <li class="menu-item">
              <router-link to="/">
                <img class="logo" src="icons\info.png" alt="Logo" />
                <div class="logo-label">BİZE ULAŞIN</div>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/">
                <img class="logo" src="icons\magazabul.png" alt="Logo" />
                <div class="logo-label">MAĞAZA BUL</div>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/">
                <img class="logo" src="icons\hesabim.png" alt="Logo" />
                <span class="logo-label">HESABIM</span>
              </router-link>
            </li>

            <li class="menu-item">
              <div class="logo-sari">
                <router-link to="/">
                  <img src="icons\sepet.png" alt="Logo" />
                  <span class="logo-label">SEPETİM</span>
                </router-link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="alt-menu-container">
      <div class="alt-menu-item">
        <button class="alt-menu-button" onclick="toggleMenu('all-sports')">
          TÜM SPORLAR
        </button>
        <ul id="all-sports" class="menu-dropdown">
          <li>Avcılık</li>
          <li>Badminton</li>
          <li>Dalış</li>
          <li>Fitness Kardiyo</li>
          <li>Golf</li>
          <li>Hentbol</li>
        </ul>
      </div>

      <div class="alt-menu-item">
        <button class="alt-menu-button" onclick="toggleMenu('women')">
          KADIN
        </button>
        <ul id="women" class="menu-dropdown">
          <li>Ayakkabılar</li>
          <li>Giyim</li>
          <li>Aksesuarlar</li>
          <li>Mayolar ve Bikiniler</li>
          <li>İç Giyim</li>
        </ul>
      </div>
      <div class="alt-menu-item">
        <button class="alt-menu-button" onclick="toggleMenu('women')">
          ERKEK
        </button>
        <ul id="Men" class="menu-dropdown">
          <li>Giyim</li>
          <li>Erkek Ayakkabılar</li>
          <li>Aksesuarlar</li>
          <li>İç Giyim</li>
          <li>Mayolar ve Deniz Şortları</li>
        </ul>
      </div>

      <div class="alt-menu-item">
        <button class="alt-menu-button" onclick="toggleMenu('women')">
          ÇOCUK
        </button>
        <ul id="children" class="menu-dropdown">
          <li>Giyim</li>
          <li>Ayakkabılar</li>
          <li>Aksesuarlar</li>
          <li>Ekipmanlar</li>
          <li>Çocuk Mayo ve Bikiniler</li>
          <li>Okul Çantaları</li>
        </ul>
      </div>
    </div>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>

  <div class="navigation">
    <div class="navigation-item">
      <img src="icons/iade.png" alt="60 Days Return" />
      <span>60 Günlük İade</span>
    </div>
    <div class="navigation-item">
      <img src="icons/magazateslimant.png" alt="Store'dan Ücretsiz Teslimat" />
      <span>Store'dan Ücretsiz Teslimat</span>
    </div>
    <div class="navigation-item">
      <img src="icons/garanti.png" alt="2 Yıl Garanti" />
      <span>2 Yıl Garanti</span>
    </div>
    <div class="navigation-item">
      <img src="icons/guvenliodeme.png" alt="Güvenli Ödeme" />
      <span>Güvenli Ödeme</span>
    </div>
    <div class="navigation-item">
      <img src="icons/mobiluygulama.png" alt="Mobil Uygulamalarımız" />
      <span>Mobil Uygulamalarımız</span>
    </div>
  </div>

  <footer>
    <div class="footer-row">
      <div class="footer-column">
        <h4>HAKKIMIZDA</h4>
        <ul>
          <li>Biz Kimiz?</li>
          <li>Mağazalarımız</li>
          <li>Bize Ulaşın</li>
          <li>Üyelik Sözleşmesi</li>
          <li>Bilgi Toplumu Hizmetleri</li>
          <li>İnsan Kaynakları</li>
          <li>Sürdürebilirlik</li>
          <li>Değerlerimiz</li>
          <li>Kalite Politikamız</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>HİZMETLERİMİZ</h4>
        <ul>
          <li>Decathlon Hesabım</li>
          <li>Mağazadan Tesliman</li>
          <li>Garanti Koşulları</li>
          <li>Hediye Kartı</li>
          <li>Atölye</li>
          <li>SSS</li>
          <li>Ürün Geri Çağırma</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>SİPARİŞ</h4>
        <ul>
          <li>Kurumsal ve Toplu Satış</li>
          <li>İade Politikası</li>
          <li>Teslimant Bilgileri</li>
          <li>Ödeme Seçenekleri</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>POPÜLER KATEGORİ</h4>
        <ul>
          <li>Kamp Çadırları</li>
          <li>Kamp Sandalyeleri</li>
          <li>Bisiklet Modelleri</li>
          <li>Kamp</li>
          <li>Beden Seçim Kılavuzu</li>
          <li>Scooter</li>
          <li>Kadın Spor Giyim</li>
          <li>Erkek Spor Ayakkabılar</li>
          <li>Koşu Ayakkabıları</li>
        </ul>
      </div>
    </div>
    <div class="footer-row">
      <div class="footer-column">
        <h4>BİZİ TAKİP ET</h4>
        <div class="mobile-images">
          <div class="image-row">
            <img src="icons/facebook.svg" alt="Resim 1" />
            <img src="icons/instagram.svg" alt="Resim 2" />
            <img src="icons/linkedin.svg" alt="Resim 3" />
          </div>
          <div class="image-row">
            <img src="icons/twitter.svg" alt="Resim 4" />
            <img src="icons/youtube.svg" alt="Resim 5" />
            <img src="icons/pinterest.svg" alt="Resim 6" />
          </div>
        </div>
      </div>
      <div class="footer-column">
        <h4>SPOR TAVSİYELERİ</h4>
        <div class="mobile-images">
          <img src="icons/blogdecathlon.svg" alt="Mobile Image 1" />
        </div>
      </div>
      <div class="footer-column">
        <h4>DECATHLON DENEYİMİNİ MOBİLDE SÜRDÜR</h4>
        <div class="mobile-images">
          <img src="icons/appstore.svg" alt="Mobile Image 1" />
          <img src="icons/googleplay.svg" alt="Mobile Image 2" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
header {
  max-width: 100%;
  display: flex;
  background-color: #ffffff;
  border: 0.1rem solid #d0d5da;
  align-items: center;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
}

.logo img {
  height: 40px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

nav ul li {
  margin-right: 20px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: #ffffff;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
.logo {
  text-decoration: none;
  height: 44px;
  width: 176px;
}
.logo-container {
  justify-content: left;
  width: 300px;
}

.navigation {
  text-decoration: none;
  flex-grow: 1;
}

.menu {
  width: 100%;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 15px;
  align-items: center;
  position: relative;
  height: 65px;
}

.menu-item {
  font-size: medium;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  align-items: center;

  justify-content: space-between;
  color: #000000;
}

.menu-item a:visited {
  color: inherit;
}

.menu-item a {
  text-decoration: none;
}

.menu-item:hover {
  color: #e62020;
}
.search {
  width: 700px;
  height: 47px;
  display: flex;
  align-items: center;
}

.search input[type="text"] {
  border: 0.1rem solid #d0d5da;
  color: #43505c;
  width: 690px;
  height: 44px;
  padding: 5px;

  border-radius: 4px;
  margin-right: 5px;
}

.search button {
  border: 0.1rem solid #d0d5da;
  height: 44px;
  padding: 5px 15px;
  background-color: #fff;
  color: #002663;

  border-radius: 4px;
  cursor: pointer;
}
.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.menu-item {
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
}

.menu-button {
  border: 0.1rem solid #d0d5da;
  border-radius: 0 0 0 6px;
  width: 185px;
  height: 43px;
  display: flex;

  justify-content: center;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
}

.menu-dropdown {
  justify-content: left;
  text-align: left;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.alt-menu-button:hover + .menu-dropdown {
  display: block;
}

.menu-dropdown li {
  padding: 10px;
}

.menu-dropdown li:hover {
  background-color: #ddd;
}

.alt-menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.alt-menu-item {
  font-size: medium;
  text-decoration: none;

  cursor: pointer;
  position: relative;
  align-items: center;

  color: #000000;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
}

.alt-menu-button {
  border: 0.1rem solid #d0d5da;
  border-radius: 6px;
  width: 185px;
  height: 43px;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
}

.divider {
  width: 1px;
  height: 30px;
  background-color: #d0d5da;
  margin: 0 10px;
}

.sidebar {
  width: 200px;
}

.menu-toggle {
  display: none;
}

.menu-toggle-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background-color: #f2f2f2;
}

.menu-icon {
  font-size: 20px;
  margin-right: 5px;
}

.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  padding: 10px;
}

.menu-item a {
  display: block;
  text-decoration: none;
  color: #333333;
}

.menu-item a:hover {
  background-color: #dddddd;
}
.menu-item .logo-sari {
  background-color: yellow;
  transform: skewX(-10deg);
  transform-origin: top left;
}

.menu-item img {
  width: 20px;
  height: 20px;
}
.logo-label {
  font-size: small;
}

.navigation {
  background-color: #007dbc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

.navigation-item {
  display: flex;
  align-items: center;
  color: white;
}

.navigation-item img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.navigation-item span {
  text-align: center;
}

.footer {
  text-align: auto;
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 10px;
}

.footer-column {
  flex: 1 1 auto;
  max-width: 300px;
}

.footer-column h4 {
  font-size: 14px;
  font-weight: bold;
  color: #007dbc;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 5px;
}

.mobile-images {
  display: flex;
  justify-content: auto;
  gap: 10px;
  flex-wrap: wrap;
}

.mobile-images img {
  width: 100%;
  height: auto;
}

.footer-column {
  text-align: left;
}
.image-row {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-basis: 60%;
  margin-bottom: 10px;
}

.image-row img {
  width: 100%;
  height: auto;
}
</style>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
