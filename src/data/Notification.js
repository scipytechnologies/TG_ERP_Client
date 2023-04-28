import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../assets/img/img10.jpg";
import Img2 from "../assets/img/img11.jpg";
import Img3 from "../assets/img/img14.jpg";
import Img4 from "../assets/img/img15.jpg";

// eslint-disable-next-line
export default Notification = [
  {
    "avatar": (<img src={Img1} alt=""/>),
    "text": (<React.Fragment><strong>Dominador Manuel</strong> and <strong>100 other people</strong> reacted to your comment "Tell your partner that...</React.Fragment>),
    "date": "Aug 20 08:55am",
    "status": "online"
  },
  {
    "avatar": (<img src={Img2} alt="" />),
    "text": (<React.Fragment><strong>Angela Ighot</strong> tagged you and <strong>9 others</strong> in a post.</React.Fragment>),
    "date": "Aug 18 10:30am",
    "status": "online"
  },
  {
    "avatar": (<span className="avatar-initial bg-primary">a</span>),
    "text": (<React.Fragment>New listings were added that match your search alert <strong>house for rent</strong></React.Fragment>),
    "date": "Aug 15 08:10pm",
    "status": ""
  },
  {
    "avatar": (<img src={Img3} alt="" />),
    "text": (<React.Fragment>Reminder: <strong>Jerry Cuares</strong> invited you to like <strong>Cuares Surveying Services</strong>. <br /><Link to="/">Accept</Link> or <Link to="/">Decline</Link></React.Fragment>),
    "date": "Aug 14 11:50pm",
    "status": "online"
  },
  {
    "avatar": (<img src={Img4} alt="" />),
    "text": (<React.Fragment><strong>Dyanne Aceron</strong> reacted to your post <strong>King of the Bed</strong></React.Fragment>),
    "date": "Aug 10 05:30am",
    "status": "online"
  }
];

