import React from "react";
import "./style.css";
// KYLE: I just built this for testing purposes - disregard it, but please don't delete it without asking me :)

function UserInfoBlock(props) {
  // portfolioArr = props.userPortfolio;
  // portfolioPretty = "";
  // for(var i = 0; portfolioArr.length; i++){
    
  //   portfolioPretty.push() 
  // }

    return (
      <div className="userInfoBlock">
        <p>User: {props.username}  |   Portfolio: {props.userPortfolio}</p>
      </div>
    );
}

export default UserInfoBlock;
