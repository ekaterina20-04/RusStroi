import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminHeeader() {
    const navigate=useNavigate();
    const applicationsClick=()=>{
        navigate('/admin_applications');
    }
    const adminClick=()=>{
        navigate('/admin');
    }
  return (
    <div>
        <header className="header">
        <div className="container_info">
            <div className="header_title_admin">
                <div className="adminpan">
                    <p className="adminp">Админ-панель</p>
                </div>
            </div>
        </div>
    </header>
    <section className="action_about" >
        <div className="container_info">
            <div className="logo_totle_and_action_btn">
                <div className="logo_title">
                    <div className="logo_and_adress">
                        <img src="img/logo.png" className="logo"></img>
                        
                    </div>
                    <div className="action_butn">
                        <div className="one_of_them"><a href="admin_applications.html" onClick={applicationsClick}><h4>Просмотр заявок</h4></a></div>
                        <div className="one_of_them" onClick={adminClick}><h4>Редактирование товаров</h4></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
