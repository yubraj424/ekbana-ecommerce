import React from "react";

const StickyNavbar = () => {
  return (
    <>
      <div class="banner">
        <div class="w3l_banner_nav_left">
          <nav class="navbar nav_bottom">
            <div class="navbar-header nav_2">
              <button
                type="button"
                class="navbar-toggle collapsed navbar-toggle1"
                data-toggle="collapse"
                data-target="#bs-megadropdown-tabs"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul class="nav navbar-nav nav_1">
                <li>
                  <a href="/product">Branded Foods</a>
                </li>
                <li>
                  <a href="/household">Households</a>
                </li>
                <li class="dropdown mega-dropdown active">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Veggies & Fruits<span class="caret"></span>
                  </a>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <a href="/vegetables">Vegetables</a>
                        </li>
                        <li>
                          <a href="/vegetables">Fruits</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/kitchen">Kitchen</a>
                </li>
                <li>
                  <a href="/shortcode">Short Codes</a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Beverages<span class="caret"></span>
                  </a>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <a href="/drinks">Soft Drinks</a>
                        </li>
                        <li>
                          <a href="/drinks">Juices</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/pet">Pet Food</a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Frozen Foods<span class="caret"></span>
                  </a>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <a href="/frozen">Frozen Snacks</a>
                        </li>
                        <li>
                          <a href="/frozen">Frozen Nonveg</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/bread">Bread & Bakery</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default StickyNavbar;
