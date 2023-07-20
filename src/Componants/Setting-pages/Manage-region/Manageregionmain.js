import React, { useState } from 'react';
import "./Manageregionmain.css";
import { Link } from 'react-router-dom';





const Manageregionmain = () => {


    return (
        <div className='Managecountrymain-container'>
            <div className='fistline'>
                <div className='namewithicone'>
                    <p className="name">
                        <span>
                            <Link to="/Setting">Setting</Link> &gt;
                        </span>
                        <span> <Link to="/Manageregion">Manage Region</Link> </span>

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
                        <Link to="/Manageregion" download className="flex-container">
                            <img src="./photos/Group 359467.png" alt="Download Icon" className="icon" />
                        </Link>
                    </div>






                </div></div>
        </div>



    )
}

export default Manageregionmain;