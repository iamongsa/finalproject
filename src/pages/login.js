import React from 'react'
import logo from '../images/logochangdum.png'
export const Login = () => {
  return (
    <div class="backgroud-login">
            <div class="content-login">
                <div class="box-content-login">
                    <img src={logo} alt="logochangdum" class="image-login"/>  
                    <div>
                        <form action="">
    
                            <div class="form-login">
                                <div class="form-grid-login">
                                    <label for="Username" class="label-login">ชื่อผู้ใช้ </label>
                                    <input type="text" placeholder="ชื่อผู้ใช้" class="form-input-login"/>
                                </div>
                                <div class="form-grid-login">
                                    <label for="Password" class="label-login">รหัสผ่าน</label>
                                    <input type="password" placeholder="รหัสผ่าน" class="form-input-login"/>
                                </div>
                            </div>
                             <div class="box-login">
                                <button type="button" onclick="" class="btn-login">เข้าสู่ระบบ</button>
                             </div>
                            
                        </form>
                    </div>
                </div>
                    
            </div>
    </div>
  )
}
