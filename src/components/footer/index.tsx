import React from 'react';
import logonegativo from '../../assets/images/logonegativo.png'
import './style.css';
import '../../assets/styles/global.css'

function Footer() {
    return (
      <footer>
        <div className="footer">
            <div className="logonegativo">
            <img src={logonegativo} alt="logo nagativo"/>
            </div>
            <hr/>
            <div>
                <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>

                <p>Call us now toll free: (800)2345-6789</p>

                <p>Customer support: support@demolink.org</p>

                <p>Skype: sample-username</p>
            </div>
            </div>
    </footer>
    );
  }

  export default Footer