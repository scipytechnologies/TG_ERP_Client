import React from 'react'
import { Link } from "react-router-dom";
import Img1 from "../assets/img/img10.jpg";
import Img2 from "../assets/img/img11.jpg";
import Img3 from "../assets/img/img14.jpg";
import Img4 from "../assets/img/img15.jpg";

// eslint-disable-next-line
export default Notification = [
    {
        "avatar": (<img src={Img1} alt="" />),
        "userName": (<React.Fragment><strong>Dominador Manuel</strong></React.Fragment>),
        "message": "Hello how are you",
        "status": "online",
        "time" : "01:12 PM"
    },
    {
        "avatar": (<img src={Img2} alt="" />),
        "userName": (<React.Fragment><strong>Angela Ighot</strong></React.Fragment>),
        "message": "How are you here the ob",
        "status": "online",
        "time" : "01:12 PM"
        
    },
    {
        "avatar": (<span className="avatar-initial bg-primary">a</span>),
        "userName": (<React.Fragment><strong>Rahuk Ighot</strong></React.Fragment>),
        "message": " sdfsdssdfdf fsdsdfsdfsd",
        "status": "",
        "time" : "01:12 PM"
       
    },
    {
        "avatar": (<img src={Img3} alt="" />),
        "userName": (<React.Fragment><strong>Meftak Lorme</strong></React.Fragment>),
        "message": "Lorem isdfhjsd",
        "status": "online",
        "time" : "01:12 PM"
       
    },
    {
        "avatar": (<img src={Img4} alt="" />),
        "userName": (<React.Fragment><strong>Rawit Singk</strong></React.Fragment>),
        "message": "Lorem ipsum the radiculas",
        "status": "online",
        "time" : "01:12 PM"
    }
];