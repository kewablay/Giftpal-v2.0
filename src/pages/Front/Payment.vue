<template>
  <div class="content-body">
    <section class="main-content container">
      <div class="row">
        <!-- ----selected gift---- -->
        <div
          class="selected-gift container col-12 col-md-12 col-lg-12 col-xl-5"
        >
          <div class="back">
            <router-link to="/" id="back-button"
              ><img src="../../../public/assets/images/back-button.png" alt=""
            /></router-link>
          </div>
          <div class="content">
            <img src="../../../public/assets/images/payment-img.png" alt="" />
            <div class="desc">
              <h3 class="title">House Cleaning for 1 month</h3>
              <h4>Description</h4>
              <p>
                Surprise loved ones with the little things that matter. Make
                everyday an opportunity to make someone feel special through
                thoughtful giving
              </p>
            </div>
            <div class="btn-group">
              <a class="price" href="#">Ghc.250</a>
              <a class="get-it" href="#">Get It</a>
            </div>
          </div>
        </div>

        <!----- payment section---- -->

        <div class="col-12 col-md-12 col-lg-12 col-xl-7">
          <div class="card" id="main-card">
            <form class="row payment-form">
              <div class="credentials col-12 col-xl-7">
                <div class="row form-group">
                  <div class="col-12">
                    <label for="name">Name</label>
                  </div>
                  <div class="input-grp col-12 col-lg-12">
                    <input
                      type="name"
                      class="form-control"
                      id="name"
                      placeholder="First name"
                      required="required"
                    />
                    <input
                      type="name"
                      class="form-control"
                      placeholder="Last name"
                      required="required"
                    />
                  </div>
                </div>
                <!-- -- -->
                <div class="row g-1 form-group">
                  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <label for="phone">Phone</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone"
                      id="phone"
                      required="required"
                    />
                  </div>
                  <!-- ------ -->
                  <div class="col-12 col-md-6 col-lg-6 ">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      id="email"
                      required="required"
                    />
                  </div>
                </div>
                <!-- -- -->
                <div class="row form-group">
                  <div class="col-12">
                    <label for="location">Location</label>
                  </div>
                  <div class="col-12 col-md-8 col-lg-8">
                    <input
                      type="location"
                      class="form-control"
                      placeholder="Location"
                      id="location"
                      required="required"
                    />
                  </div>
                </div>
                <!-- --- -->
                <div class="row form-group">
                  <div class="col-12">
                    <label for="note">Complementary note</label>
                  </div>
                  <div class="col-12 col-lg-12">
                    <textarea
                      class="form-control"
                      id="note"
                      rows="3"
                      placeholder="Hi Anna, I knew you had a stressful week. Release of the stress with this"
                    ></textarea>
                  </div>
                </div>
                <!-- --- -->
                <div class="form-group sign-up">
                  <a id="google-link" href="#">
                    <div class="link">
                      Sign Up to continue
                      <span
                        ><img
                          src="../../../public/assets/images/google.png"
                          alt=""
                      /></span>
                    </div>
                  </a>
                </div>
                <!-- ---- -->
              </div>
              <!-- ---summary section -->
              <div class="summary col-12 col-xl-5">
                <h3 class="mt-0 mb-1">Order Summary</h3>
                <div class="card summary-card">
                  <h4 class="mt-0">2 Months house cleaning services</h4>
                  <hr />
                  <div class="card-item">
                    <p>To: <span>Ama Kofi</span></p>
                  </div>
                  <div class="card-item">
                    <p>From: <span>Nick Sam</span></p>
                  </div>
                  <hr />
                  <div class="card-item">
                    <p id="total">Total <span>GHC250.00</span></p>
                  </div>
                  <button class="btn btn-success" type="submit">
                    Pay with Momo
                  </button>
                  <div class="other-options">
                    <span>Or</span>
                    <span
                      ><img
                        src="../../../public/assets/images/Mastercard-Logo 1.png"
                        alt=""
                    /></span>
                    <span
                      ><img
                        src="../../../public/assets/images/visa-card.png"
                        alt=""
                    /></span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
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
    }
  },
  mounted() {},
  destroyed() {}
};
</script>

<!--<style src="../../../public/assets/css/payment.css" scoped />-->

<style scoped>
.content-body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5 !important;
}
.main-content {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/* ---selected gift--- */

#back-button {
  border-radius: 13px;
  background: #36e1b8;
  margin-right: 1rem;
  position: absolute;
  top: 2%;
  left: 2%;
}
.selected-gift {
  display: flex;
}
.selected-gift .content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 25px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: #212529;
}
.desc {
  width: 22.7rem;
}
.desc h4 {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
}
.desc p {
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}

.btn-group {
  background: #36e1b852;
  border-radius: 50px;
  width: 14.7rem;
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
  padding: 1rem 1.4rem;
  background: #36e1b8;
  border-radius: 50px;
}

.get-it {
  padding: 1rem 1.4rem;
}

/* -----end of selected gift----  */

/* ----payment section ---- */
#main-card {
  background: #36e1b80f !important;
}
#main-card {
  padding: 4rem 2rem;
  /* height:659px; */
  border-radius: 13px !important;
  color: #a6a8ab;
}

.form-group {
  margin-bottom: 1rem;
}

.input-grp {
  display: flex;
}
#name {
  margin-right: 0.3rem;
}

.form-group label {
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
}

.card input {
  padding: 0 1rem;
  height: 2.25rem;
  font-size: 11px;
  font-weight: 300;
  /* width: 9.8rem; */
  border-radius: 6px;
}
.card input::placeholder,
textarea::placeholder {
  color: #00000044 !important;
  font-size: 11px !important;
  font-weight: 300 !important;
  letter-spacing: 0em;
  text-align: left;
}
textarea {
  resize: none !important;
  font-size: 11px !important;
  height: 86px !important;
}

.sign-up {
  margin-top: 2rem;
}

#google-link {
  text-decoration: none;
  color: #00000078;
  font-weight: 400;
  font-size: 15px;
}
#google-link span {
  margin-left: 0.5rem;
}
/* --summary section-- */
.summary {
  color: #00000080;
}

.summary .summary-card {
  height: 90%;
  padding: 1.5rem;
  border-radius: 10px;
}

.summary h3 {
  font-size: 15px;
  font-weight: 400;
}

.summary h4 {
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
}

.summary p {
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
}

.card-item {
  width: 100%;
  padding: 0.2rem;
  border-radius: 4px;
}

.card-item:nth-child(3) {
  background: #36e1b814;
  margin-bottom: 1rem;
}
.card-item:nth-child(4) {
  background: #c9e13614;
}
button {
  background: #36e1b8 !important;
}
.summary-card a {
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 15px;
}
.card-item span {
  float: right;
}

.other-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

/* ----media queries ---- */
@media (min-width: 1199.98px) {
  #main-card {
    height: 659px;
  }
}

@media (max-width: 1199.98px) {
  .selected-gift {
    justify-content: center;
    padding-top: 3rem;
    margin-bottom: 3rem;
  }
  #back-button {
    position: absolute;
    top: 4%;
    left: 10%;
  }
  .title {
    margin-top: 1rem;
  }
  .btn-group {
    width: 100%;
  }
  .price {
    padding: 1rem 15%;
  }
  .sign-up {
    margin-bottom: 2rem;
  }
}

@media (max-width: 575.98px) {
  #back-button {
    position: absolute;
    top: 3%;
    left: 5%;
  }

  .selected-gift {
    width: 70%;
  }
}

@media (max-width: 375.98px) {
  .content img {
    width: 90%;
  }
  .desc {
    width: 90%;
  }
  .title {
    font-size: 23px;
    font-weight: 500;
    line-height: 30px;
  }

  .desc h4 {
    font-size: 23px;
    font-weight: 300;
  }
  .desc p {
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
  }

  .btn-group {
    background: #36e1b852;
    border-radius: 50px;
    width: 14.7rem;
    margin: auto 1rem;
    /* margin-bottom: 1rem; */
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
    padding: 1rem 1.4rem;
    background: #36e1b8;
    border-radius: 50px;
  }

  .get-it {
    padding: 1rem 1.4rem;
  }
}
</style>
