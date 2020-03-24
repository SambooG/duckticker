import React from "react";
import "./style.css";
// KYLE: I just built this for testing purposes - disregard it, but please don't delete it without asking me :)

function UserInfoBlock(props) {

    return (
      <div className="userInfoBlock">
        <p>Hello World</p>
        <p>Hello, {props.username}</p>
      </div>
    );
}

export default UserInfoBlock;
