import React from "react";

function Aboutus() {
  return (
    <div>
      <h3>About Us</h3>
      <div class="privacy about">
        <div>
          <p class="animi">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
        </div>
        <div class="agile_about_grids" style={{ display: "flex" }}>
          <div class="col-md-6 agile_about_grid_right">
            <img src="assets/images/31.jpg" alt=" " class="img-responsive" />
          </div>
          <div class="col-md-6 agile_about_grid_left">
            <ol style={{ backgroundColor: "white" }}>
              <li>laborum et dolorum fuga</li>
              <li>corrupti quos dolores et quas</li>
              <li>est et expedita distinctio</li>
              <li>deleniti atque corrupti quos</li>
              <li>excepturi sint occaecati cupiditate</li>
              <li>accusamus et iusto odio</li>
            </ol>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;