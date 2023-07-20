import React from 'react';
import './Loginboundcall.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@mui/lab/Autocomplete';
import Stack from '@mui/material/Stack';

const calltype = [
    { title: 'Field Service' },
    { title: 'Walkin' },
    { title: 'Transport' },
];

const callsource = [
    { title: 'Customer' },
    { title: 'Channel' },
    { title: 'Registered Customer' },
    { title: 'Non Registered Customer' },
];

const Loginboundcall = () => {
    const history = useNavigate();

    const calltypeDefaultProps = {
        options: calltype,
        getOptionLabel: (option) => option.title,
    };

    const callsourceDefaultProps = {
        options: callsource,
        getOptionLabel: (option) => option.title,
    };


    return (
        <div className="Loginboundcall-container">
            <div className="autocompleteform">
                <div className="namewithicone">
                    <p className="namemg">
                        <span>
                            <p>Log Inbound Call</p>
                        </span>
                    </p>
                </div>

                <div className="first-textbox">
                    <div className="textinput">
                        <TextField id="standard-basic" label="Contact No:" variant="standard" />
                    </div>
                    <div className="textinput">
                        <TextField id="standard-basic" label="Job No:" variant="standard" />
                    </div>
                    <div className="textinput">
                        <TextField id="standard-basic" label="Customer Company Name:" variant="standard" />
                    </div>
                </div>

                <div className="first-textbox">
                    <div className="textinput">
                        <TextField id="standard-basic" label="Mid:" variant="standard" />
                    </div>
                    <div className="textinput">
                        <TextField id="standard-basic" label="Accessory Serial No:" variant="standard" />
                    </div>
                    <div className="textinput">
                        <TextField id="standard-basic" label="Product Serial / Batch No:" variant="standard" />
                    </div>
                </div>

                <div className="first-textbox">
                    <div className="textinput">
                        <TextField id="standard-basic" label="Product Code:" variant="standard" />
                    </div>
                    <div className="textinput">
                        <TextField id="standard-basic" label="Merchant Category" variant="standard" />
                    </div>
                    <div className="textinput">
                        <Stack spacing={1} sx={{ width: '75%' }}>
                            <Autocomplete
                                {...calltypeDefaultProps}
                                id="disable-close-on-select"
                                disableCloseOnSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Call Type" variant="standard" />
                                )}
                            />
                        </Stack>
                    </div>
                </div>

                <div className="first-textbox">
                    <div className="textinput">
                        <Stack spacing={1} sx={{ width: '75%' }}>
                            <Autocomplete
                                {...callsourceDefaultProps}
                                id="disable-close-on-select"
                                disableCloseOnSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Call Source" variant="standard" />
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
                                        <TextField {...params} label="State" variant="standard" />
                                    )}
                                />
                            </Stack>
                        </div>
                    </div>

                    <div className="textinput">
                        <div>
                            <Stack spacing={1} sx={{ width: 300 }}>
                                <Autocomplete
                                    {...callsourceDefaultProps}
                                    id="disable-close-on-select"
                                    disableCloseOnSelect
                                    renderInput={(params) => (
                                        <TextField {...params} label="City/District" variant="standard" />
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
                                SEARCH
                            </button>
                        </div>
                        <div className="button-container">
                            <button className="CANCEL" type="button">
                                RESET
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Loginboundcall;
