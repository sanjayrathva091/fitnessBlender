function createDropdownSection(title, items) {
  return `
    <div class="header-section">
      <p>${title}</p>
      <span class="material-symbols-outlined">arrow_drop_down</span>
      <div>
        ${items.map(item => `<h3>${item}</h3>`).join('')}
      </div>
    </div>
  `;
}

function myheader() {
  return `
    <div id="logo_header">
      <img src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg" alt="logo">
    </div>
    ${createDropdownSection('WORKOUTS', ['WORKOUT VIDEOS', 'CUSTOM WORKOUTS'])}
    ${createDropdownSection('PROGRAMS', ['WORKOUT PROGRAMS', 'MEAL PLANS', 'PILOT PROGRAMS', 'ROUTINES'])}
    ${createDropdownSection('HEALTHY LIVING', ['EXPERT ARTICLES', 'HEALTHY RECIPES', 'WELLNESS VIDEOS'])}
    ${createDropdownSection('COMMUNITY', ['COMMUNITY', 'BLOG', "WHAT'S NEW"])}
    ${createDropdownSection('ABOUT', ['ABOUT', 'CAREERS', 'TUTORIALS', 'TEAMS'])}
    <div id="head_store"><p>STORE</p></div>
    <div id="head_membership"><p>MEMBERSHIP</p></div>
    <div id="head_loginout">
      <div>Hi! Sign In</div>
      <div>
        <p>MY FITNESS</p>
        <span class="material-symbols-outlined">arrow_drop_down</span>
      </div>
      <div class="sub-menu">
        <h3>JOIN FOR FREE</h3>
        <p>Join for free and start building and tracking your workouts. Get support from other Fitness Blender members and more!</p>
        <button>JOIN</button>
        <button>SIGN IN</button>
      </div>
    </div>
    <div id="head_search"><p><span class="material-symbols-rounded">search</span></p></div>
    <div id="head_cart"><p><span class="material-symbols-rounded">shopping_bag</span></p></div>
  `;
}

function createFooterNavSection(title, links) {
  return `
    <ul>
      <li><a class="demi" href="#">${title}</a></li>
      ${links.map(link => `<li><a href="#">${link}</a></li>`).join('')}
    </ul>
  `;
}

function myfooter() {
  return `
    <div class="container">
      <h2 class="brand -dark"><a href="/"></a>
        <p>WORKOUT COMPLETE<sup>™</sup></p>
      </h2>
      <nav class="footer__nav alt-nav">
        ${createFooterNavSection('Workouts', ['Workout Videos', 'Custom Workouts'])}
        ${createFooterNavSection('Programs', ['Workout Programs', 'Meal Plans', 'Pilot Programs', 'Routines'])}
        ${createFooterNavSection('Healthy Living', ['Fitness', 'Health', 'Nutrition', 'Healthy Recipes', 'Experts'])}
        ${createFooterNavSection('About', ['Careers', 'Tutorials', 'Our Team', 'B2B Options'])}
        ${createFooterNavSection('Membership', ['FB Plus', 'Community', 'Blog', 'Contact Us', 'FAQ', 'Store'])}
      </nav>
    </div>
    <div class="container">
      <div class="end">
        <p>Copyright © 2022 Fitness Blender. All rights reserved. <a href="#">Terms of Use</a> <a href="#">Privacy Policy</a></p>
        <ul class="nav-smicons footer-smicons">
          ${['youtube', 'pinterest', 'facebook', 'instagram', 'twitter'].map(
            platform => `
              <li class="${platform}-smi">
                <a href="#"><span class="iconfont-${platform}"></span><span><i class="fa-brands fa-${platform}"></i></span></a>
              </li>
            `
          ).join('')}
        </ul>
      </div>
    </div>
  `;
}

export { myheader, myfooter };
