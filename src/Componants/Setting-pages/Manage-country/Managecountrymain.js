import React, { useState } from 'react';
import "./Managecountrymain.css";
import { Link } from 'react-router-dom';





const Managecountrymain = () => {


    return (
        <div className='Managecountrymain-container'>
            <div className='fistline'>
                <div className='namewithicone'>
                    <p className="name">
                        <span>
                            <Link to="/Setting">Setting</Link> &gt;
                        </span>
                        <span> <Link to="/Managecountrymain">Manage Country</Link> </span>

                    </p></div>

                <div className="setting-icones">

                    <div className='firstdivicone'>
                        <div className="iconefirst">
                            <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
                        </div>

                        <div className="iconefirst">
                            <img src="./photos/Group 359241 download.png" alt="Download Icon" />
                        </div></div>

                    <div className="addwithicone">
                        <Link to="/Managecountry" download className="flex-container">
                            <img src="./photos/Group 359467.png" alt="Download Icon" className="icon" />
                        </Link>
                    </div>






                </div></div>
        </div>



    )
}

export default Managecountrymain;