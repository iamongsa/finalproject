import React from 'react'
import logo from '../images/logochangdum.png'
import imghome from '../images/img1.png'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div>
        <nav>
            <div class="logo">
            <Link to="/home"><img src={logo} alt="logochangdum"/></Link>
             </div>
                <ul class="menu">        
                <li><Link to="/contact">ติดต่อเรา</Link></li>
        </ul>
        </nav>
            <div class="content">
                <img src={imghome} alt="img"/>
                <h2 class = "header-home">ติดตามสถานะการซ่อมรถ</h2>
                <input type="search" class="mysearch" placeholder="ค้นหาป้ายทะเบียน"/> 
                <button>ค้นหา</button>  
        </div>
    </div>
  )
}
