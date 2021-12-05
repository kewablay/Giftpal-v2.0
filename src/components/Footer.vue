<template>
 <div>
   <h3 class="section-title" id='partners'>Our Partners</h3>
   <footer class="row bg-white">
     <div class="footer-logo col-2 col-sm-6 col-md-2 col-lg-2" >
       <img src="../../public/assets/images/giftpal-logo1.png" alt="">
     </div>
     <div class="col-2 col-sm-6 col-md-2 col-lg-2" >
       <h3 class="footer-text-header">About Us</h3>
       <h3 class="footer-text"><a href="#">Company</a> </h3>
       <h3 class="footer-text"><a href="#">What we do</a> </h3>
     </div>
    
     <div class="col-3 col-sm-6 col-md-3 col-lg-3" >
       <h3 class="footer-text-header">Services</h3>
       <h3 class="footer-text"><a href="#">Peer to peer Gifting</a> </h3>
       <h3 class="footer-text"><a href="#">Group Gifting</a> </h3>
       <h3 class="footer-text"><a href="#">Corporate Gifting</a> </h3>
     </div>
     <div class="col-2 col-sm-6 col-md-2 col-lg-2" >
       <h3 class="footer-text-header">Follow Us</h3>
       <h3 class="footer-text"><a href="#">Facebook</a> </h3>
       <h3 class="footer-text"><a href="#">Instagram</a> </h3>
       <h3 class="footer-text"><a href="#">Twitter</a> </h3>
     </div>
    
     <div class="col-3 col-sm-6 col-md-3 col-lg-3" >
       <form action="#" id='myform'>
         <label for="newsletter" class="newsletter">Subscribe to our newsletter</label>
         <div id="newsletter-input">
           <input type="newsletter" class="form-control" placeholder="Email address" id="newsletter">
           <a href="#" id="go">Go</a>
         </div>
       </form>
    
     </div>
     <hr>
   </footer>
 </div>

</template>

<script>
export default {
  name: "Footer",
};
</script>
