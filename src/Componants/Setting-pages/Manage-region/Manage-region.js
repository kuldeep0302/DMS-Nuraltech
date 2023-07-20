import React, { useState } from 'react';
import "./Manage-region.css";
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@mui/lab/Autocomplete';
import Stack from '@mui/material/Stack';


const calltype = [

];

const callsource = [
    { title: 'Afghanistan' },
    { title: 'Albania' },
    { title: 'Algeria' },
    { title: 'Andorra' },
    { title: 'Angola' },
    { title: 'Antigua and Barbuda' },
    { title: 'Argentina' },
    { title: 'Armenia' },
    { title: 'Australia' },
    { title: 'Austria' },
    { title: 'Azerbaijan' },
    { title: 'Bahamas' },
    { title: 'Bahrain' },
    { title: 'Bangladesh' },
    { title: 'Barbados' },
    { title: 'Belarus' },
    { title: 'Belgium' },
    { title: 'Belize' },
    { title: 'Benin' },
    { title: 'Bhutan' },
    { title: 'Bolivia' },
    { title: 'Bosnia and Herzegovina' },
    { title: 'Botswana' },
    { title: 'Brazil' },
    { title: 'Brunei' },
    { title: 'Bulgaria' },
    { title: 'Burkina Faso' },
    { title: 'Burundi' },
    { title: 'Cabo Verde' },
    { title: 'Cambodia' },
    { title: 'Cameroon' },
    { title: 'Canada' },
    { title: 'Central African Republic' },
    { title: 'Chad' },
    { title: 'Chile' },
    { title: 'China' },
    { title: 'Colombia' },
    { title: 'Comoros' },
    { title: 'Congo, Democratic Republic of the' },
    { title: 'Congo, Republic of the' },
    { title: 'Costa Rica' },
    { title: "Cote d'Ivoire" },
    { title: 'Croatia' },
    { title: 'Cuba' },
    { title: 'Cyprus' },
    { title: 'Czech Republic' },
    { title: 'Denmark' },
    { title: 'Djibouti' },
    { title: 'Dominica' },
    { title: 'Dominican Republic' },
    { title: 'East Timor (Timor-Leste)' },
    { title: 'Ecuador' },
    { title: 'Egypt' },
    { title: 'El Salvador' },
    { title: 'Equatorial Guinea' },
    { title: 'Eritrea' },
    { title: 'Estonia' },
    { title: 'Eswatini' },
    { title: 'Ethiopia' },
    { title: 'Fiji' },
    { title: 'Finland' },
    { title: 'France' },
    { title: 'Gabon' },
    { title: 'Gambia' },
    { title: 'Georgia' },
    { title: 'Germany' },
    { title: 'Ghana' },
    { title: 'Greece' },
    { title: 'Grenada' },
    { title: 'Guatemala' },
    { title: 'Guinea' },
    { title: 'Guinea-Bissau' },
    { title: 'Guyana' },
    { title: 'Haiti' },
    { title: 'Honduras' },
    { title: 'Hungary' },
    { title: 'Iceland' },
    { title: 'India' },
    { title: 'Indonesia' },
    { title: 'Iran' },
    { title: 'Iraq' },
    { title: 'Ireland' },
    { title: 'Israel' },
    { title: 'Italy' },
    { title: 'Jamaica' },
    { title: 'Japan' },
    { title: 'Jordan' },
    { title: 'Kazakhstan' },
    { title: 'Kenya' },
    { title: 'Kiribati' },
    { title: 'Korea, North' },
    { title: 'Korea, South' },
    { title: 'Kosovo' },
    { title: 'Kuwait' },
    { title: 'Kyrgyzstan' },
    { title: 'Laos' },
    { title: 'Latvia' },
    { title: 'Lebanon' },
    { title: 'Lesotho' },
    { title: 'Liberia' },
    { title: 'Libya' },
    { title: 'Liechtenstein' },
    { title: 'Lithuania' },
    { title: 'Luxembourg' },
    { title: 'Madagascar' },
    { title: 'Malawi' },
    { title: 'Malaysia' },
    { title: 'Maldives' },
    { title: 'Mali' },
    { title: 'Malta' },
    { title: 'Marshall Islands' },
    { title: 'Mauritania' },
    { title: 'Mauritius' },
    { title: 'Mexico' },
    { title: 'Micronesia' },
    { title: 'Moldova' },
    { title: 'Monaco' },
    { title: 'Mongolia' },
    { title: 'Montenegro' },
    { title: 'Morocco' },
    { title: 'Mozambique' },
    { title: 'Myanmar (Burma)' },
    { title: 'Namibia' },
    { title: 'Nauru' },
    { title: 'Nepal' },
    { title: 'Netherlands' },
    { title: 'New Zealand' },
    { title: 'Nicaragua' },
    { title: 'Niger' },
    { title: 'Nigeria' },
    { title: 'North Macedonia (formerly Macedonia)' },
    { title: 'Norway' },
    { title: 'Oman' },
    { title: 'Pakistan' },
    { title: 'Palau' },
    { title: 'Panama' },
    { title: 'Papua New Guinea' },
    { title: 'Paraguay' },
    { title: 'Peru' },
    { title: 'Philippines' },
    { title: 'Poland' },
    { title: 'Portugal' },
    { title: 'Qatar' },
    { title: 'Romania' },
    { title: 'Russia' },
    { title: 'Rwanda' },
    { title: 'Saint Kitts and Nevis' },
    { title: 'Saint Lucia' },
    { title: 'Saint Vincent and the Grenadines' },
    { title: 'Samoa' },
    { title: 'San Marino' },
    { title: 'Sao Tome and Principe' },
    { title: 'Saudi Arabia' },
    { title: 'Senegal' },
    { title: 'Serbia' },
    { title: 'Seychelles' },
    { title: 'Sierra Leone' },
    { title: 'Singapore' },
    { title: 'Slovakia' },
    { title: 'Slovenia' },
    { title: 'Solomon Islands' },
    { title: 'Somalia' },
    { title: 'South Africa' },
    { title: 'South Sudan' },
    { title: 'Spain' },
    { title: 'Sri Lanka' },
    { title: 'Sudan' },
    { title: 'Suriname' },
    { title: 'Sweden' },
    { title: 'Switzerland' },
    { title: 'Syria' },
    { title: 'Taiwan' },
    { title: 'Tajikistan' },
    { title: 'Tanzania' },
    { title: 'Thailand' },
    { title: 'Togo' },
    { title: 'Tonga' },
    { title: 'Trinidad and Tobago' },
    { title: 'Tunisia' },
    { title: 'Turkey' },
    { title: 'Turkmenistan' },
    { title: 'Tuvalu' },
    { title: 'Uganda' },
    { title: 'Ukraine' },
    { title: 'United Arab Emirates' },
    { title: 'United Kingdom' },
    { title: 'United States' },
    { title: 'Uruguay' },
    { title: 'Uzbekistan' },
    { title: 'Vanuatu' },
    { title: 'Vatican City (Holy See)' },
    { title: 'Venezuela' },
    { title: 'Vietnam' },
    { title: 'Yemen' },
    { title: 'Zambia' },
    { title: 'Zimbabwe' },

];



const Manageregion = () => {

    const history = useNavigate()

    const calltypeDefaultProps = {
        options: calltype,
        getOptionLabel: (option) => option.title,
    };

    const callsourceDefaultProps = {
        options: callsource,
        getOptionLabel: (option) => option.title,
    };






    return (
        <div className='managecountry-container'>

            <div className='fistline'>


                <p className="name">
                    <span>
                        <Link to="/Manageregionmain">Manage Region</Link> &gt;
                    </span>
                    <span> <Link to="#">Add</Link> </span>

                </p></div>

            <div className="autocompleteform-manageregion" >
                <div className='namewithicone'>
                    <p className="namemg">
                        <span> <p>Manage Country</p> </span>
                    </p></div>

                <div className='first-textbox'>
                    <div className='textinput'><TextField id="standard-basic" label="Region Name" variant="standard" /></div>
                    <div className='textinput'><TextField id="standard-basic" label="Region Code" variant="standard" /></div>
                    <div className='textinput'><TextField id="standard-basic" label="Display Order" variant="standard" /></div>

                </div>

                <div className='first-textbox'>
                    <div className='textinput' ><TextField id="standard-basic" label="Remarks" variant="standard" /></div>

                    <div className="textinput">
                        <Stack spacing={1} sx={{ width: '75%' }}>
                            <Autocomplete
                                {...callsourceDefaultProps}
                                id="disable-close-on-select"
                                disableCloseOnSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Country Name" variant="standard" />
                                )}
                            />
                        </Stack>
                    </div>


                    <div className="textinput">
                        <div>
                            <Stack spacing={1} sx={{ width: 300 }}>
                                <Autocomplete
                                    {...calltypeDefaultProps}
                                    id="disable-close-on-select"
                                    disableCloseOnSelect
                                    renderInput={(params) => (
                                        <TextField {...params} label="Zone Name" variant="standard" />
                                    )}
                                />
                            </Stack>
                        </div>
                    </div>
                </div>

                <div className="Buttons">
                <div className="buttonmain">
                    <div className="button-container">
                        <button id="save-button" className="Save" type="button">
                            SAVE
                        </button>
                    </div>
                    <div className="button-container">
                        <button className="CANCEL" type="button">
                            CANCLE
                        </button>
                    </div>
                </div>
            </div>















            </div></div>

    )
}

export default Manageregion;