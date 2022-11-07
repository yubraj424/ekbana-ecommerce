import React from "react";
import Banner from "../../components/Banner/Banner";
import Hotoffers from "../../components/Hotoffers/Hotoffers";
import Topproducts from "../../components/topproducts/Topproducts";
// import Newsletter from '../../components/newsletter/Newsletter'

function Home() {
  return (
    <div>
      <Banner />

      <Hotoffers />

      <Topproducts />

      {/* <Newsletter/> */}
    </div>
  );
}

export default Home;
