import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div>
      
	<div class="">
		<div className='newslettercontent'>

		<div class="container" style={{marginTop:'2%', paddingTop:'45px'}}>
			<div class="w3agile_newsletter_left">
				<h3>sign up for our newsletter</h3>
			</div>
			<div class="w3agile_newsletter_right" >
				<form >
					<input type="email" name="Email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
					<input type="submit" value="subscribe now"/>
				</form>
			</div>
		
		</div>
		</div>
	</div>

    </div>
  )
}

export default Newsletter