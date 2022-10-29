import { Link } from "react-router-dom";

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
                  <Link to="/product">Branded Foods</Link>
                </li>
                <li>
                  <Link to="/household">Households</Link>
                </li>
                <li class="dropdown mega-dropdown active">
                  <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                    Veggies & Fruits<span class="caret"></span>
                  </Link>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <Link to="/vegetables">Vegetables</Link>
                        </li>
                        <li>
                          <Link to="/vegetables">Fruits</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/kitchen">Kitchen</Link>
                </li>
                <li>
                  <Link to="/shortcode">Short Codes</Link>
                </li>
                <li class="dropdown">
                  <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                    Beverages<span class="caret"></span>
                  </Link>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <Link to="/drinks">Soft Drinks</Link>
                        </li>
                        <li>
                          <Link to="/drinks">Juices</ Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/pet">Pet Food</Link>
                </li>
                <li class="dropdown">
                  <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                    Frozen Foods<span class="caret"></span>
                  </Link>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <Link to="/frozen">Frozen Snacks</Link>
                        </li>
                        <li>
                          <Link to="/frozen">Frozen Nonveg</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/bread">Bread & Bakery</Link>
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
