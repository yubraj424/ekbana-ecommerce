import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannerdata from "./Bannerdata";
import "./banner.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {Bannerdata.map((dataa, index) => {
          return (
            <div>
              <div >
                <img
                  className="image-slider"
                  src={dataa.image}
                  alt=""
                  
                  
                />
                <div class="slide-desc">
                  <p>{dataa.text1}</p>
                  <p> {dataa.text2}</p>
                  <p>{dataa.text3}</p>
                  <Link to="/product">
                    <button className="banner-button">shop now</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;