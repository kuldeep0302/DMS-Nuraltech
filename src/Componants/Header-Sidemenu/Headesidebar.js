import React, { useState } from 'react';
import './Headersidebar.css';
import Sidemenu from '../Sidemenubar/Sidemenu';
import Header from '../Header/Header';
import '../Header/Header.css';
import '../Sidemenubar/Sidemenu.css'





const Headersidebar = () => {

    return (

        <div className='container'>
            <div className='sidemenu'><Sidemenu /></div>
            <div className='header'><Header /></div>
        </div>


    );
}

export default Headersidebar;
