import React from "react";

export default function Avatar(props) {
  if (props.img) {
    return (
      <div className={`avatar ${props.size ? "avatar-" + props.size : ""} ${props.shape ? "avatar-" + props.shape : ""} ${props.status ?  props.status : ""}`}>
        <img src={props.img} alt="" />
      </div>
    );

  } else if (props.initial) {
    return (
      <div className={`avatar ${props.size ? "avatar-" + props.size : ""} ${props.shape ? "avatar-" + props.shape : ""} ${props.status ? props.status : ""}`}>
        <span className="avatar-initial">{props.initial}</span>
      </div>
    );
  }
}