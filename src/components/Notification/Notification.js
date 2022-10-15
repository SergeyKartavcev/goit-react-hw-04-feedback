import React from "react";
import PropTypes from "prop-types"
import styled from "../Notification/Notification.module.css"
 const Notification = ({massage})=>{
    return(
    <p className={styled.massege}> {massage}No feedback given</p>
    )
}

Notification.proptype = {
    massage: PropTypes.string.isRequired
}

export default Notification
