import React from 'react'
import logo from '../images/logochangdum.png'
import { Sidebar } from './sidebar'
export const Repair = () => {
  return (
    <div>
        <Sidebar></Sidebar>
        <div class = "addform-dt">
            <div class = "addform-mg">
              <a class = "header-addform">รายการซ่อม</a>
                <div class = "input-ad">
                  <label for="Date" class = "label-date">วันที่</label>
                  <input type = "date"  class = "date" ></input><br></br>
                  <label for="Username" class = "label-namecustomer">ชื่อลูกค้า  </label>
                  <input type = "text"  class = "name-customer" ></input>
                  <label for="numberphone" class = "label-numberphone">เบอร์โทร </label>
                  <input type = "tel" class = "numberphone" maxlength = "10" ></input> <br></br>
                  <label for="address" class = "label-address" >ที่อยู่ </label>
                  <input type = "text" class = "address"></input><br></br>
                  <label for="Car-registration" class = "label-Car-registration">ทะเบียนรถ  </label>
                  <input type = "text"  class = "Car-registration" ></input>
                  <label for="province" class = "label-province">จังหวัด </label>
                  <input type = "text"  class = "province" ></input><br></br>
                  <label for="model" class = "label-model">รุ่น </label>
                  <input type = "text"  class = "model" ></input>
                  <label for="color" class = "label-color">สี </label>
                  <input type = "text"  class = "color" ></input>
                  <label for="brand" class = "label-brand">ยี่ห้อ </label>
                  <input type = "text"  class = "brand" ></input><br></br>
                  <label for="Machine-number" class = "label-Machine-number">หมายเลขเครื่อง </label>
                  <input type = "text"  class = "Machine-number" ></input>
                  <label for="chassis-number" class = "label-chassis-number">หมายเลขตัวถัง </label>
                  <input type = "text"  class = "chassis-number" ></input><br></br>
                  <label for="status" class = "label-status">สถานะ</label>
                        <select name="status" id="status" class="select-status">
                            <option value=" "> </option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    <label for="Repairman" class = "label-Repairman">ผู้ซ่อม </label>
                    <input type = "text"  class = "Repairman" ></input><br></br>
                    <label for="details" class = "label-details">รายละเอียด </label>
                    <input type = "text"  class = "details" ></input>
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
