import React from "react";
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';
import axios from "axios";  
// / "proxy": "http://localhost:3002",

// if local work needs to be done, add this back into package.json


class PortfolioCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          newStock: ""
        }
      } 
    
      handleInputChange = (event) => { // Handles every time someone types in the input of the below form
        const { name, value } = event.target; // We get the name and value off of the input that is currently being typed in
        console.log("NAME: ", name, '\n', "VALUE: ", value);
        this.setState({ [name]: value }) // By using the name property (as long as it matches the same name in state) we only need one function for multiple inputs
      }
      removeStock = (index) => {
          const newPortfolio = [...this.props.user.portfolio];
          newPortfolio.splice(index, 1)
      axios.put(`http://localhost:3002/api/users/${this.props.user.userID}`,{ portfolio: newPortfolio })
      .then(res => this.props.setPortfolio(res.data))
      .catch(err => console.log(err))
      
    }
    
      handleOnSubmit = () => {
          this.setState({
              newStock: ''
          })
        axios.put(`http://localhost:3002/api/users/${this.props.user.userID}`,{ portfolio: [...this.props.user.portfolio, this.state.newStock]})
        .then(res => this.props.setPortfolio(res.data))
        .catch(err => console.log(err))
        
      }
render(){
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
            {this.props.user.portfolio.map((portfolio, index) => {
                return (
                  <tr key = {index}>
                    <th scope="row">{portfolio}</th>
                    <td><button type="button" className="btn btn-danger" onClick = {() => this.removeStock(index)}>X</button></td>
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
            <Form className="new-stock-form">
                <FormGroup>
                    <Label>Stock Name</Label>
                    <Input className="stock-input" 
                        name="newStock" 
                        type="text" 
                        placeholder="Enter a stock symbol" 
                        onChange={this.handleInputChange} 
                        value={this.state.newStock} 
                    />
                </FormGroup>
            </Form>
        </div>
        <Button 
        onClick={this.handleOnSubmit} 
        className="btn-lg btn-dark"
        >Add new stock</Button>
      </div>
    </div>
  );
}
                  
}
                       
                    


export default PortfolioCard;
