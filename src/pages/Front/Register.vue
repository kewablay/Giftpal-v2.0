<template>
  <div class="content-body">
  <section class="container" id="body">
    <div class="row">
      <!-- user profile -->
      <div class="user-profile col-12 col-md-12 col-lg-5">
        <div class="content">
          <img src="../../../public/assets/images/register-img.png" alt="">
          <div class="desc">
            <h3 class="title">Welcome Kofi</h3>
            <p>Explore the new culture of thoughtful gifting. Oh we have made it easier for you to sign in or out through google  </p>
          </div>
        </div>
      
      </div>
      
      <!-- login form start  -->
      
      <div class="col-12 col-md-12 col-lg-7">
        <div class="card">
          <form class="signup-form">
            <h4 class="text-center">Create an account</h4>
            <div class="form-group">
              <a id="google-link" href="#">
                <div class="link">
                  <span><img src="../../../public/assets/images/google.png" alt=""></span>
                  Sign Up with Google
                </div>
              </a>
            </div>
            <div class="form-group text-center"><p id="or">or</p></div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email" required="required">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Phone" required="required">
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-blue btn-block">Sign Up</button>
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
  @media (min-width: 991.98px) {
    .content-body{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  }
  .content-body{
    background: url("../../../public/assets/images/signup-bg.png") center/cover fixed no-repeat !important
  }
  /* ----user profile---- */
  .user-profile{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }
  
  .content{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  
  .title{
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    color: white;
  }
  
  .desc{
    margin-top: 1.5rem;
  }
  
  .desc p{
    font-size: 23px;
    font-weight: 300;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
    width: 436px;
    color: white;
  }
  
  .container{
    width:1320px;
  }
  @media (max-width: 541px){
    .container{
      max-width: 540px !important;
    }
  }
  
  
  
  /* ---login section---- */
  .card{
    padding: 2rem 7rem;
    height: 668px;
    border-radius: 13px !important;
    color: #A6A8AB;
  }
  
  .signup-form h4{
    margin-bottom: 5.4rem;
    font-size: 30px;
    font-weight: 300;
  }
  #or{
    font-size: 30px;
    font-weight: 300
  }
  
  .form-group{
    margin-bottom:2rem;
  }
  
  #google-link{
    text-decoration: none;
    color: #A6A8AB;
    font-size: 23px;
    font-weight: 300;
  }
  
  .link{
    background: #5D43A70A;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card input{
    text-align: center;
    padding: 0 1rem;
    background: #5D43A70A;
  }
  .card input::placeholder{
    color: #A6A8AB;
    font-size: 23px;
    font-weight: 200;
  }
  
  .card input, .card button,.link{
    height: 3.75rem;
    width: 100%;
    border-radius: 13px;
  }
  
  .card span{
    margin-right: 1rem;
  }
  
  .card button{
    background: #5D43A7 !important;
    color: white;
    font-size: 30px;
    font-weight: 200;
  }
  
  .card button:hover{
    color: white;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.411);
  }
  
  
  /* ------media queries------ */
 
  
  
  @media (max-width: 991.98px) {
    .main-content{
      margin-top: 3rem;
      margin-bottom: 5rem;
    }
    .title{
      font-size:40px;
      font-weight: 600;
    }
    .desc p{
      font-size: 20px;
      width: 400px;
      line-height: 25px;
    }
    .signup-form h4{
      font-size:25px;
      margin-bottom: 3rem;
      margin-top: 1rem;
    }
    #google-link{
      font-size: 20px;
      font-weight: 300;
    }
    .card input::placeholder{
      font-size: 20px;
    }
    .card button{
      font-size: 25px;
    }
    
  }
  
  @media (max-width: 767.98px) {
    .card{
      padding: 1rem 5rem;
    }
    .desc p{
      padding: 1rem 3rem;
    }
  }
  
  @media (max-width: 575.98px) {
    .card{
      padding: 2rem 3rem;
      /* width: 250px; */
    }
    .signup-form h4{
      font-size:22px;
    }
    #google-link{
      font-size: 18px;
    }
    .card input::placeholder{
      font-size: 18px;
    }
    .card button{
      font-size: 20px;
    }
  }
</style>
