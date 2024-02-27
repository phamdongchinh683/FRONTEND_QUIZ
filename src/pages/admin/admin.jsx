import React from "react";
import { Link } from "react-router-dom";
import iconAdmin from "../../assets/icon/admin.png";
import "../Auth/login/login.scss";

const Admin = ({ LinkTo, TextStatus }) => {
    return (
        <Link to={LinkTo}>
            <div className='container-login-show'>
                <div className='my-out-img'>
                    <img src={iconAdmin} alt="Guest" className='image-guest' />
                </div>
                <div className='guest-text-status'>{TextStatus}</div>
            </div>
        </Link>
    );
};

export default Admin;