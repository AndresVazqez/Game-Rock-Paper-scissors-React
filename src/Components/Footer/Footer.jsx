import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='c-footer'>

            <div>
            <a href="https://github.com/AndresVazqez">
                <img src="./assets/github.png" alt="logo GitHub" />
            </a>
            <a href="https://linkedin.com/in/andrés-vázquez-24272722b">
                <img src="./assets/linkedin.png" alt="Logo LinkedIn" />
            </a>
            <a href="mailto:aavsz0811@gmail.com">
                <img src="./assets/email.png" alt="logo email" />
            </a>
            </div>
            
            <p>Powered by Andrés Vázquez</p>

        </div>
    )
}

export default Footer