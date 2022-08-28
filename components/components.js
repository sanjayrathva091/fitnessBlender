function myheader() {
  return `<a href="./index.html"><div id="logo_header">
  <img src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg" alt="logo">
</div></a>
<div id="head_workouts">
  <p>WORKOUTS</p>
  <span class="material-symbols-outlined">arrow_drop_down</span>
  <div>
      <h3>WORKOUT VIDEOS</h3>
      <h3>CUSTOM WORKOUTS</h3>
  </div>
</div>
<div id="head_programs">
  <p>PROGRAMS</p>
  <span class="material-symbols-outlined">arrow_drop_down</span>
  <div>
      <h3>WORKOUT PROGRAMS</h3>
      <h3><a href="./meal.html">MEAL PLANS</a></h3>
      <h3><a href="./pilot.html">PILOT PROGRAMS</a></h3>
      <h3><a href="./routine.html">ROUTINES</a></h3>
  </div>
</div>
<div id="head_healthy_living">
  <p>HEALTHY LIVING</p>
  <span class="material-symbols-outlined">arrow_drop_down</span>
  <div>
      <h3>EXPERT ARTICLES</h3>
      <h3>HEALTHY RECIPES</h3>
      <h3>WELLNESS VIDEOS</h3>
  </div>
</div>
<div id="head_community">
  <p>COMMUNITY</p>
  <span class="material-symbols-outlined">arrow_drop_down</span>
  <div>
      <h3><a href="./community.html">COMMUNITY</a></h3>
      <h3><a href="./blog1.html">BLOG</a></h3>
      <h3><a href="./whatsnew.html">WHAT'S NEW</a></h3>
  </div>
</div>
<div id="head_about">
  <p>ABOUT</p>
  <span class="material-symbols-outlined">arrow_drop_down</span>
  <div>
      <h3>ABOUT</h3>
      <h3>CAREERS</h3>
      <h3>TUTORIALS</h3>
      <h3>TEAMS</h3>
  </div>
</div>
<div id="head_store"><a href="./store.html"><p>STORE</p></a></div>
<div id="head_membership"><p>MEMBERSHIP</p></div>
<div id="head_loginout">
  <div>Hi! Sign In</div>
  <div><p>MY FITNESS</p><span class="material-symbols-outlined">arrow_drop_down</span></div>
  <div class="sub-menu">
      <h3>JOIN FOR FREE</h3>
      <p>Join for free and start building
          and tracking your workouts. 
          get support from other Fitness 
          Blender members and more!
      </p>
      <div><a href="./join.html">JOIN</a></div>
      <div><a href="./signin.html">SIGN IN</a></div>
  </div>
</div>
<div id="head_search"><p><span class="material-symbols-rounded">search</span></p></div>
<div id="head_cart"><a href="./cart.html"><p><span class="material-symbols-rounded">shopping_bag</span></p></a></div>`;
}

function myfooter() {
    return `<div class="container">
    <h2 class="brand -dark"><a href="/"></a>
      <p>WORKOUT COMPLETE<sup>™</sup></p>
    </h2>
    
    <nav class="footer__nav alt-nav">
      <ul>
          <li><a class="demi" href="#">Workouts</a></li>
          <li><a href="#">Workout Videos</a></li>
          <li><a href="#">Custom Workouts</a></li>
          <li><a class="demi" href="#">Programs</a></li>
          <li><a href="#">Workout Programs</a></li>
          <li><a href="#">Meal Plans</a></li>
          <li><a href="#">Pilot Programs</a></li>
          <li><a href="#">Routines</a></li>
      </ul>
      <ul>
        <li><a class="demi" href="#">Healthy Living</a></li>
        <li><a href="#">Fitness</a></li>
        <li><a href="#">Health</a></li>
        <li><a href="#">Nutrition</a></li>
        <li><a href="#">Healthy Recipes</a></li>
        <li><a href="#">Experts</a></li>
      </ul>
      <ul>
        <li><a class="demi" href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">B2B Options</a></li>
      </ul>
      <ul>
        <li><a class="demi" href="#">Membership</a></li>
        <li><a class="demi" href="#">FB Plus</a></li>
        <li><a class="demi" href="#">Community</a></li>
        <li><a class="demi" href="#">Blog</a></li>
        <li><a class="demi" href="#">Contact Us</a></li>
        <li><a class="demi" href="#">FAQ</a></li>
        <li><a class="demi" href="#">Store </a></li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <div class="end">
      <p>Copyright © 2022 Fitness Blender. All rights reserved. <a href="#">Terms of Use</a> <a href="#">Privacy Policy</a></p>
      <ul class="nav-smicons footer-smicons">
        <li class="youtube-smi"><a href="#"><span class="iconfont-youtube"></span><span><i class="fa-brands fa-youtube"></i></span></a></li>
        <li class="pinterest-mi"><a href="#"><span class="iconfont-pinterest"></span><span><i class="fa-brands fa-pinterest-p"></i></span></a></li>
        <li class="facebook-smi"><a href="#"><span class="iconfont-facebook"></span><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
        <li class="instagram-smi"><a href="#"><span class="iconfont-instagram"></span><span><i class="fa-brands fa-instagram"></i></span></a></li>
        <li class="twitter-smi"><a href="#"><span class="iconfont-twitter"></span><span><i class="fa-brands fa-twitter"></i></span></a></li>
      </ul>
    </div>
  </div>`;
}

export { myheader, myfooter };
