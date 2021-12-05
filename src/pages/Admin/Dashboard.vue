<template>
  <div class="content-body">
    <div class="main-content">
      <div id="side-bar">
        <div class="container side-content">
          <div class="menus">
            <img
              class="logo"
              src="../../../public/assets/images/sidebar-logo.png"
              alt=""
            /><span id="close" onClick="hideSidebar()"
              ><img src="../../../public/assets/images/close.png" alt=""
            /></span>
            <li>
              <a href="#">
                <span
                  ><img src="../../../public/assets/images/home.png" alt=""
                /></span>
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  ><img
                    src="../../../public/assets/images/categories.png"
                    alt=""
                /></span>
                Categories
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  ><img src="../../../public/assets/images/settings.png" alt=""
                /></span>
                Settings
              </a>
            </li>
          </div>
          <li class="logout">
            <a href="#">
              <span
                ><img src="../../../public/assets/images/logout.png" alt=""
              /></span>
              Logout
            </a>
          </li>
        </div>
      </div>
      <div class="main-content-wrapper" id="content-area">
        <div class="wrapper">
          <nav class="navbar">
            <a href="#" id="main-logo">
              <img
                src="../../../public/assets/images/giftpal-logo1.png"
                alt=""
              />
            </a>
            <a href="#" id="sidebar-toggle">
              <img src="../../../public/assets/images/side-icon.png" alt="" />
            </a>
            <form class="form-inline my-2 my-lg-0">
              <div>
                <span id="search"
                  ><img src="../../../public/assets/images/search.png" alt=""
                /></span>
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for gifts"
                  aria-label="Search"
                />
              </div>
            </form>

            <ul class="nav-items" id="nav-items">
              <a href="#">Services</a>
              <a href="#">Partners</a>
              <a href="#">How it works</a>
            </ul>
            <a href="#" id="nav-toggle"
              ><img src="../../../public/assets/images/menu.png" alt=""
            /></a>
          </nav>
          <!-- ---nav ends---  -->

          <!-- -----gifts section----- -->
          <div class="row">
            <div class="col-12">
              <h3 class="title">Gifts for Loved Ones</h3>
            </div>
            <div class="row gift-cards-section" style="margin-left: 0">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <div>
                      <h4>Airtime</h4>
                    </div>
                    <p>
                      I was struggling to make my girl happy, thanks to Giftpal I
                      cam now make that happen
                    </p>
                    <a href="#" class="card-btn">Buy Airtime</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card" style="background: #ffc107;">
                  <div class="card-body">
                    <h4>Mobile Data</h4>
                    <p>
                      Top up your friends and family no matter where there are in
                      the world.
                    </p>
                    <a href="#" class="card-btn">Buy Data</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card" style="background: #36E1B8;">
                  <div class="card-body">
                    <h4>Bills</h4>
                    <p>
                      Pay Cable TV, Electricity and WiFi bills for your friends
                      and family
                    </p>
                    <a href="#" class="card-btn">Buy Data</a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <!-- ---Browse section----- -->
          <section class="browse-section">
            <div id="browse-section-title">
              <h3 class="browse">Browse</h3>
              <div class="scroll-buttons">
                <button id="button-left">
                  <img
                    src="../../../public/assets/images/back-button.png"
                    alt=""
                  />
                </button>

                <button id="button-right">
                  <img src="../../../public/assets/images/right.png" alt="" />
                </button>
              </div>
            </div>

            <div class="services-container" id="services-container">
              <div class="browse-card">
                <img
                  src="../../../public/assets/images/browse-img.png"
                  alt=""
                />
                <div class="desc">
                  <h3 class="service-title">Lunch from Golden Tulip</h3>
                  <p>Comes with a complementary Cake</p>
                </div>
                <div class="btn-group">
                  <a class="price" href="#">Ghc.250</a>
                  <a class="get-it" href="#">Get It</a>
                </div>
              </div>
              <!-- ----- -->
              <div class="browse-card">
                <img
                  src="../../../public/assets/images/browse-img.png"
                  alt=""
                />
                <div class="desc">
                  <h3 class="service-title">Lunch from Golden Tulip</h3>
                  <p>Comes with a complementary Cake</p>
                </div>
                <div class="btn-group">
                  <a class="price" href="#">Ghc.250</a>
                  <a class="get-it" href="#">Get It</a>
                </div>
              </div>
              <!-- ----- -->
              <div class="browse-card">
                <img
                  src="../../../public/assets/images/browse-img.png"
                  alt=""
                />
                <div class="desc">
                  <h3 class="service-title">Lunch from Golden Tulip</h3>
                  <p>Comes with a complementary Cake</p>
                </div>
                <div class="btn-group">
                  <a class="price" href="#">Ghc.250</a>
                  <a class="get-it" href="#">Get It</a>
                </div>
              </div>
              <!-- ----- -->
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import "vue-loading-overlay/dist/vue-loading.css";
import footerNav from "../../components/Footer.vue";

export default {
  name: "Talent",
  data() {
    return {
      isLoading: false,
      fullPage: true,
      height: 128,
      width: 128,
      list: [],
      talents: [],
      filter_all: "all",
      categorised_talents: []
    };
  },
  components: {
    Loading: () => import("vue-loading-overlay"),
    footerNav
  },
  methods: {
    getTalents() {
      return new Promise((resolve, reject) => {
        this.isLoading = true;
        axios
          .get(`${process.env.VUE_APP_JOB_FAIR_RESEARCH_URL}/getTalents`)
          .then(res => {
            let data = res.data.data;
            let filtered_data = data.filter(e => {
              return e["is_available"] === true;
            });
            this.talents = filtered_data;
            this.list = filtered_data;
            $(".st0").addClass("active");
            resolve("done");
          })
          .catch(err => {
            reject(err);
          })
          .finally(() => {
            this.isLoading = false;
          });
      });
    },
    setSlider(){
      if(window.innerWidth<= 768){
        $('.gift-cards-section').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
        });
      }
    }
  },
  mounted() {
    this.setSlider()
  },
  destroyed() {}
};
</script>

<!--<style src="../../../public/assets/css/payment.css" scoped />-->

<style scoped>
.content-body {
  background: none;
}

>>>.slick-next {
   right: 0px !important;
  z-index: 2;
 }

>>> .slick-prev {
  left: 0 !important;
  z-index: 2;
}

>>> .slick-prev:before,>>>.slick-next:before{
  color:black !important;
}
@media (max-width:567px){
  .title{
    font-size:25px !important;
  }
}

@media (min-width: 991.98px) {
  .content-body {
    height: 100vh;
    /*display: flex;*/
    justify-content: center;
    align-items: center;
  }
}
a {
  text-decoration: none;
}

/* ----main content section---- */
.main-content {
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #e5e5e5;
  padding-bottom: 0;
}
#side-bar {
  width: 25%;
  min-height: 100%;
  /* background: #5D43A7; */
  background: url("../../../public/assets/images/side-bg.png") center/cover;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
}

.logo {
  width: 200px;
  height: 50px;
}

.main-content-wrapper {
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 85%;
  height: 100%;
}
/* ----side bar content */
.sidebar-slider {
  display: none;
}

.side-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.side-content li {
  list-style-type: none;
  margin: 3rem 2rem;
  transition: transform 0.2s ease-out;
}
.logout {
  margin-bottom: 0;
}
.side-content a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
}
.side-content li:hover,
.side-content li:hover a {
  transform: translateX(1.5rem);
  color: white;
}

.side-content span {
  margin-right: 0.5rem;
}
.logo {
  margin: 2rem 2rem 4rem 2rem;
}
#close {
  display: none;
  position: absolute;
  padding: 1rem;
  top: 2rem;
  right: 4%;
}

/* ----side bar content ends  */

/* ---main content wrapper ----  */

/* navbar starts  */
.navbar #main-logo {
  display: none;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.nav-items {
  padding-left: 0;
  margin-bottom: 0;
}
.nav-items a {
  text-decoration: none;
  color: #5027c3;
  margin: 0 1.5rem;
  font-size: 20px;
  font-weight: 400;
  padding: 0.5rem;
}
.nav-items a:hover {
  border-radius: 5rem;
  background: #5e43a7be;
  color: white;
}
#sidebar-toggle {
  display: none;
}
#nav-toggle {
  display: none;
}

input {
  height: 36px;
  padding: 1rem;
  padding-left: 2.5rem !important;
  border-radius: 21px !important;
  margin-right: 1.5rem;
}
input::placeholder {
  color: #00000038 !important;
}
form div {
  position: relative;
}
#search {
  position: absolute;
  top: 18%;
  left: 5%;
}
/* navbar ends */

/* ---gift cards section */
.title {
  color: #5d43a7;
  font-size: 35px;
  font-weight: 400;
  margin: 2rem 0;
}
.gift-cards {
  display: flex;
  gap: 2rem;
  /* flex-wrap: wrap; */
}

.gift-cards .card {
  height: 162px;
  flex: 0 1 278px;
  border-radius: 16px;
  padding: 1rem;
  transition: box-shadow 0.2s ease-out;
}
.gift-cards .card:hover {
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.25);
}

/* --card colors --- */
.card:nth-child(1) {
  background: #ff3d00;
}
.card:nth-child(2) {
  background: #ffc107;
}
.card:nth-child(3) {
  background: #36e1b8;
}
/* end of card colors */

.gift-cards .card h4 {
  font-size: 17px;
  font-weight: 700;
  color: white;
}
.gift-cards .card p {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: white;
}

.card-btn {
  text-decoration: none;
  background-color: white;
  padding: 7px 10px;
  width: 6rem;
  font-size: 13px;
  font-weight: 400;
  color: #5d43a7;
  border-radius: 14px;
}

/* ---gift cards section ends */

/*----browse section starts ---- */
#browse-section-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
  margin-top: 3rem;
}

#browse-section-title button {
  border-radius: 12px;
  border: 1px solid rgba(245, 245, 245, 0.432);
}

.browse {
  font-size: 30px;
  color: #5d43a7;
}

.services-container::-webkit-scrollbar {
  display: none;
}

.services-container {
  display: flex;
  gap: 2rem;
  /* flex-wrap: wrap; */
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.browse-card .desc {
  margin-top: 1rem;
}
.browse-card {
  flex: 1 1 278px;
}
.browse-card img {
  transition: transform 0.2s ease-out;
}
.browse-card:hover img {
  transform: scale(1.04);
}

.service-title {
  font-size: 20px;
  font-weight: 400;
}
.desc p {
  font-size: 15px;
  font-weight: 400;
}
.btn-group {
  background: #36e1b852;
  border-radius: 50px;
  width: 14rem;
  margin-bottom: 1rem;
  align-self: flex-start;
}

.btn-group a {
  text-decoration: none;
  color: #5d43a7;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}

.price {
  padding: 0.5rem 1rem;
  background: #36e1b8;
  border-radius: 50px;
}

.get-it {
  padding: 0.5rem 1rem;
}
.card-body {
  color: white;
}
.card {
  border-radius: 16px;
  margin-bottom: 2rem;
  height: 191px;
}

.card:hover {
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.25);
}
@media (max-width: 480px) {
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
/*----browse section ends ---- */

/* ---main content wrapper ends  ----  */

/* ---media queries ---- */
@media (max-width: 1200px) {
  .gift-cards .card {
    padding: 0.7rem;
  }
}

@media (max-width: 1190px) {
  .nav-items a {
    font-size: 18px;
    margin: 0 1rem;
  }
  input {
    margin-right: 1rem;
  }
  .wrapper {
    width: 90%;
  }
}

@media (max-width: 992px) {
  #side-bar {
    position: absolute;
    width: 300px;
    left: -300px;
    transition: left 0.4s ease-out;
    z-index: 1000;
  }
  .sidebar-slider {
    display: block;
  }
  #side-bar.active {
    left: 0;
  }
  .main-content-wrapper {
    width: 100%;
  }
  .wrapper {
    width: 90%;
  }
  #sidebar-toggle {
    display: block;
  }
  #close {
    display: block;
  }
  .gift-cards {
    flex-wrap: nowrap;
  }
}

@media (max-width: 768px) {
  .nav-items {
    display: block;
    background: whitesmoke;
  }

  #nav-toggle {
    display: block;
  }

  .nav-items {
    display: none;
    position: absolute;
    top: 4.5rem;
    width: 100%;
    padding-left: 0;
    z-index: 1000;
  }
  .nav-items.active {
    display: block;
  }
  .nav-items a {
    display: block;
    width: 100%;
  }

  .nav-items a {
    padding: 0.5rem 2rem;
    margin: 0;
  }
  .nav-items a:hover {
    border-radius: 0px;
    background: #a8a8aabe;
    color: #5027c3;
  }
  .gift-cards {
    flex-wrap: wrap;
  }
}
@media (max-width: 652px) {
  .gift-cards {
    justify-content: center;
  }
  .gifts h3 {
    text-align: center;
  }
}

@media (min-width: 653px) {
  .gift-cards {
    flex-wrap: nowrap !important;
  }
}

@media (max-width: 480px) {
  .navbar form {
    display: none;
  }

  .gifts h3 {
    font-size: 24px;
    line-height: 36px;
  }

  .navbar #main-logo {
    display: block;
  }

  #main-logo img {
    width: 70px;
    height: 20px;
  }

  #sidebar-toggle {
    display: none;
  }

  #browse-section-title {
    display: none;
  }

  #services-container {
    margin-top: 4rem;
  }

  /* gift-cards section */
  .gift-cards {
    width: 275px;
    height: 301px;
    margin: auto;
  }

  .gift-cards .card {
    height: 301px;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .gift-cards .card-inner {
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .gift-cards .card-inner p {
    text-align: center;
  }
}
</style>
