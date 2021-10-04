import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <p>
                    <span><i class="fas fa-phone-alt"></i> Conatact: 01946872820 |</span>
                    <span> <i class="fas fa-envelope"></i> Email: programming@gmail.com</span>
                </p>

                <p>
                    <span> <i class="fas fa-map-marker-alt"></i>  Plot-2, Road-1, Block-A, Mirpur-11, Dhaka-1216</span>
                </p>
                <hr />
                <small> &copy; 2021 All right reserved | Unique Proramming Zone</small>
            </div>
        </div>
    );
};

export default Footer;