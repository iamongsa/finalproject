import React from 'react'
import logo from '../images/logochangdum.png'
export const Addform = () => {
  return (
    <div>
        <div class="addform-menu">
          <ul>
            <img src={logo} alt="logochangdum" class="image-login"/>  
            <p>รับข้อมูล</p>
            <p>รายการซ่อม</p>
          </ul>
        </div>

        <div class = "addform-dt">
          <a class = "header-addform">รายการซ่อม</a>
          <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
          <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
          <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
        </div>

    </div>
  )
}
