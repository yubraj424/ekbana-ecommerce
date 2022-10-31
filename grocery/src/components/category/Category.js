import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart";

const Categories = () => {
  const dispatch = useDispatch();
  // function ma same mapping ko naam(data) pathauna parxa
  const handlerAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  const [catagorylist, setCategorylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/category", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        },
      })
      .then((response) => {
        console.log(response.data.data, "catagory");
        setCategorylist(response.data.data);
        setIsLoading(!true);
        // console.log(catagorylist, "nepal");
      })
      .catch((error) => {
        console.log(error, "faileddd");
      });
  }, [setCategorylist]);

  return (
    <>
      {isLoading ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          Loading...
        </p>
      ) : (
        <div className="category-containeror">
          {catagorylist.slice(0, 6).map((data, index) => {
            return (
              <>
                <div class="col-md-4 top_brand_left product-cartt">
                  <div class="hover14 column">
                    <div class="agile_top_brand_left_grid">
                      <div class="agile_top_brand_left_grid_pos">
                        <img
                          src="assets/images/offer.png"
                          alt=" "
                          class="img-responsive"
                        />
                      </div>
                      <div class="product-Descc">
                        <img
                          src={data.backgroundImage}
                          width="200px"
                          height="120px"
                        />
                        <p>{data.title}</p>

                        <p>ProductCount: {data.productCount}</p>
                        {/* button should be inside mapping's div , function ma mapping ko name(data) as a argument pathauna parcha */}
                        <div class="snipcart-item block">
                          <div class="snipcart-details top_brand_home_details">
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              class="button"
                              onClick={() => handlerAddToCart(data)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Categories;
