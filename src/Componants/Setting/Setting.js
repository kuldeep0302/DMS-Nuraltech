import React from 'react'
import "./Setiting.css";
import { Link } from 'react-router-dom';



const Setting = () => {
    return (



        <div className='setting-container'>

            <header className="container">
                <div className="Setting_div">SETTINGS</div>
            </header>
            <div>
                <p className="MASTERS">MANAGE LOCATION</p>
                <Link to="/Managecountrymain">
                    <button className="Positions" type="button">
                        Manage Country
                    </button>
                </Link>

                <Link to="/Managezonemain">
                    <button className="Positions" type="button">
                        Manage Zone
                    </button>
                </Link>

                <Link to="/Manageregionmain">
                    <button className="Positions" type="button">
                        Manage Region
                    </button>
                </Link>
                <button className="Positions" type="button">

                    Manage State
                </button>
                <button className="Positions" type="button">

                    Manage District
                </button>

                <button className="Positions" type="button">

                    Manage City
                </button>
                <button className="Positions" type="button">

                    Manage Locality
                </button>

                <button className="Positions" type="button">

                    Bulk Upload Locality
                </button>

            </div>


            <div>
                <p className="MASTERS">MANAGE TAX MASTER</p>
                <button className="Positions" type="button">
                    Manage Tax Master
                </button>
                <button className="Positions" type="button">

                    Manage Tax Category
                </button>
            </div>


            <div>
                <p className="MASTERS">MANAGE PRODUCT BASE</p>
                <button className="Positions" type="button">
                    Manage Product Category/Brand
                </button>

            </div>
            <div>
                <p className="MASTERS">MANAGE PRODUCT/SPARES</p>
                <button className="Positions" type="button">

                    Manage Product
                </button>
                <button className="Positions" type="button">

                    Manage Part Group
                </button>
                <button className="Positions" type="button">

                    Manage Part Master
                </button>
                <button className="Positions" type="button">

                    Manage Product/Spare Specification
                </button>

                <button className="Positions" type="button">

                    Serial Vendor Warranty
                </button>
                <button className="Positions" type="button">

                    Customer Category
                </button>
            </div>


            <div>
                <p className="MASTERS">MANAGE USER BASE</p>
                <button className="Positions" type="button">


                    Manage Entity
                </button>
                <button className="Positions" type="button">

                    Manage User
                </button>
                <button className="Positions" type="button">

                    View Entity Mapping
                </button>
                <button className="Positions" type="button">


                    Manage Entity Credit Term
                </button>

                <button className="Positions" type="button">


                    Upload Manage USer
                </button>
                <button className="Positions" type="button">
                    Upload Entity Detail

                </button>

            </div>


            <div>
                <p className="MASTERS">MANAGE PRICE</p>
                <button className="Positions" type="button">
                    Manage Product/Spare Prices
                </button></div>

            <div>
                <p className="MASTERS">MANAGE CODES</p>
                <button className="Positions" type="button">

                    Manage Repair Code
                </button>
                <button className="Positions" type="button">


                    Manage Symptom Code
                </button>

                <button className="Positions" type="button">

                    Manage Defect Code
                </button></div>


            <div>
                <p className="MASTERS">Manage HOLIDAYS</p>
                <button className="Positions" type="button">
                    Manage Holiday
                </button>

            </div>

        </div>



    )
}

export default Setting;

