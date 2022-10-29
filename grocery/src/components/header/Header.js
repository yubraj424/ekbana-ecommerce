import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      	<div class="agileits_header">
		<div class="w3l_offers">
			<Link to="/product">Today's special Offers !</Link>
		</div>
		<div class="w3l_search">
			<form action="#" method="post">
				<input type="text" name="Product" value="Search Link product..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search Link product...';}" required=""/>
				<input type="submit" value=" "/>
			</form>
		</div>
		<div class="product_list_header">  
			<form action="#" method="post" class="last">
                <fieldset>
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <input type="submit" name="submit" value="View your cart" class="button" />
                </fieldset>
            </form>
		</div>
		<div class="w3l_header_right">
			<ul>
				<li class="dropdown profile_details_drop">
					<Link to="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i><span class="caret"></span></Link>
					<div class="mega-dropdown-menu">
						<div class="w3ls_vegetables">
							<ul class="dropdown-menu drp-mnu">
								<li><Link to="/login">Login</Link></li> 
								<li><Link to="/login">Sign Up</Link></li>
							</ul>
						</div>                  
					</div>	
				</li>
			</ul>
		</div>
		<div class="w3l_header_right1">
			<h2><Link to="/contact">Contact Us</Link></h2>
		</div>
		<div class="clearfix"> </div>
	</div>
{/* 
	<script>
	$(document).ready(function() {
		 var navoffeset=$(".agileits_header").offset().top;
		 $(window).scroll(function(){
			var scrollpos=$(window).scrollTop(); 
			if(scrollpos >=navoffeset){
				$(".agileits_header").addClass("fixed");
			}else{
				$(".agileits_header").removeClass("fixed");
			}
		 });
		 
	});
	</script> */}

    </div>
  )
}

export default Header