import React from "react";
// import { Button, Form, FormGroup, Label, Input }
//   from 'reactstrap';
// import axios from "axios";  
// / "proxy": "http://localhost:3002",

// if local work needs to be done, add this back into package.json


function PortfolioCard(props) {


  return (
    <div className="tableWrapper">
      <table className="table">
        <thead>
            <tr>
              <th scope="col">Ticker</th>
              <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {props.userPortfolio.map((portfolio, index) => {
                return (
                  <tr key = {index}>
                    <th scope="row">{portfolio}</th>
                    <td><button type="button" className="btn btn-danger">X</button></td>
                  </tr>
                )
            })}  
        </tbody> 
      </table>
          
      <div className ="wrapper">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">{/*<img src="../assets/images/logo2.jpg" width="30px"/>*/}</span>
          </div>
          <input type="text" className="form-control" placeholder="Stock Name" aria-label="Stock Name" aria-describedby="basic-addon1"/>
        </div>
          <button type="button" className="btn btn-primary">Add New</button>
      </div>
    </div>
  );                
}
                       
                    


export default PortfolioCard;
