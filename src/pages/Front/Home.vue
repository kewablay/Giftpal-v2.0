<template>
  <div>
    <!-- ----start of first section----- -->
    <section class="landing-page first-section bg--gray">
      <div class="header bg--yellow container">
        <nav class="navbar container">
          <div class="brand">
            <a href="#"
              ><img src="../../../public/assets/images/giftpal-logo1.png" alt=""
            /></a>
          </div>
          <!-- ---- -->
          <span class="nav-toggler" id="nav-toggler"
            ><img src="../../../public/assets/images/menu.png" alt=""
          /></span>
          <!-- --------- -->
          <ul class="nav-item-list" id="nav-item-list">
            <li class="nav-link services">
              <a class="link" href="#"
                >Services
                <span
                  ><img
                    src="../../../public/assets/images/arrow-down.png"
                    alt=""
                /></span>
                <div class="dropdown-content">
                  <a href="#">Peer to peer Gifting</a>
                  <a href="#">Group Gifting</a>
                  <a href="#">Corporate Gifting</a>
                </div>
              </a>
            </li>
            <li class="nav-link">
              <a class="link" href="#partners">Partners</a>
            </li>
            <li class="nav-link">
              <a class="link" href="#how-it-works">How it works</a>
            </li>
          </ul>
        </nav>
        <!-- -----navbar ends------ -->

        <!-- header -->
        <header class="main-header row align-items-center">
          <div class="main-intro-text col-6 col-sm-12 col-lg-6">
            <h3>Gifting shouldn't be occasional</h3>
            <p>Make everyday an occasion</p>
            <div>
              <a class="my-button get-started-btn" href="register.html"
                >Get started</a
              >
            </div>
          </div>

          <div class="col-6 hero-image col-sm-12 col-lg-6">
            <picture>
              <source
                media="(max-width: 576px)"
                srcset="../../../public/assets/images/header-img.png"
              />
              <img
                class="img"
                src="../../../public/assets/images/hero-img.png"
                alt=""
              />
            </picture>
          </div>
        </header>
        <!-- --header ends--- -->
      </div>

      <main class="main-content container">
        <!-- -----gift categories ----- -->
        <div class="gift-category-tab">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link rounded-pill active rounded-pill active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                >Home & Travel</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link rounded-pill"
                id="pills-beauty-tab"
                data-toggle="pill"
                href="#pills-beauty"
                role="tab"
                aria-controls="pills-beauty"
                aria-selected="false"
                >Wellness & Beauty</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link rounded-pill"
                id="pills-food-tab"
                data-toggle="pill"
                href="#pills-food"
                role="tab"
                aria-controls="pills-food"
                aria-selected="false"
                >Food</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link rounded-pill"
                id="pills-fashion-tab"
                data-toggle="pill"
                href="#pills-fashion"
                role="tab"
                aria-controls="pills-fashion"
                aria-selected="false"
                >Fashion</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link rounded-pill"
                id="pills-home-service-tab"
                data-toggle="pill"
                href="#pills-home-service"
                role="tab"
                aria-controls="pills-home-service"
                aria-selected="false"
                >Home service</a
              >
            </li>
            <span id="scroll-btns">
              <button id="button-left">
                <img
                  src="../../../public/assets/images/back-button.png"
                  alt=""
                />
              </button>
              <button id="button-right">
                <img src="../../../public/assets/images/right.png" alt="" />
              </button>
            </span>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <!-- --- card items --- -->
              <div class="row flex-nowrap card-row">
                <div class="card-col col">
                  <div class="card gift-card">
                    <div id="card-inner">
                      <div class="img-div">
                        <img
                          src="../../../public/assets/images/card-img.jpg"
                          alt=""
                        />
                        <!-- --- -->
                      </div>
                      <div class="card-content">
                        <h3 class="card-desc">House Cleaning for 1 month</h3>
                        <div class="btn-group">
                          <a class="price" href="payment.html">Ghc.250</a>
                          <a class="get-it" href="payment.html">Get It</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ------- -->
                <div class="card-col col">
                  <div class="card gift-card">
                    <div id="card-inner">
                      <div class="img-div">
                        <img
                          src="../../../public/assets/images/card-img.jpg"
                          alt=""
                        />
                        <!-- --- -->
                      </div>
                      <div class="card-content">
                        <h3 class="card-desc">House Cleaning for 1 month</h3>
                        <div class="btn-group">
                          <a class="price" href="payment.html">Ghc.250</a>
                          <a class="get-it" href="payment.html">Get It</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ------- -->
                <div class="card-col col">
                  <div class="card gift-card">
                    <div id="card-inner">
                      <div class="img-div">
                        <img
                          src="../../../public/assets/images/card-img.jpg"
                          alt=""
                        />
                        <!-- --- -->
                      </div>
                      <div class="card-content">
                        <h3 class="card-desc">House Cleaning for 1 month</h3>
                        <div class="btn-group">
                          <a class="price" href="payment.html">Ghc.250</a>
                          <a class="get-it" href="payment.html">Get It</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ------- -->
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-beauty"
              role="tabpanel"
              aria-labelledby="pills-beauty-tab"
            >
              <div class="row card-row flex-nowrap" id="gift-card-row">
                <!-- --- card items --- -->
                <div class="card-col col">
                  <div class="card gift-card">
                    <div id="card-inner">
                      <div class="img-div">
                        <img
                          src="../../../public/assets/images/card-img.jpg"
                          alt=""
                        />
                        <!-- --- -->
                      </div>
                      <div class="card-content">
                        <h3 class="card-desc">House Cleaning for 1 month</h3>
                        <div class="btn-group">
                          <a class="price" href="payment.html">Ghc.250</a>
                          <a class="get-it" href="payment.html">Get It</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ------------ -->
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-food"
              role="tabpanel"
              aria-labelledby="pills-food-tab"
            >
              <div class="row card-row flex-nowrap" id="gift-card-row">
                <!-- --- card items --- -->
                <div class="card-col col">
                  <div class="card gift-card">
                    <div id="card-inner">
                      <div class="img-div">
                        <img
                          src="../../../public/assets/images/card-img.jpg"
                          alt=""
                        />
                        <!-- --- -->
                      </div>
                      <div class="card-content">
                        <h3 class="card-desc">House Cleaning for 1 month</h3>
                        <div class="btn-group">
                          <a class="price" href="payment.html">Ghc.250</a>
                          <a class="get-it" href="payment.html">Get It</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ------------ -->
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-fashion"
              role="tabpanel"
              aria-labelledby="pills-fashion-tab"
            >
              <!-- --- card items --- -->
              <div class="card-col col">
                <div class="card gift-card">
                  <div id="card-inner">
                    <div class="img-div">
                      <img
                        src="../../../public/assets/images/card-img.jpg"
                        alt=""
                      />
                      <!-- --- -->
                    </div>
                    <div class="card-content">
                      <h3 class="card-desc">House Cleaning for 1 month</h3>
                      <div class="btn-group">
                        <a class="price" href="payment.html">Ghc.250</a>
                        <a class="get-it" href="payment.html">Get It</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ------------ -->
            </div>
            <div
              class="tab-pane fade"
              id="pills-home-service"
              role="tabpanel"
              aria-labelledby="pills-home-service-tab"
            >
              <div class="row card-row flex-nowrap" id="gift-card-row">
                <!-- --- card items --- -->
                <div class="card-col col">
                  <div class="card gift-card">
                    <div id="card-inner">
                      <div class="img-div">
                        <img
                          src="../../../public/assets/images/card-img.jpg"
                          alt=""
                        />
                        <!-- --- -->
                      </div>
                      <div class="card-content">
                        <h3 class="card-desc">House Cleaning for 1 month</h3>
                        <div class="btn-group">
                          <a class="price" href="payment.html">Ghc.250</a>
                          <a class="get-it" href="payment.html">Get It</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ------------ -->
              </div>
              <!-- ----- -->
            </div>
          </div>
        </div>

        <!-- ----explore section----- -->
        <div class="explore">
          <div class="explore-intro-text row">
            <div class="col-lg-5 explore-intro">
              <h3 class="title">Everyone deserves a gift pal</h3>
              <p>
                We are simplifying thoughtful giving by making gifting an
                everyday thing. We help you put the smiles on the faces of the
                people that really matter to you
              </p>
            </div>
          </div>

          <!-- ---explore cards---- -->
          <div class="explore-cards">
            <div class="row card-row">
              <div class="card-col col col-lg-4">
                <div class="explore-item-container">
                  <div class="explore-card">
                    <div class="inner">
                      <div class="img">
                        <img
                          class="explore-img"
                          src="../../../public/assets/images/exploreimg.png"
                          alt=""
                        />
                      </div>
                      <div class="my-button">
                        <a href="dashboard.html">
                          Explore
                          <span>
                            <img
                              src="../../../public/assets/images/arrow-up.png"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- --- -->
                  <div class="explore-card-content">
                    <h4 class="card-title">Loved ones</h4>
                    <p class="card-desc">
                      Surprise loved ones with the little things that matter.
                      Make everyday an opportunity to make someone feel special
                      through thoughtful giving
                    </p>
                  </div>
                </div>
              </div>
              <!-- ------ -->
              <div class="card-col col col-lg-4">
                <div class="explore-item-container">
                  <div class="explore-card">
                    <div class="inner">
                      <div class="img">
                        <img
                          class="explore-img"
                          src="../../../public/assets/images/exploreimg.png"
                          alt=""
                        />
                      </div>
                      <div class="my-button">
                        <a href="dashboard.html"
                          >Explore
                          <span>
                            <img
                              src="../../../public/assets/images/arrow-up.png"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- --- -->
                  <div class="explore-card-content">
                    <h4 class="card-title">Loved ones</h4>
                    <p class="card-desc">
                      Surprise loved ones with the little things that matter.
                      Make everyday an opportunity to make someone feel special
                      through thoughtful giving
                    </p>
                  </div>
                </div>
              </div>
              <!-- ------ -->
              <div class="card-col col col-lg-4">
                <div class="explore-item-container">
                  <div class="explore-card">
                    <div class="inner">
                      <div class="img">
                        <img
                          class="explore-img"
                          src="../../../public/assets/images/exploreimg.png"
                          alt=""
                        />
                      </div>
                      <div class="my-button">
                        <a href="dashboard.html">
                          Explore
                          <span>
                            <img
                              src="../../../public/assets/images/arrow-up.png"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- --- -->
                  <div class="explore-card-content">
                    <h4 class="card-title">Loved ones</h4>
                    <p class="card-desc">
                      Surprise loved ones with the little things that matter.
                      Make everyday an opportunity to make someone feel special
                      through thoughtful giving
                    </p>
                  </div>
                </div>
              </div>
              <!-- ------ -->
            </div>
          </div>
          <!-- ---end of explore cards---- -->
        </div>
        <!-- ----end of explore section----- -->
      </main>
    </section>
    <!-- ----end of first section---- -->

    <!-- ----second section------- -->
    <section class="second-section bg--white" id="how-it-works">
      <div class="container">
        <div class="row steps-lg">
          <!-- ---steps larger screens--- -->
          <div class="section-intro col-12 col-md-12 col-lg-6">
            <h3 class="title">How it works</h3>
            <p class="intro-desc">
              We are making it as simple as possible for you to put the smile on
              the faces of people
            </p>

            <a href="register.html" class="get-started-btn my-button mt-4"
              >Get started</a
            >
          </div>
          <!-- --steps --- -->
          <div class="steps-col col-12 col-md-12 col-lg-6 ">
            <div class="steppers">
              <img src="../../../public/assets/images/stepper.png" alt="" />
            </div>
            <div id="steps">
              <div class="step">
                <p>Select a gift</p>
                <img
                  src="../../../public/assets/images/carbon_gift.png"
                  alt=""
                />
              </div>
              <div class="step">
                <p>Provide details of the receiver</p>
                <img src="../../../public/assets/images/note.png" alt="" />
              </div>
              <div class="step">
                <p>Make payments</p>
                <img src="../../../public/assets/images/uiw_pay.png" alt="" />
              </div>
              <div class="step">
                <p>Gift code shared with receiver to redeem gift</p>
                <img src="../../../public/assets/images/cil_happy.png" alt="" />
              </div>
              <div class="step">
                <p>Sign up with google</p>
                <img src="../../../public/assets/images/google.png" alt="" />
              </div>
            </div>
          </div>
          <!-- ---steps larger screens ends --- -->
          <!-- end of steps -->
        </div>

        <!-- ---steps mobile ---- -->
        <div class="steps-mobile-col col-12">
          <div class="step-item">
            <img src="../../../public/assets/images/step1.png" alt="" />
            <p>Select a gift</p>
          </div>
          <!-- -->
          <div class="step-item">
            <img src="../../../public/assets/images/step2.png" alt="" />
            <p>Provider receiver info</p>
          </div>
          <!-- -->
          <div class="step-item">
            <img src="../../../public/assets/images/step3.png" alt="" />
            <p>Make payments</p>
          </div>
          <!-- -->
          <div class="step-item">
            <img src="../../../public/assets/images/step4.png" alt="" />
            <p>Receiver receives Code</p>
          </div>
          <!-- -->
          <div class="step-item">
            <img src="../../../public/assets/images/step5.png" alt="" />
            <p>Receiver redeems Code</p>
          </div>
          <!-- -->
        </div>
        <!-- ---steps mobile ends---- -->
      </div>
    </section>

    <!------end of second section---- -->

    <section class="third-section bg--gray">
      <div class="container">
        <h3 class="section-title">
          People are happy
          <span
            ><img src="../../../public/assets/images/happy.png" alt=""
          /></span>
        </h3>

        <!-- ----testimonials section----- -->
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="card testimonial-card-item">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <span
                      ><img
                        src="../../../public/assets/images/testimonial-img.png"
                        alt=""/></span
                    >@ Kofi
                  </div>
                  <div class="col-12">
                    <p>
                      I was struggling to make my girl happy, thanks to Giftpal
                      I cam now make that happen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card testimonial-card-item">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <span
                      ><img
                        src="../../../public/assets/images/testimonial-img.png"
                        alt=""/></span
                    >@ Kofi
                  </div>
                  <div class="col-12">
                    <p>
                      I was struggling to make my girl happy, thanks to Giftpal
                      I cam now make that happen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card testimonial-card-item">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <span
                      ><img
                        src="../../../public/assets/images/testimonial-img.png"
                        alt=""/></span
                    >@ Kofi
                  </div>
                  <div class="col-12">
                    <p>
                      I was struggling to make my girl happy, thanks to Giftpal
                      I cam now make that happen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card testimonial-card-item">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <span
                      ><img
                        src="../../../public/assets/images/testimonial-img.png"
                        alt=""/></span
                    >@ Kofi
                  </div>
                  <div class="col-12">
                    <p>
                      I was struggling to make my girl happy, thanks to Giftpal
                      I cam now make that happen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card testimonial-card-item">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <span
                      ><img
                        src="../../../public/assets/images/testimonial-img.png"
                        alt=""/></span
                    >@ Kofi
                  </div>
                  <div class="col-12">
                    <p>
                      I was struggling to make my girl happy, thanks to Giftpal
                      I cam now make that happen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card testimonial-card-item">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <span
                      ><img
                        src="../../../public/assets/images/testimonial-img.png"
                        alt=""/></span
                    >@ Kofi
                  </div>
                  <div class="col-12">
                    <p>
                      I was struggling to make my girl happy, thanks to Giftpal
                      I cam now make that happen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- end of testimonial section---- -->
        <footerNav />
      </div>
    </section>
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

    runHomeScripts() {
      let navToggle = document.getElementById("nav-toggler");
      let nav = document.getElementById("nav-item-list");
      let pillsTab = document.getElementById("pills-tab");
      let tabs = document.querySelector(".tab-content");
      let activeTab = tabs.querySelector(".active");

      navToggle.onclick = function() {
        navToggle.classList.toggle("active");
        nav.classList.toggle("active");
      };

      document.addEventListener(
        "click",
        () => {
          if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            navToggle.classList.remove("active");
          }
        },
        true
      );

      // news letter form submission

      let newsLetterForm = document.getElementById("myform");

      // gift card scroll

      const buttonLeft = document.getElementById("button-left");
      const buttonRight = document.getElementById("button-right");
      // console.log(buttonLeft);
      // console.log(buttonRight);
      // console.log(screen.width)

      if (screen.width <= 480) {
        buttonLeft.onclick = function() {
          pillsTab.scrollLeft -= 200;
        };
        buttonRight.onclick = function() {
          pillsTab.scrollLeft += 200;
        };
      } else if (screen.width > 480) {
        buttonLeft.onclick = function() {
          let scrollRow = activeTab.firstElementChild;
          scrollRow.scrollLeft -= 200;
        };

        buttonRight.onclick = function() {
          let scrollRow = activeTab.firstElementChild;
          scrollRow.scrollLeft += 200;
        };
      }
    }
  },
  mounted() {
    this.runHomeScripts();
  },
  destroyed() {}
};
</script>

<style scoped>
body {
  background: none !important;
}
.testimonial-card-item {
  border-radius: 0.75rem;
  border: none !important;
  margin-bottom: 2rem;
}
.card-body {
  height: 150px !important;
}
@media (max-width:991px){
.card-body{
    height: 200px !important;
    
  }
}

</style>

<!--<style src="../../../public/assets/css/main.css" />-->
