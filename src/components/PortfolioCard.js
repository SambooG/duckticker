import React from "react";
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

function PortfolioCard() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Ticker</th>
                    <th scope="col">Stock Name</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Up</th>
                    <td>Stock Name 1</td>
                    <button type="button" class="btn btn-danger">X</button>
                </tr>
                <tr>
                    <th scope="row">Down</th>
                    <td>StockName2</td>
                    <button type="button" class="btn btn-danger">X</button>
                </tr>
                <tr>
                    <th scope="row">Down</th>
                    <td>StockName3</td>
                    <button type="button" class="btn btn-danger">X</button>
                </tr>
               </tbody> 


               
               
               <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        {/*Want to put image of duck or something else interesting in the span here but having trouble formatting.
                           any design thoughts are welcome. */}
                        <span className="input-group-text" id="basic-addon1">{/*<img src="../assets/images/logo2.jpg" width="30px"/>*/}</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Stock Name" aria-label="Stock Name" aria-describedby="basic-addon1"/>
</div>
    <button type="button" className="btn btn-primary">Add New</button>

      </table>
  
    );
}


export default PortfolioCard;
