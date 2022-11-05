import axios from "axios";
import { useState } from "react";
const Test = () => {
  console.log("hii");
  const [storedata, setStoredata] = useState([]);

  const clickHandler = () => {
    // axios
    //   .get(
    //     "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1",
    //     {
    //       headers: {
    //         "Api-Key": " 3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response, "success");
    //     // setStoredata(response.data.data);
    //     setStoredata(response);
    //     console.log(storedata, "hiii");
    //   })
    //   .catch((error) => {
    //     console.log(error, "failure");
    //   });
  };

  return (
    <div>
      {/* {storedata.map((data, index) => {
        return (
          <div>
            <p> {data.id}</p>
            <img src={data.backgroundImage} />
          </div>
        );
      })} */}
      <button onClick={() => clickHandler()}>button</button>
    </div>
  );
};

export default Test;
