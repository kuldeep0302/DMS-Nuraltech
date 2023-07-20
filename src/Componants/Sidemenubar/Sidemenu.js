import React, { useState } from 'react';
import './Sidemenu.css';
import { Menu } from 'antd';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
// import Header from '../Header/Header';
import { PhoneOutlined, ToolOutlined, DatabaseOutlined, UploadOutlined, ShoppingOutlined, WarningOutlined, LineChartOutlined, BarChartOutlined, FileOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined, FileTextOutlined } from '@ant-design/icons';


const Sidemenu = () => {

    const navigate = useNavigate();

    const handleMenuClick = ({ key }) => {
        navigate(key);
    };
    const { SubMenu } = Menu;


    const [isOpen, setIsopen] = useState(false);
    const toggle = () => setIsopen(!isOpen)


    return (
        <div className="container">


            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="content">
                    <div className='sidebar-logo'>
                        <img style={{
                            width: isOpen ? '100px' : '50px',
                            marginLeft: isOpen ? '50px' : '10px',
                        }} onClick={toggle} src="https://nural-sales-document-bucket.s3-ap-south-1.amazonaws.com/picture/0.5999497521591091WhatsApp Image 2023-04-04 at 4.59.23 PM.jpeg" />

                        <div class="test"><p> Test</p></div>

                    </div>


                </div>

                <Menu className='menu' onClick={handleMenuClick} >
                    <Menu theme="dark" mode="inline" className="sidebar-menu" style={{ backgroundColor: '#EFF3FE' }}>
                        <SubMenu key="call-center" title="Call Center" icon={<PhoneOutlined />}>
                            <Menu.Item key="/call-center/option1">
                                <Link to="/Loginboundcall">Log Inbound Call</Link>
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                    <Menu theme="dark" mode="inline" className="sidebar-menu" style={{ backgroundColor: '#EFF3FE' }}>
                        <SubMenu key="Service Center" title="Service Center" icon={<ToolOutlined />}>
                            <Menu.Item key="/Dashbord">Dashbord</Menu.Item>
                            <Menu.Item key="/Job Transfer">Job Transfer</Menu.Item>
                            <Menu.Item key="/Upload Cancel Jobs">Upload Cancel Jobs</Menu.Item>
                            <Menu.Item key="/Supervisor Dashboard">Supervisor Dashboard</Menu.Item>
                            <Menu.Item key="/Installation Upload Data">Installation Upload Data</Menu.Item>
                            <Menu.Item key="/Program Request">Program Request</Menu.Item>
                            <Menu.Item key="/Upload Other Job">Upload Other Job</Menu.Item>
                            <Menu.Item key="/Upload Customer AMC">Upload Customer AMC</Menu.Item>
                            <Menu.Item key="/Upload Installation ATS">Upload Installation ATS</Menu.Item>
                            <Menu.Item key="/Upload Jobsheet Feedback">Upload Jobsheet Feedback</Menu.Item>
                        </SubMenu> </Menu>
                    <Menu theme="dark" mode="inline" className="sidebar-menu" style={{ backgroundColor: '#EFF3FE' }}>
                        <SubMenu key="inventory" title="Inventory" icon={<DatabaseOutlined />}>
                            <Menu.Item key="/inventory/part-issue-buffer">Part Issue Buffer</Menu.Item>
                            <Menu.Item key="/inventory/stock-adjustment">Stock Adjustment</Menu.Item>
                            <Menu.Item key="/inventory/view-stock-adjustment">View Stock Adjustment</Menu.Item>
                            <Menu.Item key="/inventory/view-store-stock">View Store Stock</Menu.Item>
                            <Menu.Item key="/inventory/view-engineer-stock">View Engineer Stock</Menu.Item>
                            <Menu.Item key="/inventory/view-user-stock">View User Stock</Menu.Item>
                            <Menu.Item key="/inventory/view-part-return">View Part Return</Menu.Item>
                            <Menu.Item key="/inventory/stock-receive">Stock Receive</Menu.Item>
                            <Menu.Item key="/inventory/stock-conversion">Stock Conversion</Menu.Item>
                            <Menu.Item key="/inventory/view-stock-conversion">View Stock Conversion</Menu.Item>
                            <Menu.Item key="/inventory/short-receive-clearance">Short Receive Clearance</Menu.Item>
                            <Menu.Item key="/inventory/stock-transfer">Stock Transfer</Menu.Item>
                            <Menu.Item key="/inventory/view-part-issue">View Part Issue</Menu.Item>
                            <Menu.Item key="/inventory/stock-transfer-approval">Stock Transfer Approval</Menu.Item>
                        </SubMenu></Menu>
                    <Menu theme="dark" mode="inline" className="sidebar-menu" style={{ backgroundColor: '#EFF3FE' }}>
                        <SubMenu key="sales" title="Sales" icon={<ShoppingOutlined />}>
                            <SubMenu key="Order-In" title="Order-In" icon={<ShoppingCartOutlined />}>
                                <Menu.Item key="/sales/invoice-view-dispatch">Invoice View/Dispatch</Menu.Item>
                            </SubMenu>

                            <SubMenu key="Order-Out" title="Order-Out" icon={<ShoppingCartOutlined />}>
                                <Menu.Item key="/Create Manual Order">Create Manual Order</Menu.Item>
                            </SubMenu>
                        </SubMenu></Menu>
                    <Menu theme="dark" mode="inline" className="sidebar-menu" style={{ backgroundColor: '#EFF3FE' }}>
                        <SubMenu key="/KPI" title="KPI" icon={<BarChartOutlined />}>
                            <Menu.Item key="/Create Manual Order">KPI Deshborad For Feild Call</Menu.Item>
                        </SubMenu></Menu>
                    <Menu theme="dark" mode="inline" className="sidebar-menu" style={{ backgroundColor: '#EFF3FE' }}>
                        <SubMenu key="/Report" title="Report" icon={<FileOutlined />}>

                            <SubMenu key="/Service Reports" title="Service Reports" icon={<FileTextOutlined />}>
                                <Menu.Item key="/service-reports/open-call-detail">Open Call Detail</Menu.Item>
                                <Menu.Item key="/service-reports/call-logged-count">Call Logged Count</Menu.Item>
                                <Menu.Item key="/service-reports/pending-call-summary">Pending Call Summary</Menu.Item>
                                <Menu.Item key="/service-reports/jobsheet-master-data">Jobsheet Master Data</Menu.Item>
                                <Menu.Item key="/service-reports/closed-call-detail">Closed Call Detail</Menu.Item>
                                <Menu.Item key="/service-reports/day-wise-closure-summary">Day Wise Closure Summary Report</Menu.Item>
                                <Menu.Item key="/service-reports/call-updation-from-mobile">Call Updation From Mobile-App Report</Menu.Item>
                                <Menu.Item key="/service-reports/job-transfer">Job Transfer Report</Menu.Item>
                                <Menu.Item key="/service-reports/deploy-base-change-log">Deploy Base Change Log</Menu.Item>
                            </SubMenu>

                            <SubMenu key="/Inventory Reports" title="Inventory Reports" icon={<BarChartOutlined />}>
                                <Menu.Item key="/inventory-reports/service-center-part-consumption">Service Center Part Consumption</Menu.Item>
                                <Menu.Item key="/inventory-reports/engineer-part-consumption">Engineer Part Consumption</Menu.Item>
                                <Menu.Item key="/inventory-reports/deployed-base">Deployed Base Report</Menu.Item>
                                <Menu.Item key="/inventory-reports/repair-stock">Repair Stock Report</Menu.Item>
                                <Menu.Item key="/inventory-reports/stock-detail">Stock Detail Report</Menu.Item>
                                <Menu.Item key="/inventory-reports/stock-summary">Stock Summary Report</Menu.Item>
                                <Menu.Item key="/inventory-reports/damaged-missing-part">Damaged/Missing Part Report</Menu.Item>
                                <Menu.Item key="/inventory-reports/avg-consumption-forecast">Avg Consumption And Forecast</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="/Tat Report">Tat Report</Menu.Item>

                        </SubMenu></Menu>
                    <Menu theme="dark" mode="inline" className="sidebar-menu" style={{ backgroundColor: '#EFF3FE' }}>
                        <SubMenu key="/Help" title="Help" icon={<QuestionCircleOutlined />}>
                            <Menu.Item key="/help/change-password">Change Password</Menu.Item>
                            <Menu.Item key="/help/jobsheet-search">Jobsheet Search</Menu.Item>
                            <Menu.Item key="/help/serial-number-tracker">Serial Number Tracker</Menu.Item>
                            <Menu.Item key="/help/view-upload-data-status">View Upload Data Status</Menu.Item>
                        </SubMenu> </Menu>
                </Menu>


            </div>
            
        </div>

    );
};

export default Sidemenu;
