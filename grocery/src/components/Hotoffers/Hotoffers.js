import React from "react";
import "./Hotdata";
import Hotdata from "./Hotdata";
import "./hotoffer.css";

const Hotoffers = () => {
  return (
    <div>
        {Hotdata.map((data,index)=>{return(
            <div>

      <div class="col-md-3 top_brand_left">
        <div class="hover14 column">
          <div class="agile_top_brand_left_grid">
            <div class="agile_top_brand_left_grid_pos">
              <img src="images/offer.png" alt=" " class="img-responsive" />
            </div>
            <div class="agile_top_brand_left_grid1">
              <figure>
                <div class="snipcart-item block">
                  <div class="product-Desc">
                    <img src="" alt="image" />
                    <p>{data.text}</p>
                    <div className="productPrice">
                      <p>${data.price}</p>
                      <p>${data.discount}</p>
                    </div>
                    
                  </div>
                  <div class="snipcart-details top_brand_home_details">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input
                          type="hidden"
                          name="item_name"
                          value="dogs food"
                          />
                        <input type="hidden" name="amount" value="9.00" />
                        <input
                          type="hidden"
                          name="discount_amount"
                          value="1.00"
                          />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
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
      </div>
      )})}
    </div>
  );
};

export default Hotoffers;
