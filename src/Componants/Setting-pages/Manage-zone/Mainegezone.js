import React, { useState } from 'react';
import "./Managezone.css";
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';


const Managezone = () => {

    const history = useNavigate()

    function handleClick() {
        const saveButton = document.getElementById("save-button");
        saveButton.textContent = "Saved";
        saveButton.classList.add("saved");
        alert("Data saved successfully!");
    }

    document.addEventListener("DOMContentLoaded", function () {
        const saveButton = document.getElementById("save-button");
        saveButton.addEventListener("click", handleClick);
    });

    const myStyle = {
        left: '1rem',
    };





    const [isIconClicked, setIsIconClicked] = useState(false);

    return (
        <div className='managecountry-container'>

            <div className='fistline'>


                <p className="name">
                    <span>
                        <Link to="/Managecountrymain">Manage Zone</Link> &gt;
                    </span>
                    <span> <Link to="#">Add</Link> </span>

                </p></div>

            <div className="autocompleteform-managezone" style={myStyle}>
                <div className='namewithicone'>
                    <p className="namemg">
                        <span> <p>Manage Zone</p> </span>
                    </p></div>

                <div className='first-textbox'>
                    <div className='textinput'><TextField id="standard-basic" label="Country Name" variant="standard" /></div>
                    <div className='textinput'><TextField id="standard-basic" label="Zone Name" variant="standard" /></div>
                    <div className='textinput'><TextField id="standard-basic" label="Display Order" variant="standard" /></div>

                </div>

                <div className='first-textbox'>
                    <div className='textinput' ><TextField id="standard-basic" label="Remarks" variant="standard" /></div>
                </div>


                <div className="Buttons ">
                    <div className='buttonmain'>
                        <div className='button-container'>
                            <button className='CANCEL' type='button' onClick={() => { history('/Managezonemain') }} >CANCEL</button> </div>
                        <div className='button-container'>  <button id="save-button" className='Save' type='button' onClick={handleClick}>SAVE</button>

                        </div></div></div>

            </div></div>

    )
}

export default Managezone;