import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="banner">
        <div class="w3l_banner_nav_left"></div>
        <div class="w3l_banner_nav_right">
          <section class="slider">
            <div class="flexslider">
              <ul class="slides">
                <li>
                  <div class="w3l_banner_nav_right_banner">
                    <h3>
                      Make your <span>food</span> with Spicy.
                    </h3>
                    <div class="more">
                      <a
                        href="products.html"
                        class="button--saqui button--round-l button--text-thick"
                        data-text="Shop now"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="w3l_banner_nav_right_banner1">
                    <h3>
                      Make your <span>food</span> with Spicy.
                    </h3>
                    <div class="more">
                      <a
                        href="products.html"
                        class="button--saqui button--round-l button--text-thick"
                        data-text="Shop now"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="w3l_banner_nav_right_banner2">
                    <h3>
                      upto <i>50%</i> off.
                    </h3>
                    <div class="more">
                      <a
                        href="products.html"
                        class="button--saqui button--round-l button--text-thick"
                        data-text="Shop now"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <link
            rel="stylesheet"
            href="css/flexslider.css"
            type="text/css"
            media="screen"
            property=""
          />
          <script defer src="assets/js/jquery.flexslider.js"></script>
          {/* <script type="text/javascript">
				$(window).load(function(){+
				  $('.flexslider').flexslider({
					animation: "slide",
					start: function(slider){
					  $('body').removeClass('loading');
					}
				  });
				});
			  </script> */}
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="banner_bottom">
        <div class="wthree_banner_bottom_left_grid_sub"></div>
        <div class="wthree_banner_bottom_left_grid_sub1">
          <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
              <img src="assets/images/4.jpg" alt=" " class="img-responsive" />
              <div class="wthree_banner_bottom_left_grid_pos">
                <h4>
                  Discount Offer <span>25%</span>
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
              <img src="assets/images/5.jpg" alt=" " class="img-responsive" />
              <div class="wthree_banner_btm_pos">
                <h3>
                  introducing <span>best store</span> for <i>groceries</i>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
              <img src="assets/images/6.jpg" alt=" " class="img-responsive" />
              <div class="wthree_banner_btm_pos1">
                <h3>
                  Save <span>Upto</span> $10
                </h3>
              </div>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  );
};

export default Banner;
