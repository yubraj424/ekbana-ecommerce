import React from 'react'

function Contact() {
  return (
 <div>	
      <div class="mail">
    <h3>Mail Us</h3>
    <div class="agileinfo_mail_grids">
      <div class="col-md-4 agileinfo_mail_grid_left">
        <ul>
          <li><i class="fa fa-home" aria-hidden="true"></i></li>
          <li>address<span>868 1st Avenue NYC.</span></li>
        </ul>
        <ul>
          <li><i class="fa fa-envelope" aria-hidden="true"></i></li>
          <li>email<span><a href="mailto:info@example.com">info@example.com</a></span></li>
        </ul>
        <ul>
          <li><i class="fa fa-phone" aria-hidden="true"></i></li>
          <li>call to us<span>(+123) 233 2362 826</span></li>
        </ul>
      </div>
      <div class="col-md-8 agileinfo_mail_grid_right">
        <form action="#" method="post">
          <div class="col-md-6 wthree_contact_left_grid">
            <input type="text" name="Name" value="Name*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name*';}" required=""/>
            <input type="email" name="Email" value="Email*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email*';}" required=""/>
          </div>
          <div class="col-md-6 wthree_contact_left_grid">
            <input type="text" name="Telephone" value="Telephone*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Telephone*';}" required=""/>
            <input type="text" name="Subject" value="Subject*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject*';}" required=""/>
          </div>
          <div class="clearfix"> </div>
          <textarea  name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
          <input type="submit" value="Submit"/>
          <input type="reset" value="Clear"/>
        </form>
      </div>
      <div class="clearfix"> </div>
    </div>
  </div>
  </div>
  )
}

export default Contact
