<template>
  <div class="content-body">
    <section class="full-content-container bg--col" id="body">
      <div class="wrapper container">
        <div class="main-container container row">
          <!-- ---wait list form starts  -->
          <div class="wait-list-form col-12 col-md-12 col-lg-5 col-xl-5">
            <div class="intro">
              <div class="title">
                <h3>Everyone Deserves a giftpal like you</h3></div>
              <div class="desc"><p>We are working on making gifting a non-occasional thing. We are redefing thoughful gifting giving with the little things that matter. Tell your friends about us and stand a chance of winning some amazing giveaways once we go live</p> </div>
            </div>
          
            <!-- ---form section starts ---- -->
            <form class="row wait-form">
              <div class="credentials col-12">
                <div class="row g-4 form-group">
                  <div class="col-12 col-md-6 col-lg-6 ">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder="Email" id="email" required="required">
                  </div>
                  <!-- ----- -->
                  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" placeholder="Kofi" id="name" required="required">
                  </div>
                  <!-- ------ -->
              
                </div>
                <!-- ---- -->
                <div class="row g-4 form-group">
                  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" placeholder="0554349393" id="phone" required="required">
                  </div>
                  <!-- ------ -->
                  <div class="col-12 col-md-6 col-lg-6 ">
                    <label for="city">City</label>
                    <input type="text" class="form-control" placeholder="Kumasi" id="city" required="required">
                  </div>
                </div>
                <!-- ---- -->
                <div class="row g-4 form-group">
                  <div class="col-12">
                    <button type="submit" id="cta">Get early access</button>
                  </div>
                </div>
              </div>
            </form>
            <!-- ---form section ends  ---- -->
          </div>
          <!-- ---wait list form ends  -->
        
        
          <!-- --hero image start ---- -->
          <div class="hero-image col-12 col-md-12 col-lg-7 col-xl-7  ">
            <picture>
              <source media="(max-width: 991px)" srcset="../../../public/assets/images/waitlist-img2.png">
              <img class="img-fluid" src="../../../public/assets/images/waitlist-img.png" alt="">
            </picture>
          </div>
          <!-- ----hero image ends -->
        </div>
      
        <footer class="container">
          <li><a href="#">Contact us here</a></li>
          <li><a href="#">0554349393</a></li>
          <li><a href="#">mygiftpal@gmail.com</a></li>
          <li>
            <a href="#">
              <span><img src="../../../public/assets/images/twitter.png" alt=""></span> <span id='ig'><img src="../../../public/assets/images/instagram.png" alt=""></span>mygiftpal
            </a>
          </li>
        </footer>
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

<style scoped>
  .content-body{
    background: url("../../../public/assets/images/signup-bg.png") center/cover fixed no-repeat
  }
  @media (min-width: 991.98px) {
    .content-body{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
  }
  .bg--col{
    background: #5D43A7;
  }
  
  .full-content-container{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* .wrapper{
      padding-top: 6rem;
  } */
  
  .main-container{
    display: flex;
    /* flex-flow: column-reverse; */
  }
  
  /* -----intro section starts ---- */
  .title h3{
    font-size: 50px;
    font-weight: 700;
    color: #21F9D2;
  }
  
  .intro p{
    margin-top: 1rem;
    font-size: 15px;
    font-weight: 200;
    line-height: 16px;
    color: #FFFFFF;
    
  }
  /* -----intro section ends ---- */
  label{
    font-size: 15px;
    font-weight: 400;
    color: rgb(46, 43, 43);
  }
  input{
    height: 3.4rem;
    border-radius: 12px !important;
  }
  #cta{
    width: 100%;
    height: 55px;
    background: #21F9D2;
    border-radius: 12px;
    color: white;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  
  .credentials .row{
    margin-top: 2px;
  }
  .hero-image{
    display: flex;
    justify-content: flex-end;
  }
  
  
  /* ----footer section starts  */
  footer{
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  footer li{
    list-style-type: none;
    margin-top: 1rem;
    margin-right: 3.6rem;
  }
  
  footer a{
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 400;
  }
  
  footer a:hover{
    color: white;
  }
  #ig{
    margin-right: .5rem;
  }
  
  /* ----footer section ends  */
  
  
  /* --- media queries ---- */
  @media (max-width: 1200px) {
    .title h3{
      font-size: 40px;
    }
    
    input{
      height: 3rem;
    }
    #cta{
      height: 2.8rem;
    }
    .credentials .row{
      margin-top: 0;
    }
  }
  @media (max-width: 992px) {
    .title h3{
      font-weight: 500;
      margin-top: 1rem;
    }
    .intro p{
      font-weight: 100;
    }
    #cta{
      font-size: 18px;
      font-weight: 200;
    }
    .hero-image{
      justify-content: center;
    }
    footer{
      justify-content: center;
      margin-bottom: 3rem;
    }
    footer li{
      margin-bottom: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    .title h3{
      font-size: 34px;
      font-weight: 500;
      margin-top: 1rem;
    }
    .intro p{
      font-weight: 100;
      font-size: 13px;
    }
    input::placeholder{
      font-size: 13px;
    }
    
    footer a{
      font-size: 14px;
    }
    footer li{
      margin-bottom: 0;
    }
  }
</style>
