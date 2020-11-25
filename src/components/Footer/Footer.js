import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer '>
            <div  className='category-info-container'>
                <div className='category-title'> 
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className='contact-container'>
                <div className='contact-container-card'>
                    <h2>Developer</h2>
                    <h3>Ishaan Desai</h3>
                    <p><i className="fas fa-phone-alt"></i> - 7749085451</p>
                    <p><i className="fas fa-envelope"></i> - ishaandesai48@gmail.com</p>
                </div>
                <div className='contact-container-card'>
                    <h2>Developer</h2>
                    <h3>Arnab Parikaray</h3>
                    <p><i className="fas fa-phone-alt"></i> - 6370026524</p>
                    <p><i className="fas fa-envelope"></i> - msfvenom0632@gmail.com</p>
                </div>
                <div className='contact-container-card'>
                    <h2>Developer</h2>
                    <h3>Santanu ku. Senapati</h3>
                    <p><i className="fas fa-phone-alt"></i> - 7008789055</p>
                    <p><i className="fas fa-envelope"></i> - santanusekhar2001@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
