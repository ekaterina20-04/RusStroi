import React from 'react'
import logo from '../../img/logo.png'
export default function Footer() {
  return (
    <footer><div className="container_info">
    <div className="footer_consist_of">
        <div className="logo_footer">
            <img src={logo} alt=""/>
        </div>
        <div className="text-footer">
            <p className="p_first_line">Москва и Московская область</p> 
            <p className="p_first_line">russtroi@mail.ru</p>
        </div>
        <div className="phone_footer">
            <p className="p_first_line">89009008877</p>
            <p className="p_first_line">89889998866</p>
        </div>

    </div>
</div></footer>
  )
}
