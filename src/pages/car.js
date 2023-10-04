import React from 'react'
import logo from '../images/logochangdum.png'
import { Sidebar } from './sidebar'
export const Car = () => {
  return (
    <div>
        <Sidebar></Sidebar>
        <div class = "addform-dt">
            <div class = "addform-mg">
              <a class = "header-addform">รายการซ่อม</a>
                <div class = "input-ad">
                  <label for="Car-registration" class = "label-Car-registration">ทะเบียนรถ  </label>
                  <input type = "text"  class = "Car-registration" ></input>
                  <label for="province" class = "label-province">จังหวัด </label>
                  <input type = "text"  class = "province" ></input><br></br>
                  <label for="model" class = "label-model">รุ่น </label>
                  <input type = "text"  class = "model" ></input>
                  <label for="color" class = "label-color">สี </label>
                  <input type = "text"  class = "color" ></input><br></br>
                  <label for="brand" class = "label-brand">ยี่ห้อ </label>
                  <input type = "text"  class = "brand" ></input>
                  <label for="Machine-number" class = "label-Machine-number">หมายเลขเครื่อง </label>
                  <input type = "text"  class = "Machine-number" ></input><br></br>
                  <label for="chassis-number" class = "label-chassis-number">หมายเลขตัวถัง </label>
                  <input type = "text"  class = "chassis-number" ></input><br></br>
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
