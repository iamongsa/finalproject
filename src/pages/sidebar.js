 import React from 'react'
 import logo from '../images/logochangdum.png'
 export const Sidebar = () => {
   return (
    <div class="addform-menu">
    <ul>
      <img src={logo} alt="logochangdum" class="image-login"/>
      <input type= "text" placeholder="ค้นรายการ" class = "search-af"/>
      <button class = "btn-ad">ค้นหา</button>
      <p>รับข้อมูล</p>
      <p>รายการซ่อม</p>
      <p>จัดการข้อมูล</p>
    </ul>
  </div>
   )
 }
