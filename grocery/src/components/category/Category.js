import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";

// const Categories=()=>{
//     return(
//         <div>
//             hello
//         </div>
//     )
// }
const Categories = () => {
  const [catagorylist, setCategorylist] = useState([]);
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
        // console.log(catagorylist, "nepal");
      })
      .catch((error) => {
        console.log(error, "faileddd");
      });
  }, [setCategorylist]);
  return (
    <div className="category-containeror">
      {catagorylist.slice(0,6).map((data, index) => {
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
                  </div>

                  <div class="agile_top_brand_left_grid1">
                    <figure>
                      <div class="snipcart-item block">
                        <div class="snipcart-details top_brand_home_details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="Fortune Sunflower Oil"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="20.99"
                              />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                class="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      
    </div>
  );
};

export default Categories;