import React from 'react'
import logo from '../images/logochangdum.png'
import img from '../images/contact_img.png'
import { Link } from 'react-router-dom'
export const Contact = () => {
  return (
    <div>
        <nav>
            <div class="logo">
            <Link to="/home"><img src={logo} alt="logochangdum"/></Link>
            </div>
                <ul class="menu">        
                <li><a href="#">ติดต่อเรา</a></li>
                </ul>
        </nav>
        <div class="data">
            <div>
                <h1>ติดต่อได้ที่</h1><br/>
                <b>บ้านเลขที่ 3  ซอยประชาอุทิศ 93 แขวงทุ่งครุ เขตทุ่งครุ กรุงเทพมหานคร</b><br/><br/>
                <b>เวลาทำการ</b><br/> 
                <b>จันทร์ - เสาร์ 09.00 - 17.00</b><br/><br/>
                <b>เบอร์ติดต่อ</b><br/>
                <b>087 046 3471 (ช่างดำ)</b><br/><br/>
                <b>แผนที่</b><br/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d576.3939712828019!2d100.50652203722773!3d13.627260764236869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a3b8b298dae3%3A0xd1ce47e5235f62f1!2z4Lit4Li54LmI4LiK4LmI4Liy4LiH4LiU4Liz!5e0!3m2!1sth!2sth!4v1694195640156!5m2!1sth!2sth" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <br/>
        </div> 
            <img src={img} alt="img" />
        </div>    
    </div>
  )
}
