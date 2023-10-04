import React from 'react'
import logo from '../images/logochangdum.png'
import { Sidebar } from './sidebar'
export const Addform = () => {
  return (
    <div>
       <Sidebar></Sidebar>
        <div class = "addform-dt">
            <div class = "addform-mg">
              <a class = "header-addform">ข้อมูลลูกค้า</a>
                <div class = "input-ad">
                  <label for="Username" class = "label-namecustomer">ชื่อลูกค้า  </label>
                  <input type = "text"  class = "name-customer" ></input>
                  <label for="numberphone" class = "label-numberphone">เบอร์โทร </label>
                  <input type = "tel" class = "numberphone" maxlength = "10" ></input> <br></br>
                  <label for="address" class = "label-address" >ที่อยู่ </label>
                  <input type = "text" class = "address"></input><br></br>
                  <label for="idline" class = "label-idlinecustomer">ID Line  </label>
                  <input type = "text"  class = "idlinecustomer" ></input>
                </div>
                <div class = "slide">
                  <span class="dot" onclick="currentSlide(1)"></span> 
                  <span class="dot" onclick="currentSlide(2)"></span> 
                  <span class="dot" onclick="currentSlide(3)"></span> 
                </div>
                <button class="btn-next">ถัดไป</button>
            </div>
        </div>
    </div>
  )
}
